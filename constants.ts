
import { MonsterSummary, WeaponCategory, ItemSummary, MonsterDetail, ArmorSet } from './types';

// --- IMAGE PLACEHOLDERS (Simulated Assets) ---
const getImg = (text: string, bg: string, fg: string = 'fff') => `https://placehold.co/600x400/${bg}/${fg}?text=${encodeURIComponent(text)}`;
const getIcon = (text: string, bg: string) => `https://placehold.co/150x150/${bg}/fff?text=${encodeURIComponent(text.substring(0, 2))}`;

// --- 1. BASIC LISTS (For Navigation - SORTED BY PROGRESSION) ---

export const MONSTERS_DATA: MonsterSummary[] = [
  // --- VILLAGE / LOW RANK ---
  { id: 'm11', name: 'Great Izuchi', type: 'Bird Wyvern', expansion: 'Rise', threatLevel: 1, elements: ['None'], ailments: ['None'], iconColor: 'bg-orange-700', image: getImg('Great Izuchi', 'c2410c') },
  { id: 'om1', name: 'Great Baggi', type: 'Bird Wyvern', expansion: 'Rise', threatLevel: 1, elements: ['None'], ailments: ['Sleep'], iconColor: 'bg-blue-800', image: getImg('Great Baggi', '1e40af') },
  { id: 'om3', name: 'Kulu-Ya-Ku', type: 'Bird Wyvern', expansion: 'Rise', threatLevel: 2, elements: ['None'], ailments: ['Stun'], iconColor: 'bg-orange-200 text-black', image: getImg('Kulu-Ya-Ku', 'fed7aa') },
  { id: 'om2', name: 'Great Wroggi', type: 'Bird Wyvern', expansion: 'Rise', threatLevel: 1, elements: ['None'], ailments: ['Poison'], iconColor: 'bg-orange-600', image: getImg('Great Wroggi', 'ea580c') },
  { id: 'om8', name: 'Arzuros', type: 'Fanged Beast', expansion: 'Rise', threatLevel: 1, elements: ['None'], ailments: ['None'], iconColor: 'bg-cyan-900', image: getImg('Arzuros', '164e63') },
  { id: 'om7', name: 'Lagombi', type: 'Fanged Beast', expansion: 'Rise', threatLevel: 2, elements: ['Ice'], ailments: ['Iceblight'], iconColor: 'bg-slate-200 text-black', image: getImg('Lagombi', 'e2e8f0') },
  { id: 'om6', name: 'Volvidon', type: 'Fanged Beast', expansion: 'Rise', threatLevel: 3, elements: ['None'], ailments: ['Paralysis', 'Stench'], iconColor: 'bg-red-700', image: getImg('Volvidon', 'b91c1c') },
  { id: 'm12', name: 'Aknosom', type: 'Bird Wyvern', expansion: 'Rise', threatLevel: 2, elements: ['Fire'], ailments: ['Fireblight'], iconColor: 'bg-rose-800', image: getImg('Aknosom', '9f1239') },
  { id: 'om5', name: 'Royal Ludroth', type: 'Leviathan', expansion: 'Rise', threatLevel: 3, elements: ['Water'], ailments: ['Waterblight'], iconColor: 'bg-yellow-500 text-black', image: getImg('Royal Ludroth', 'eab308') },
  { id: 'om4', name: 'Barroth', type: 'Brute Wyvern', expansion: 'Rise', threatLevel: 3, elements: ['Water'], ailments: ['Waterblight', 'Mud'], iconColor: 'bg-amber-900', image: getImg('Barroth', '78350f') },
  { id: 'm10', name: 'Khezu', type: 'Flying Wyvern', expansion: 'Rise', threatLevel: 3, elements: ['Thunder'], ailments: ['Thunderblight', 'Paralysis'], iconColor: 'bg-gray-300 text-black', image: getImg('Khezu', 'cbd5e1', '000') },
  { id: 'm13', name: 'Tetranadon', type: 'Amphibian', expansion: 'Rise', threatLevel: 2, elements: ['Water'], ailments: ['Waterblight'], iconColor: 'bg-emerald-800', image: getImg('Tetranadon', '065f46') },
  { id: 'm14', name: 'Bishaten', type: 'Fanged Beast', expansion: 'Rise', threatLevel: 4, elements: ['None'], ailments: ['Poison', 'Paralysis', 'Stun'], iconColor: 'bg-purple-700', image: getImg('Bishaten', '7e22ce') },
  { id: 'm18', name: 'Pukei-Pukei', type: 'Bird Wyvern', expansion: 'Rise', threatLevel: 4, elements: ['None'], ailments: ['Poison'], iconColor: 'bg-lime-800', image: getImg('Pukei-Pukei', '3f6212') },
  { id: 'm19', name: 'Jyuratodus', type: 'Piscine Wyvern', expansion: 'Rise', threatLevel: 4, elements: ['Water'], ailments: ['Waterblight', 'Mud'], iconColor: 'bg-stone-800', image: getImg('Jyuratodus', '292524') },
  { id: 'om9', name: 'Basarios', type: 'Flying Wyvern', expansion: 'Rise', threatLevel: 3, elements: ['Fire'], ailments: ['Fireblight', 'Poison', 'Sleep'], iconColor: 'bg-stone-600', image: getImg('Basarios', '57534e') },
  { id: 'm15', name: 'Somnacanth', type: 'Leviathan', expansion: 'Rise', threatLevel: 5, elements: ['None'], ailments: ['Sleep', 'Blast'], iconColor: 'bg-indigo-900', image: getImg('Somnacanth', '312e81') },
  
  // --- HIGH RANK ---
  { id: 'm16', name: 'Rathian', type: 'Flying Wyvern', expansion: 'Rise', threatLevel: 4, elements: ['Fire'], ailments: ['Fireblight', 'Poison'], iconColor: 'bg-green-900', image: getImg('Rathian', '14532d') },
  { id: 'm9', name: 'Barioth', type: 'Flying Wyvern', expansion: 'Rise', threatLevel: 5, elements: ['Ice'], ailments: ['Iceblight'], iconColor: 'bg-sky-800', image: getImg('Barioth', '075985') },
  { id: 'om10', name: 'Tobi-Kadachi', type: 'Fanged Wyvern', expansion: 'Rise', threatLevel: 4, elements: ['Thunder'], ailments: ['Thunderblight'], iconColor: 'bg-blue-500', image: getImg('Tobi-Kadachi', '3b82f6') },
  { id: 'm1', name: 'Magnamalo', type: 'Fanged Wyvern', expansion: 'Rise', threatLevel: 7, elements: ['None'], ailments: ['Hellfire'], iconColor: 'bg-purple-900', image: getImg('Magnamalo', '581c87') },
  { id: 'm17', name: 'Anjanath', type: 'Brute Wyvern', expansion: 'Rise', threatLevel: 5, elements: ['Fire'], ailments: ['Fireblight'], iconColor: 'bg-rose-900', image: getImg('Anjanath', '881337') },
  { id: 'm7', name: 'Nargacuga', type: 'Flying Wyvern', expansion: 'Rise', threatLevel: 5, elements: ['None'], ailments: ['Bleeding'], iconColor: 'bg-slate-700', image: getImg('Nargacuga', '334155') },
  { id: 'm3', name: 'Mizutsune', type: 'Leviathan', expansion: 'Rise', threatLevel: 6, elements: ['Water'], ailments: ['Waterblight', 'Bubble'], iconColor: 'bg-pink-800', image: getImg('Mizutsune', '9d174d') },
  { id: 'm5', name: 'Goss Harag', type: 'Fanged Beast', expansion: 'Rise', threatLevel: 6, elements: ['Ice'], ailments: ['Iceblight'], iconColor: 'bg-cyan-900', image: getImg('Goss Harag', '164e63') },
  { id: 'm2', name: 'Rathalos', type: 'Flying Wyvern', expansion: 'Rise', threatLevel: 6, elements: ['Fire'], ailments: ['Fireblight', 'Poison'], iconColor: 'bg-red-900', image: getImg('Rathalos', '7f1d1d') },
  { id: 'm6', name: 'Almudron', type: 'Leviathan', expansion: 'Rise', threatLevel: 6, elements: ['Water'], ailments: ['Waterblight', 'Mud'], iconColor: 'bg-orange-900', image: getImg('Almudron', '7c2d12') },
  { id: 'm4', name: 'Zinogre', type: 'Fanged Wyvern', expansion: 'Rise', threatLevel: 6, elements: ['Thunder'], ailments: ['Thunderblight'], iconColor: 'bg-yellow-800', image: getImg('Zinogre', '854d0e') },
  { id: 'm8', name: 'Tigrex', type: 'Flying Wyvern', expansion: 'Rise', threatLevel: 6, elements: ['None'], ailments: ['None'], iconColor: 'bg-amber-700', image: getImg('Tigrex', 'b45309') },
  { id: 'm21', name: 'Diablos', type: 'Flying Wyvern', expansion: 'Rise', threatLevel: 7, elements: ['None'], ailments: ['Stun'], iconColor: 'bg-yellow-900', image: getImg('Diablos', '713f12') },
  { id: 'm20', name: 'Rakna-Kadaki', type: 'Temnoceran', expansion: 'Rise', threatLevel: 7, elements: ['Fire'], ailments: ['Fireblight', 'Webbed'], iconColor: 'bg-red-950', image: getImg('Rakna-Kadaki', '450a0a') },
  
  // --- ELDER DRAGONS & APEX ---
  { id: 'm24', name: 'Chameleos', type: 'Elder Dragon', expansion: 'Rise', threatLevel: 9, elements: ['None'], ailments: ['Poison', 'Fatigue', 'Theft'], iconColor: 'bg-fuchsia-900', image: getImg('Chameleos', '701a75') },
  { id: 'm25', name: 'Kushala Daora', type: 'Elder Dragon', expansion: 'Rise', threatLevel: 9, elements: ['Ice'], ailments: ['Iceblight'], iconColor: 'bg-slate-600', image: getImg('Kushala Daora', '475569') },
  { id: 'm26', name: 'Teostra', type: 'Elder Dragon', expansion: 'Rise', threatLevel: 9, elements: ['Fire'], ailments: ['Fireblight', 'Blast'], iconColor: 'bg-red-800', image: getImg('Teostra', '991b1b') },
  { id: 'm22', name: 'Rajang', type: 'Fanged Beast', expansion: 'Rise', threatLevel: 8, elements: ['Thunder'], ailments: ['Thunderblight'], iconColor: 'bg-yellow-950 text-yellow-100', image: getImg('Rajang', '422006') },
  { id: 'm23', name: 'Bazelgeuse', type: 'Flying Wyvern', expansion: 'Rise', threatLevel: 8, elements: ['Fire'], ailments: ['Blast', 'Fireblight'], iconColor: 'bg-orange-950', image: getImg('Bazelgeuse', '431407') },
  { id: 'm28', name: 'Wind Serpent Ibushi', type: 'Elder Dragon', expansion: 'Rise', threatLevel: 9, elements: ['Dragon'], ailments: ['Dragonblight'], iconColor: 'bg-blue-900', image: getImg('Ibushi', '1e3a8a') },
  { id: 'm29', name: 'Thunder Serpent Narwa', type: 'Elder Dragon', expansion: 'Rise', threatLevel: 9, elements: ['Thunder'], ailments: ['Thunderblight'], iconColor: 'bg-yellow-700', image: getImg('Narwa', 'a16207') },
  { id: 'm30', name: 'Narwa the Allmother', type: 'Elder Dragon', expansion: 'Rise', threatLevel: 10, elements: ['Thunder', 'Dragon'], ailments: ['Thunderblight'], iconColor: 'bg-amber-600', image: getImg('Allmother', 'd97706') },
  { id: 'm27', name: 'Crimson Glow Valstrax', type: 'Elder Dragon', expansion: 'Rise', threatLevel: 10, elements: ['Dragon'], ailments: ['Dragonblight'], iconColor: 'bg-rose-950 border-rose-500', image: getImg('Valstrax', '881337') },
  
  // --- APEX ---
  { id: 'apex1', name: 'Apex Arzuros', type: 'Fanged Beast', expansion: 'Rise', threatLevel: 8, elements: ['None'], ailments: ['Stun', 'Defense Down'], iconColor: 'bg-red-950 border-blue-500', image: getImg('Apex Arzuros', '450a0a') },
  { id: 'apex2', name: 'Apex Rathian', type: 'Flying Wyvern', expansion: 'Rise', threatLevel: 9, elements: ['Fire'], ailments: ['Poison', 'Fireblight'], iconColor: 'bg-purple-900 border-green-500', image: getImg('Apex Rathian', '581c87') },
  { id: 'apex3', name: 'Apex Mizutsune', type: 'Leviathan', expansion: 'Rise', threatLevel: 9, elements: ['Water'], ailments: ['Waterblight', 'Hellfire'], iconColor: 'bg-pink-900 border-purple-500', image: getImg('Apex Mizutsune', '831843') },
  { id: 'apex4', name: 'Apex Rathalos', type: 'Flying Wyvern', expansion: 'Rise', threatLevel: 10, elements: ['Fire'], ailments: ['Fireblight', 'Poison'], iconColor: 'bg-red-950 border-orange-500', image: getImg('Apex Rathalos', '7f1d1d') },
  { id: 'apex5', name: 'Apex Diablos', type: 'Flying Wyvern', expansion: 'Rise', threatLevel: 10, elements: ['None'], ailments: ['Stun'], iconColor: 'bg-yellow-950 border-red-500', image: getImg('Apex Diablos', '422006') },
  { id: 'apex6', name: 'Apex Zinogre', type: 'Fanged Wyvern', expansion: 'Rise', threatLevel: 10, elements: ['Thunder'], ailments: ['Thunderblight'], iconColor: 'bg-yellow-900 border-green-500', image: getImg('Apex Zinogre', '713f12') },

  // --- SUNBREAK PROGRESSION ---
  { id: 'sb10', name: 'Daimyo Hermitaur', type: 'Carapaceon', expansion: 'Sunbreak', threatLevel: 3, elements: ['Water'], ailments: ['Waterblight'], iconColor: 'bg-red-600', image: getImg('Daimyo', 'dc2626') },
  { id: 'sb11', name: 'Shogun Ceanataur', type: 'Carapaceon', expansion: 'Sunbreak', threatLevel: 4, elements: ['Water'], ailments: ['Bleeding'], iconColor: 'bg-blue-700', image: getImg('Shogun', '1d4ed8') },
  { id: 'sub3', name: 'Blood Orange Bishaten', type: 'Fanged Beast', expansion: 'Sunbreak', threatLevel: 5, elements: ['Fire'], ailments: ['Fireblight', 'Paralysis'], iconColor: 'bg-orange-700', image: getImg('BO Bishaten', 'c2410c') },
  { id: 'sb3', name: 'Garangolm', type: 'Fanged Beast', expansion: 'Sunbreak', threatLevel: 7, elements: ['Water', 'Fire'], ailments: ['Fireblight', 'Waterblight'], iconColor: 'bg-green-900', image: getImg('Garangolm', '14532d') },
  { id: 'sub2', name: 'Aurora Somnacanth', type: 'Leviathan', expansion: 'Sunbreak', threatLevel: 6, elements: ['Ice'], ailments: ['Iceblight'], iconColor: 'bg-blue-300 text-black', image: getImg('Aurora Somnacanth', '93c5fd') },
  { id: 'sb2', name: 'Lunagaron', type: 'Fanged Wyvern', expansion: 'Sunbreak', threatLevel: 7, elements: ['Ice'], ailments: ['Iceblight'], iconColor: 'bg-cyan-950', image: getImg('Lunagaron', '164e63') },
  { id: 'sb8', name: 'Astalos', type: 'Flying Wyvern', expansion: 'Sunbreak', threatLevel: 7, elements: ['Thunder'], ailments: ['Thunderblight', 'Paralysis'], iconColor: 'bg-lime-600', image: getImg('Astalos', '65a30d') },
  { id: 'sb7', name: 'Seregios', type: 'Flying Wyvern', expansion: 'Sunbreak', threatLevel: 7, elements: ['None'], ailments: ['Bleeding'], iconColor: 'bg-amber-500 text-black', image: getImg('Seregios', 'd97706') },
  { id: 'sb4', name: 'Espinas', type: 'Flying Wyvern', expansion: 'Sunbreak', threatLevel: 7, elements: ['Fire'], ailments: ['Poison', 'Paralysis', 'Fireblight'], iconColor: 'bg-emerald-900 border-red-500', image: getImg('Espinas', '064e3b') },
  { id: 'sub1', name: 'Magma Almudron', type: 'Leviathan', expansion: 'Sunbreak', threatLevel: 7, elements: ['Fire'], ailments: ['Fireblight'], iconColor: 'bg-orange-950', image: getImg('Magma Almudron', '7c2d12') },
  { id: 'sub4', name: 'Pyre Rakna-Kadaki', type: 'Temnoceran', expansion: 'Sunbreak', threatLevel: 7, elements: ['Fire', 'Blast'], ailments: ['Blast', 'Webbed'], iconColor: 'bg-stone-800', image: getImg('Pyre Rakna', '292524') },
  { id: 'sb5', name: 'Gore Magala', type: 'Unknown', expansion: 'Sunbreak', threatLevel: 7, elements: ['None'], ailments: ['Frenzy'], iconColor: 'bg-violet-950', image: getImg('Gore Magala', '2e1065') },
  { id: 'sb6', name: 'Shagaru Magala', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 9, elements: ['None'], ailments: ['Frenzy'], iconColor: 'bg-yellow-600 text-white', image: getImg('Shagaru Magala', 'ca8a04') },
  { id: 'sb1', name: 'Malzeno', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 9, elements: ['Dragon'], ailments: ['Bloodblight'], iconColor: 'bg-pink-950 border-pink-800', image: getImg('Malzeno', '831843') },
  { id: 'sb9', name: 'Gaismagorm', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 10, elements: ['Dragon', 'Fire'], ailments: ['Qurio'], iconColor: 'bg-rose-950', image: getImg('Gaismagorm', '4c0519') },

  // --- SUNBREAK ENDGAME / TITLE UPDATES ---
  { id: 'sub6', name: 'Furious Rajang', type: 'Fanged Beast', expansion: 'Sunbreak', threatLevel: 9, elements: ['Thunder'], ailments: ['Thunderblight'], iconColor: 'bg-yellow-500 text-black', image: getImg('Furious Rajang', 'eab308') },
  { id: 'sub5', name: 'Scorned Magnamalo', type: 'Fanged Wyvern', expansion: 'Sunbreak', threatLevel: 9, elements: ['None'], ailments: ['Hellfire'], iconColor: 'bg-purple-950 border-purple-500', image: getImg('Scorned Magna', '3b0764') },
  { id: 'sub7', name: 'Seething Bazelgeuse', type: 'Flying Wyvern', expansion: 'Sunbreak', threatLevel: 8, elements: ['Fire'], ailments: ['Blast'], iconColor: 'bg-purple-800', image: getImg('Seething Bazel', '6b21a8') },
  { id: 'rare1', name: 'Gold Rathian', type: 'Flying Wyvern', expansion: 'Sunbreak', threatLevel: 9, elements: ['Fire'], ailments: ['Poison', 'Fireblight'], iconColor: 'bg-yellow-400 text-black', image: getImg('Gold Rathian', 'facc15') },
  { id: 'rare2', name: 'Silver Rathalos', type: 'Flying Wyvern', expansion: 'Sunbreak', threatLevel: 9, elements: ['Fire'], ailments: ['Fireblight'], iconColor: 'bg-slate-300 text-black', image: getImg('Silver Rathalos', 'cbd5e1') },
  { id: 'sub10', name: 'Lucent Nargacuga', type: 'Flying Wyvern', expansion: 'Sunbreak', threatLevel: 9, elements: ['None'], ailments: ['Poison'], iconColor: 'bg-slate-900 border-blue-400', image: getImg('Lucent Narga', '0f172a') },
  { id: 'sub8', name: 'Flaming Espinas', type: 'Flying Wyvern', expansion: 'Sunbreak', threatLevel: 8, elements: ['Fire'], ailments: ['Poison', 'Defense Down'], iconColor: 'bg-orange-800', image: getImg('Flaming Espinas', '9a3412') },
  { id: 'sub9', name: 'Violet Mizutsune', type: 'Leviathan', expansion: 'Sunbreak', threatLevel: 9, elements: ['Fire'], ailments: ['Fireblight'], iconColor: 'bg-violet-500', image: getImg('Violet Mizu', '8b5cf6') },
  { id: 'sub11', name: 'Chaotic Gore Magala', type: 'Unknown', expansion: 'Sunbreak', threatLevel: 9, elements: ['Dragon'], ailments: ['Frenzy'], iconColor: 'bg-gray-800 border-purple-500', image: getImg('Chaotic Gore', '1f2937') },
  { id: 'tu1', name: 'Velkhana', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 9, elements: ['Ice'], ailments: ['Iceblight'], iconColor: 'bg-blue-200 text-black', image: getImg('Velkhana', 'bfdbfe') },
  { id: 'tu2', name: 'Amatsu', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 10, elements: ['Water'], ailments: ['Waterblight'], iconColor: 'bg-slate-400 text-black', image: getImg('Amatsu', '94a3b8') },
  { id: 'ris1', name: 'Risen Chameleos', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 10, elements: ['None'], ailments: ['Poison'], iconColor: 'bg-purple-900 border-orange-500', image: getImg('Risen Chameleos', '581c87') },
  { id: 'ris2', name: 'Risen Kushala Daora', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 10, elements: ['Ice'], ailments: ['Iceblight'], iconColor: 'bg-slate-700 border-orange-500', image: getImg('Risen Kushala', '334155') },
  { id: 'ris3', name: 'Risen Teostra', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 10, elements: ['Fire'], ailments: ['Blast'], iconColor: 'bg-red-700 border-orange-500', image: getImg('Risen Teostra', 'b91c1c') },
  { id: 'ris4', name: 'Risen Crimson Glow Valstrax', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 10, elements: ['Dragon'], ailments: ['Dragonblight'], iconColor: 'bg-rose-900 border-orange-500', image: getImg('Risen Valstrax', '881337') },
  { id: 'ris5', name: 'Risen Shagaru Magala', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 10, elements: ['Dragon'], ailments: ['Frenzy'], iconColor: 'bg-yellow-800 border-purple-500', image: getImg('Risen Shagaru', '854d0e') },
  { id: 'tu3', name: 'Primordial Malzeno', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 10, elements: ['Dragon'], ailments: ['Bloodblight'], iconColor: 'bg-indigo-950 border-yellow-500', image: getImg('Primordial', '312e81') },
];

