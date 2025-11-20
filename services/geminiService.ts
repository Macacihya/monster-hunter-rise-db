
import { MONSTER_DETAILS_DB, getFallbackMonsterDetail, MONSTERS_DATA, ITEMS_DATA, WEAPONS_DATA } from '../constants';
import { MonsterDetail } from '../types';

// --- Helper to generate Star Rating ---
const getStars = (count: number) => {
  if (count === 0) return "❌ (Immune)";
  return "⭐".repeat(count);
};

// --- GENERATORS ---

const generateMonsterMarkdown = (name: string): string => {
  const summary = MONSTERS_DATA.find(m => m.name.toLowerCase() === name.toLowerCase());
  
  if (!summary) return `Data untuk monster "${name}" tidak ditemukan di Hunter's Notes.`;

  // Get detail from DB or fallback
  const detail: MonsterDetail = MONSTER_DETAILS_DB[name] || getFallbackMonsterDetail(summary);

  let md = `# ${detail.name} (${detail.expansion || 'Rise'})\n\n`;
  md += `> ${detail.description}\n\n`;

  // 1. GENERAL INFO (Size, Weakness Sign)
  md += `## 📏 Informasi Dasar\n`;
  md += `**Ukuran (Crown Size):**\n`;
  md += `*   👑 Kecil: **${detail.size.small}**\n`;
  md += `*   👑 Besar: **${detail.size.big}**\n\n`;
  md += `**Tanda Sekarat (Capture Ready):** ${detail.weaknessSign}\n`;

  // 2. TIPS BERBURU (NEW SECTION)
  if (detail.tips && detail.tips.length > 0) {
    md += `\n## 💡 Tips & Strategi\n`;
    detail.tips.forEach(tip => {
      md += `*   ${tip}\n`;
    });
    md += `\n`;
  }
  
  // 3. PHYSIOLOGY (Hitzone Table + Breakable Parts)
  md += `\n## ⚔️ Fisiologi & Hitzone\n`;
  md += `**Bagian Tubuh yang Bisa Dirusak:**\n`;
  md += `${detail.breakableParts.map(p => `\`${p}\``).join(' ')}\n\n`;
  md += `Angka menunjukan efektivitas kerusakan. **Bold** = Weakness Exploit aktif.\n\n`;
  md += `| Bagian | 🗡️ Slash | 🔨 Impact | 🏹 Shot | 🔥 | 💧 | ⚡ | ❄️ | 🐉 |\n`;
  md += `|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n`;
  
  detail.hitzones.forEach(hz => {
    // Bold values >= 45 (Weakness Exploit range)
    const formatVal = (val: number) => val >= 45 ? `**${val}**` : `${val}`;
    const formatEl = (val: number) => val >= 20 ? `**${val}**` : val === 0 ? '-' : `${val}`;
    
    md += `| **${hz.part}** | ${formatVal(hz.slash)} | ${formatVal(hz.impact)} | ${formatVal(hz.shot)} | ${formatEl(hz.fire)} | ${formatEl(hz.water)} | ${formatEl(hz.thunder)} | ${formatEl(hz.ice)} | ${formatEl(hz.dragon)} |\n`;
  });
  
  // 4. PART BREAK REWARDS
  if (detail.breakRewards && detail.breakRewards.length > 0) {
    md += `\n## 🧩 Hadiah Part Break (Hancurkan Bagian)\n`;
    md += `Targetkan bagian ini untuk item spesifik.\n\n`;
    md += `| Bagian | Rank | Item | Rate |\n`;
    md += `|---|:---:|---|:---:|\n`;
    detail.breakRewards.forEach(br => {
      md += `| **${br.part}** | ${br.rank} | **${br.item}** | ${br.rate} |\n`;
    });
  }

  // 5. HABITAT (Area Change Pattern)
  if (detail.habitat && detail.habitat.length > 0) {
    md += `\n## 🗺️ Habitat & Pola Area\n`;
    md += `| Peta | Area Aktif | Tidur |\n`;
    md += `|---|---|:---:|\n`;
    detail.habitat.forEach(h => {
      const areaStr = h.areas.join(', ');
      md += `| ${h.map} | ${areaStr} | Area ${h.rest} |\n`;
    });
  }

  // 6. AILMENTS
  md += `\n## 🧪 Efektivitas Status\n`;
  md += `| Racun | Stun | Paralisis | Tidur | Ledakan |\n`;
  md += `|:---:|:---:|:---:|:---:|:---:|\n`;
  md += `| ${getStars(detail.ailmentEffectiveness.poison)} | ${getStars(detail.ailmentEffectiveness.stun)} | ${getStars(detail.ailmentEffectiveness.paralysis)} | ${getStars(detail.ailmentEffectiveness.sleep)} | ${getStars(detail.ailmentEffectiveness.blast)} |\n`;

  // 7. KEY QUESTS
  if (detail.keyQuests && detail.keyQuests.length > 0) {
    md += `\n## 📜 Quest Penting\n`;
    md += `| Level | Tipe | Nama Quest |\n`;
    md += `|---|:---:|---|\n`;
    detail.keyQuests.forEach(q => {
      const typeIcon = q.type === 'Urgent' ? '🔴' : q.type === 'Key' ? '🔑' : '⚪';
      md += `| ${q.level} | ${typeIcon} | ${q.name} |\n`;
    });
  }

  // 8. DROPS
  if (detail.drops.highRank) {
    md += `\n## 💎 Material Penting (High Rank)\n`;
    md += `| Item | Rate / Cara |\n`;
    md += `|---|---|\n`;
    detail.drops.highRank.forEach(d => {
      md += `| **${d.name}** | ${d.rate} |\n`;
    });
  }

  return md;
};

