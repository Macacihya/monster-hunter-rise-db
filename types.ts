
export enum ViewState {
  HOME = 'HOME',
  MONSTERS = 'MONSTERS',
  WEAPONS = 'WEAPONS',
  ITEMS = 'ITEMS',
  CHAT = 'CHAT',
  ARMOR = 'ARMOR'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isError?: boolean;
}

export interface MonsterSummary {
  id: string;
  name: string;
  type: string;
  expansion?: 'Rise' | 'Sunbreak';
  threatLevel: number;
  elements: string[];
  ailments: string[];
  iconColor: string; // Used for fallback or accents
  image: string; // URL for visual
}

export interface ArmorSet {
  id: string;
  name: string;
  rarity: number;
  skills: string[];
  image: string;
}

// --- NEW OFFLINE DB TYPES ---

export interface Hitzone {
  part: string;
  slash: number;
  impact: number;
  shot: number;
  fire: number;
  water: number;
  thunder: number;
  ice: number;
  dragon: number;
  stun: number;
}

export interface DropItem {
  name: string;
  rate: string; // e.g., "3% (Capture), 1% (Carve)"
}

export interface BreakReward {
  part: string;
  item: string;
  rate: string;
  rank: 'Low' | 'High' | 'Master';
}

export interface AreaPattern {
  map: string;
  areas: number[]; // List of areas where monster roams
  rest: number;    // Area number where it sleeps
}

export interface QuestInfo {
  name: string;
  level: string; // e.g. "Village 5★" or "Hub 3★"
  type: 'Key' | 'Urgent' | 'Normal';
}

export interface MonsterDetail extends MonsterSummary {
  description: string;
  size: {
    small: number; // Small crown size in cm
    big: number;   // Big crown size in cm
  };
  weaknessSign: string; // e.g. "Limping", "Blue Icon"
  breakableParts: string[]; // List of breakable parts
  hitzones: Hitzone[];
  habitat: AreaPattern[]; // Map movement patterns
  keyQuests: QuestInfo[]; // List of quests
  tips: string[]; // Strategic tips to defeat the monster
  drops: {
    lowRank?: DropItem[];
    highRank?: DropItem[];
    masterRank?: DropItem[];
  };
  breakRewards?: BreakReward[];
  ailmentEffectiveness: {
    poison: number; // 0-4 stars
    stun: number;
    paralysis: number;
    sleep: number;
    blast: number;
    exhaust: number;
    fireblight: number;
    waterblight: number;
    thunderblight: number;
    iceblight: number;
  };
}

export interface WeaponCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  prioritySkills: string[];
  image: string;
  color: string; // Added for UI theming
}

export interface ItemSummary {
  id: string;
  name: string;
  category: 'Consumable' | 'Material' | 'Ammo' | 'Key Item';
  rarity: number;
  description: string;
  location?: string; // Offline data location
  usage?: string;
  recipe?: string;
  image: string;
}