export const WEAPONS_DATA: WeaponCategory[] = [
  { id: 'w1', name: 'Great Sword', icon: 'Sword', description: 'Serangan berat, gerakan lambat. Damage per hit tertinggi.', prioritySkills: ['Focus', 'Crit Draw', 'Quick Sheath', 'Weakness Exploit'], image: getImg('Great Sword', '374151'), color: 'bg-slate-800' },
  { id: 'w2', name: 'Long Sword', icon: 'Slash', description: 'Combo mengalir, serangan balik (counter). Senjata terpopuler.', prioritySkills: ['Quick Sheath', 'Wirebug Whisperer', 'Critical Boost', 'Maximum Might'], image: getImg('Long Sword', '9f1239'), color: 'bg-red-900' },
  { id: 'w3', name: 'Sword & Shield', icon: 'Shield', description: 'Serbaguna, bisa pakai item saat senjata terhunus.', prioritySkills: ['Critical Eye', 'Attack Boost', 'Wirebug Whisperer', 'Element Attack'], image: getImg('Sword & Shield', '15803d'), color: 'bg-green-800' },
  { id: 'w4', name: 'Dual Blades', icon: 'Scissors', description: 'Serangan cepat, manajemen stamina. DPS Elemen tinggi.', prioritySkills: ['Marathon Runner', 'Constitution', 'Element Attack', 'Critical Element'], image: getImg('Dual Blades', 'b91c1c'), color: 'bg-rose-900' },
  { id: 'w5', name: 'Lance', icon: 'Shield', description: 'Pertahanan tak tembus, presisi. Counter-attack king.', prioritySkills: ['Guard', 'Guard Up', 'Offensive Guard', 'Diversion'], image: getImg('Lance', '1e40af'), color: 'bg-blue-900' },
  { id: 'w6', name: 'Gunlance', icon: 'Zap', description: 'Ledakan, serangan shelling yang mengabaikan hitzone monster.', prioritySkills: ['Artillery', 'Load Shells', 'Guard', 'Wirebug Whisperer'], image: getImg('Gunlance', 'ea580c'), color: 'bg-orange-800' },
  { id: 'w7', name: 'Hammer', icon: 'Hammer', description: 'Damage tumpul, raja KO. Incar kepala!', prioritySkills: ['Slugger', 'Focus', 'Weakness Exploit', 'Wirebug Whisperer'], image: getImg('Hammer', 'a16207'), color: 'bg-yellow-800' },
  { id: 'w8', name: 'Hunting Horn', icon: 'Music', description: 'Buff support, damage tumpul. Sekarang lebih agresif di Rise.', prioritySkills: ['Horn Maestro', 'Stamina Thief', 'Slugger', 'Wirebug Whisperer'], image: getImg('Hunting Horn', '7c2d12'), color: 'bg-amber-900' },
  { id: 'w9', name: 'Switch Axe', icon: 'Move', description: 'Senjata morphing. ZSD menempel pada monster.', prioritySkills: ['Rapid Morph', 'Power Prolonger', 'Evade Extender', 'Attack Boost'], image: getImg('Switch Axe', '4c1d95'), color: 'bg-purple-900' },
  { id: 'w10', name: 'Charge Blade', icon: 'Zap', description: 'Teknis tinggi. Kumpulkan phial, lepaskan SAED.', prioritySkills: ['Load Shells', 'Rapid Morph', 'Artillery', 'Guard'], image: getImg('Charge Blade', 'ca8a04'), color: 'bg-yellow-700' },
  { id: 'w11', name: 'Insect Glaive', icon: 'Feather', description: 'Pertarungan udara, buff kinsect. Raja mounting.', prioritySkills: ['Power Prolonger', 'Constitution', 'Jump Master', 'Critical Eye'], image: getImg('Insect Glaive', '047857'), color: 'bg-emerald-900' },
  { id: 'w12', name: 'Light Bowgun', icon: 'Crosshair', description: 'Mobilitas tinggi, tembakan cepat (Rapid Fire).', prioritySkills: ['Rapid Fire Up', 'Recoil Down', 'Reload Speed', 'Spare Shot'], image: getImg('Light Bowgun', '0e7490'), color: 'bg-cyan-900' },
  { id: 'w13', name: 'Heavy Bowgun', icon: 'Crosshair', description: 'Damage tinggi, lambat. Bisa pakai Shield.', prioritySkills: ['Pierce/Spread/Normal Up', 'Recoil Down', 'Reload Speed', 'Ballistics'], image: getImg('Heavy Bowgun', '0f172a'), color: 'bg-slate-900' },
  { id: 'w14', name: 'Bow', icon: 'Crosshair', description: 'Mobilitas jarak jauh, stamina hungry. DPS konstan.', prioritySkills: ['Constitution', 'Stamina Surge', 'Bow Charge Plus', 'Shot Type Up'], image: getImg('Bow', 'be123c'), color: 'bg-pink-900' },
];