const generateItemMarkdown = (name: string): string => {
  const item = ITEMS_DATA.find(i => i.name.toLowerCase() === name.toLowerCase());
  
  if (!item) {
    // Simple fuzzy search
    const match = ITEMS_DATA.find(i => i.name.toLowerCase().includes(name.toLowerCase()));
    if (match) return generateItemMarkdown(match.name);
    return `Item "${name}" tidak ditemukan di database.`;
  }

  let md = `# ${item.name}\n`;
  md += `**Kategori:** ${item.category} | **Rarity:** ${item.rarity}\n\n`;
  md += `> ${item.description}\n\n`;
  
  if (item.location) {
    md += `## 📍 Lokasi & Cara Mendapatkan\n`;
    md += `*   ${item.location}\n`;
  }

  if (item.recipe) {
    md += `## ⚗️ Resep Crafting\n`;
    md += `*   **${item.recipe}**\n`;
  }

  if (item.usage) {
    md += `## 💡 Kegunaan Utama\n`;
    md += `*   ${item.usage}\n`;
  }

  return md;
};

const generateWeaponMarkdown = (name: string): string => {
  // Simple generalized advice since we don't have a build simulator offline
  const weapon = WEAPONS_DATA.find(w => w.name.toLowerCase().includes(name.toLowerCase()));
  if (!weapon) return "Senjata tidak ditemukan.";

  let md = `# Panduan ${weapon.name}\n\n`;
  md += `> ${weapon.description}\n\n`;
  
  md += `## 🛡️ Skill Wajib (Meta)\n`;
  md += `Gunakan skill ini di armor set Anda:\n`;
  weapon.prioritySkills.forEach(skill => {
    md += `*   **${skill}**\n`;
  });

  md += `\n## ⚔️ Gaya Bermain\n`;
  md += `1.  Pastikan selalu upgrade senjata ke Rarity tertinggi.\n`;
  md += `2.  Untuk Sunbreak, gunakan Qurious Crafting untuk menambah slot decoration.\n`;
  md += `3.  Cek halaman **Monster** untuk melihat kelemahan elemen sebelum memilih senjata.\n`;

  return md;
};

// --- MAIN QUERY FUNCTION (Replaces Gemini) ---

export const queryOfflineDatabase = async (prompt: string): Promise<string> => {
  // Simulate "Processing" delay for realistic feel
  await new Promise(resolve => setTimeout(resolve, 400));

  const lowerPrompt = prompt.toLowerCase();

  // 1. Check for Monster queries
  const monsterMatch = MONSTERS_DATA.find(m => lowerPrompt.includes(m.name.toLowerCase()));
  if (monsterMatch) {
    return generateMonsterMarkdown(monsterMatch.name);
  }

  // 2. Check for Weapon queries
  const weaponMatch = WEAPONS_DATA.find(w => lowerPrompt.includes(w.name.toLowerCase()));
  if (weaponMatch) {
    return generateWeaponMarkdown(weaponMatch.name);
  }

  // 3. Check for Item queries
  const itemMatch = ITEMS_DATA.find(i => lowerPrompt.includes(i.name.toLowerCase()));
  if (itemMatch) {
    return generateItemMarkdown(itemMatch.name);
  }

  // 4. General Fallback
  return "Maaf, Hunter. Saya tidak menemukan data spesifik tentang hal itu di database offline ini. Coba sebutkan nama **Monster**, **Senjata**, atau **Item** secara spesifik (Contoh: 'Magnamalo', 'Great Sword', 'Machalite Ore').";
};