export const ITEMS_DATA: ItemSummary[] = [
  { id: 'i1', name: 'Mega Potion', category: 'Consumable', rarity: 2, description: 'Memulihkan health dalam jumlah sedang.', location: 'Crafting only', usage: 'Healing', recipe: 'Potion + Honey', image: getIcon('MP', '16a34a') },
  { id: 'i2', name: 'Max Potion', category: 'Consumable', rarity: 3, description: 'Memulihkan health sepenuhnya.', location: 'Crafting only', usage: 'Full Healing', recipe: 'Catalyst + Mandragora', image: getIcon('MX', '15803d') },
  { id: 'i3', name: 'Nulberry', category: 'Consumable', rarity: 2, description: 'Menyembuhkan berbagai status abnormal (blight).', location: 'Shrine Ruins, Frost Islands', usage: 'Cure Blights', image: getIcon('NB', '0284c7') },
  { id: 'i4', name: 'Honey', category: 'Material', rarity: 2, description: 'Bahan dasar untuk membuat Mega Potion.', location: 'All Maps (Hive)', usage: 'Crafting Mega Potion', image: getIcon('H', 'eab308') },
  { id: 'i5', name: 'Machalite Ore', category: 'Material', rarity: 4, description: 'Bijih tambang yang umum digunakan di Low Rank.', location: 'Sandy Plains, Lava Caverns (Mining)', usage: 'Weapon Upgrades', image: getIcon('MO', '64748b') },
  { id: 'i6', name: 'Dragonite Ore', category: 'Material', rarity: 5, description: 'Bijih tambang kualitas tinggi dari area Lava.', location: 'Lava Caverns (Mining)', usage: 'High Rank Equipment', image: getIcon('DO', 'f59e0b') },
  { id: 'i7', name: 'Rathalos Ruby', category: 'Material', rarity: 7, description: 'Permata langka dari Rathalos.', location: 'Rathalos (HR/MR Drop)', usage: 'High Level Crafting', image: getIcon('RR', 'dc2626') },
  { id: 'i8', name: 'Plate', category: 'Material', rarity: 5, description: 'Sisik langka (General) dari berbagai monster.', location: 'Low Rank Rare Drop', usage: 'Mid Level Crafting', image: getIcon('P', 'a8a29e') },
  { id: 'i9', name: 'Mantle', category: 'Material', rarity: 8, description: 'Bahan Master Rank yang sangat langka.', location: 'Master Rank Rare Drop', usage: 'Endgame Crafting', image: getIcon('M', '78350f') },
  { id: 'i10', name: 'Flash Bomb', category: 'Consumable', rarity: 2, description: 'Menyebabkan monster buta sementara (Stun).', location: 'Crafting', usage: 'Crowd Control', recipe: 'Flashbug', image: getIcon('FB', 'facc15') },
  { id: 'i11', name: 'Dung Bomb', category: 'Consumable', rarity: 2, description: 'Mengusir monster dari area.', location: 'Crafting', usage: 'Repel Monster', recipe: 'Dung', image: getIcon('DB', '78350f') },
  { id: 'i12', name: 'Shock Trap', category: 'Consumable', rarity: 3, description: 'Perangkap listrik untuk menghentikan monster.', location: 'Crafting', usage: 'Capture/Trap', recipe: 'Trap Tool + Thunderbug', image: getIcon('ST', 'eab308') },
  { id: 'i13', name: 'Pitfall Trap', category: 'Consumable', rarity: 3, description: 'Perangkap lubang. Durasi lebih lama pada monster lelah.', location: 'Crafting', usage: 'Capture/Trap', recipe: 'Trap Tool + Net', image: getIcon('PT', '15803d') },
];

export const ARMOR_DATA: ArmorSet[] = [
  { id: 'a1', name: 'Kamura Set', rarity: 1, skills: ['Critical Eye', 'Heroics'], image: getIcon('Kamura', '3b82f6') },
  { id: 'a2', name: 'Izuchi Set', rarity: 1, skills: ['Critical Eye', 'Constitution'], image: getIcon('Izuchi', 'f97316') },
  { id: 'a3', name: 'Rathalos Set', rarity: 5, skills: ['Attack Boost', 'Partbreaker', 'Windproof'], image: getIcon('Rathalos', 'ef4444') },
  { id: 'a4', name: 'Zinogre Set', rarity: 5, skills: ['Latent Power', 'Constitution', 'Thunder Attack'], image: getIcon('Zinogre', 'eab308') },
  { id: 'a5', name: 'Nargacuga Set', rarity: 5, skills: ['Evade Window', 'Evade Extender', 'Critical Eye'], image: getIcon('Narga', '64748b') },
  { id: 'a6', name: 'Malzeno Set', rarity: 9, skills: ['Blood Rite', 'Partbreaker', 'Weakness Exploit'], image: getIcon('Malzeno', 'be185d') },
  { id: 'a7', name: 'Tigrex Set', rarity: 6, skills: ['Earplugs', 'Speed Eating', 'Free Meal'], image: getIcon('Tigrex', 'b45309') },
  { id: 'a8', name: 'Almudron Set', rarity: 6, skills: ['Rapid Morph', 'Razor Sharp', 'Power Prolonger'], image: getIcon('Almudron', '7c2d12') },
  { id: 'a9', name: 'Valstrax Set', rarity: 7, skills: ['Dragonheart', 'Resentment', 'Weakness Exploit'], image: getIcon('Valstrax', '881337') },
];

// --- 2. OFFLINE DATABASE (Fully Populated) ---

export const MONSTER_DETAILS_DB: Record<string, MonsterDetail> = {
  // --- KEY MONSTERS & FLAGSHIPS ---
  'Primordial Malzeno': {
    id: 'tu3', name: 'Primordial Malzeno', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 10,
    elements: ['Dragon'], ailments: ['Bloodblight'], iconColor: 'bg-indigo-950 border-yellow-500', image: getImg('Primordial', '312e81'),
    description: "Bentuk asli Malzeno sebelum terinfeksi Qurio. Menggunakan sayapnya sebagai perisai dan tombak ksatria.",
    size: { small: 1805.5, big: 2400.1 }, weaknessSign: "Blue Icon",
    tips: ["Di fase terakhir, dia akan melakukan combo panjang tanpa henti. Teruslah menghindar sampai dia kelelahan sendiri.", "Serangan sayap-tombaknya sangat cepat, perhatikan ancang-ancangnya.", "Saat dia 'teleport', segera ubah posisi kamera."],
    breakableParts: ["Head", "Wings (x2)", "Tail (Severable)", "Chest"],
    hitzones: [
      { part: 'Head', slash: 65, impact: 65, shot: 45, fire: 20, water: 10, thunder: 10, ice: 10, dragon: 25, stun: 0 },
      { part: 'Foreleg', slash: 45, impact: 45, shot: 30, fire: 15, water: 5, thunder: 5, ice: 5, dragon: 20, stun: 0 }
    ],
    habitat: [{ map: 'Citadel', areas: [13], rest: 13 }],
    keyQuests: [{ name: "Daily Practice", level: "MR 6★", type: "Urgent" }],
    ailmentEffectiveness: { poison: 1, stun: 1, paralysis: 1, sleep: 1, blast: 2, exhaust: 0, fireblight: 2, waterblight: 1, thunderblight: 1, iceblight: 1 },
    drops: { masterRank: [{ name: 'Primordial Scale', rate: 'Target' }, { name: 'Primordial Bloodstone', rate: 'Rare (3%)' }] }
  },
  'Malzeno': {
    id: 'sb1', name: 'Malzeno', type: 'Elder Dragon', expansion: 'Sunbreak', threatLevel: 9, elements: ['Dragon'], ailments: ['Bloodblight'], iconColor: 'bg-pink-950 border-pink-800', image: getImg('Malzeno', '831843'),
    description: "Vampir Elder Dragon. Teleportasi dan menghisap darah. Serang bagian merah untuk memulihkan darah.",
    size: { small: 1805.5, big: 2400.1 }, weaknessSign: "Blue Icon",
    tips: ["Jika terkena Bloodblight, jangan minum Potion. Serang monster untuk memulihkan nyawa (lifesteal mechanic).", "Serang bagian tubuh yang bersinar merah untuk menjatuhkannya dari mode Bloodening.", "Waspada saat dia menghilang (teleport), dia akan muncul di atas atau di belakang Anda."],
    breakableParts: ["Head", "Wings", "Tail (Severable)", "Chest"],
    hitzones: [
      { part: 'Head', slash: 60, impact: 65, shot: 45, fire: 20, water: 10, thunder: 10, ice: 20, dragon: 30, stun: 0 },
      { part: 'Foreleg', slash: 45, impact: 40, shot: 30, fire: 10, water: 5, thunder: 5, ice: 10, dragon: 25, stun: 0 }
    ],
    habitat: [{ map: 'Citadel', areas: [1, 4, 5, 13], rest: 4 }],
    keyQuests: [{ name: "Witness by Moonlight", level: "MR 5★", type: "Urgent" }],
    ailmentEffectiveness: { poison: 1, stun: 1, paralysis: 1, sleep: 1, blast: 2, exhaust: 0, fireblight: 1, waterblight: 1, thunderblight: 1, iceblight: 1 },
    drops: { masterRank: [{ name: 'Malzeno Bloodstone', rate: '3%' }] }
  },
  'Magnamalo': {
    id: 'm1', name: 'Magnamalo', type: 'Fanged Wyvern', expansion: 'Rise', threatLevel: 7, elements: ['None'], ailments: ['Hellfire'], iconColor: 'bg-purple-900', image: getImg('Magnamalo', '581c87'),
    description: "Wyvern bertaring samurai. Menggunakan gas Hellfire untuk meledakkan area sekitarnya.",
    size: { small: 1652.15, big: 2268.45 }, weaknessSign: "Pincang",
    tips: ["Gunakan Wirebug dash saat terkena Hellfireblight untuk melepaskan api tersebut (api akan menjadi ranjau bagi monster).", "Serang bagian yang menyala ungu (Hellfire) untuk menyebabkan ledakan dan menjatuhkannya.", "Hati-hati dengan serangan 'dive bomb' dari udara."],
    breakableParts: ["Head", "Armblades", "Back", "Tail (Severable)"],
    hitzones: [
      { part: 'Head', slash: 65, impact: 70, shot: 45, fire: 0, water: 20, thunder: 15, ice: 0, dragon: 0, stun: 0 },
      { part: 'Armblade (Glowing)', slash: 60, impact: 60, shot: 50, fire: 0, water: 25, thunder: 20, ice: 0, dragon: 0, stun: 0 }
    ],
    habitat: [{ map: 'Shrine Ruins', areas: [7, 9, 10], rest: 12 }],
    keyQuests: [{ name: "Comeuppance", level: "Village 5★", type: "Urgent" }],
    ailmentEffectiveness: { poison: 1, stun: 2, paralysis: 1, sleep: 1, blast: 2, exhaust: 1, fireblight: 0, waterblight: 3, thunderblight: 2, iceblight: 1 },
    drops: { highRank: [{ name: 'Purple Orb', rate: '3%' }, { name: 'Magnamalo Plate', rate: '5%' }] }
  },
  'Crimson Glow Valstrax': {
     id: 'm27', name: 'Crimson Glow Valstrax', type: 'Elder Dragon', expansion: 'Rise', threatLevel: 10, elements: ['Dragon'], ailments: ['Dragonblight'], iconColor: 'bg-rose-950 border-rose-500', image: getImg('Valstrax', '881337'),
     description: "Komet Merah. Menyerang dari langit dengan kecepatan suara. Dada menyala saat charging.",
     size: { small: 2072.13, big: 2925.36 }, weaknessSign: "Pincang",
     tips: ["Saat dadanya menyala merah (charging), serang dadanya sekuat tenaga untuk meledakkannya dan menjatuhkannya.", "Ketika dia terbang tinggi untuk 'Ambush', segera lakukan Superman Dive saat suara mendesing mendekat.", "Serangan sayapnya memiliki jangkauan sangat jauh, tetap waspada."],
     breakableParts: ["Head", "Wings", "Tail", "Chest"],
     hitzones: [{ part: 'Head', slash: 60, impact: 65, shot: 45, fire: 20, water: 20, thunder: 20, ice: 20, dragon: 0, stun: 0 }],
     habitat: [{ map: 'Shrine Ruins', areas: [12], rest: 12 }],
     keyQuests: [{ name: "The Crimson Glow", level: "Hub 7★", type: "Urgent" }],
     ailmentEffectiveness: { poison: 1, stun: 1, paralysis: 1, sleep: 1, blast: 2, exhaust: 0, fireblight: 1, waterblight: 1, thunderblight: 1, iceblight: 1 },
     drops: { highRank: [{ name: 'Red Dragon Orb', rate: '3%' }] }
  },
  'Apex Arzuros': {
    id: 'apex1', name: 'Apex Arzuros', type: 'Fanged Beast', expansion: 'Rise', threatLevel: 8, elements: ['None'], ailments: ['Stun', 'Defense Down'], iconColor: 'bg-red-950 border-blue-500', image: getImg('Apex Arzuros', '450a0a'),
    description: "Arzuros yang mengamuk karena badai Rampage. Ukurannya lebih besar dan kulitnya sangat keras.",
    size: { small: 700.0, big: 950.0 }, weaknessSign: "Pincang",
    tips: ["Incar kaki depannya untuk membuatnya terjatuh (trip).", "Gunakan Honey untuk memancingnya saat dia kelelahan (lelah = mulut berbusa).", "Serangan beruntunnya sangat cepat, gunakan Wirebug untuk menghindar ke samping, bukan ke belakang."],
    breakableParts: ["Forelegs", "Head (Scales)", "Rear"],
    hitzones: [
      { part: 'Head', slash: 60, impact: 60, shot: 50, fire: 25, water: 10, thunder: 15, ice: 20, dragon: 0, stun: 0 },
      { part: 'Foreleg (Enraged)', slash: 55, impact: 55, shot: 45, fire: 20, water: 10, thunder: 10, ice: 15, dragon: 0, stun: 0 }
    ],
    habitat: [{ map: 'Red Stronghold', areas: [1], rest: 0 }, { map: 'Shrine Ruins', areas: [5], rest: 5 }],
    keyQuests: [{ name: "Apex Arzuros Emergency", level: "Event 7★", type: "Normal" }],
    ailmentEffectiveness: { poison: 2, stun: 2, paralysis: 2, sleep: 2, blast: 2, exhaust: 3, fireblight: 2, waterblight: 1, thunderblight: 1, iceblight: 1 },
    drops: { highRank: [{ name: 'Apex Venom Spike', rate: 'Target' }, { name: 'Arzuros Cortex', rate: 'Common' }] }
  },
  'Wind Serpent Ibushi': {
    id: 'm28', name: 'Wind Serpent Ibushi', type: 'Elder Dragon', expansion: 'Rise', threatLevel: 9, elements: ['Dragon'], ailments: ['Dragonblight'], iconColor: 'bg-blue-900', image: getImg('Ibushi', '1e3a8a'),
    description: "Naga angin melayang terbalik. Serang kantung udara (windsac) di tubuhnya.",
    size: { small: 2968.8, big: 3012.5 }, weaknessSign: "Scripted",
    tips: ["Hancurkan kantung angin (Windsacs) di dada, punggung, dan ekor untuk menjatuhkannya.", "Gunakan Ballista/Cannon saat tersedia untuk damage gratis.", "Bawa Nulberry untuk Dragonblight."],
    breakableParts: ["Head", "Windsacs", "Horns", "Arms"],
    hitzones: [{ part: 'Windsac', slash: 70, impact: 70, shot: 60, fire: 20, water: 15, thunder: 10, ice: 15, dragon: 25, stun: 0 }],
    habitat: [{ map: 'Coral Palace', areas: [1], rest: 1 }],
    keyQuests: [{ name: "The Allmother", level: "Hub 7★", type: "Urgent" }],
    ailmentEffectiveness: { poison: 2, stun: 1, paralysis: 1, sleep: 1, blast: 2, exhaust: 0, fireblight: 2, waterblight: 1, thunderblight: 1, iceblight: 1 },
    drops: { highRank: [{ name: 'Ibushi Orb', rate: '3%' }] }
  },
  'Thunder Serpent Narwa': {
    id: 'm29', name: 'Thunder Serpent Narwa', type: 'Elder Dragon', expansion: 'Rise', threatLevel: 9, elements: ['Thunder'], ailments: ['Thunderblight'], iconColor: 'bg-yellow-700', image: getImg('Narwa', 'a16207'),
    description: "Naga listrik yang melayang. Pasangan Ibushi. Menciptakan cincin listrik.",
    size: { small: 3100.0, big: 3300.0 }, weaknessSign: "Scripted",
    tips: ["Serang kantung listrik (Thundersacs) di perutnya saat menyala.", "Gunakan platform yang muncul dari tanah untuk menghindari serangan lantai.", "Kepala dan perut adalah titik terlemah."],
    breakableParts: ["Head", "Thundersac (Belly)", "Arms"],
    hitzones: [{ part: 'Head', slash: 65, impact: 70, shot: 50, fire: 5, water: 10, thunder: 0, ice: 20, dragon: 25, stun: 0 }],
    habitat: [{ map: 'Coral Palace', areas: [1], rest: 1 }],
    keyQuests: [{ name: "Serpent Goddess of Thunder", level: "Hub 7★", type: "Urgent" }],
    ailmentEffectiveness: { poison: 2, stun: 1, paralysis: 0, sleep: 1, blast: 2, exhaust: 0, fireblight: 0, waterblight: 1, thunderblight: 0, iceblight: 2 },
    drops: { highRank: [{ name: 'Orb of Origin', rate: '3%' }] }
  }
};

// --- 3. UTILITY FUNCTION FOR FALLBACK ---

export const getFallbackMonsterDetail = (summary: MonsterSummary): MonsterDetail => {
  // If data exists in DB, use it (mapped by ID or Name)
  const fromDB = Object.values(MONSTER_DETAILS_DB).find(d => d.id === summary.id);
  if (fromDB) return fromDB;

  // Otherwise generate a generic template based on Summary
  return {
    ...summary,
    description: `Informasi detail untuk ${summary.name} sedang dikompilasi oleh Guild. Monster ini dikategorikan sebagai ${summary.type} dengan tingkat ancaman level ${summary.threatLevel}.`,
    size: { small: 1000, big: 1500 },
    weaknessSign: "Pincang / Ikon Biru",
    breakableParts: ["Head", "Forelegs", "Tail"],
    tips: [
       `Gunakan senjata dengan elemen yang berlawanan (${summary.elements[0] === 'None' ? 'Raw/Blast' : 'Counter Element'}).`,
       `Bawa Nulberry jika monster memberikan status ${summary.ailments[0]}.`,
       `Perhatikan pola marahnya (Enraged) untuk mencari celah serangan.`
    ],
    hitzones: [
      { part: 'Head', slash: 50, impact: 55, shot: 45, fire: 10, water: 10, thunder: 10, ice: 10, dragon: 10, stun: 0 },
      { part: 'Body', slash: 30, impact: 30, shot: 20, fire: 5, water: 5, thunder: 5, ice: 5, dragon: 5, stun: 0 }
    ],
    habitat: [{ map: 'Unknown', areas: [1, 5, 9], rest: 9 }],
    keyQuests: [],
    ailmentEffectiveness: { poison: 1, stun: 1, paralysis: 1, sleep: 1, blast: 1, exhaust: 1, fireblight: 1, waterblight: 1, thunderblight: 1, iceblight: 1 },
    drops: { highRank: [] }
  };
};
