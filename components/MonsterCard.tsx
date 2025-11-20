
import React from 'react';
import { Flame, Droplets, Zap, Snowflake, AlertTriangle, Ghost } from 'lucide-react';
import { MonsterSummary } from '../types';

interface MonsterCardProps {
  monster: MonsterSummary;
  onClick: (monsterName: string) => void;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ monster, onClick }) => {
  
  const getElementIcon = (el: string) => {
    switch (el) {
      case 'Fire': return <Flame size={14} className="text-red-500" />;
      case 'Water': return <Droplets size={14} className="text-blue-400" />;
      case 'Thunder': return <Zap size={14} className="text-yellow-400" />;
      case 'Ice': return <Snowflake size={14} className="text-cyan-300" />;
      default: return null;
    }
  };

  return (
    <div 
      onClick={() => onClick(monster.name)}
      className="relative group overflow-hidden rounded-xl bg-kamura-800 border border-kamura-700 shadow-md hover:shadow-kamura-accent/20 hover:border-kamura-accent transition-all duration-300 cursor-pointer"
    >
      {/* Header with Solid Color Background & Icon */}
      <div className="h-24 w-full relative overflow-hidden flex items-center justify-center">
        {/* Solid Background Color */}
        <div className={`absolute inset-0 ${monster.iconColor} z-0`}></div>
       
        {/* Centered Icon */}
        <div className="absolute z-10 text-white transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
            <Ghost size={48} strokeWidth={1.5} />
        </div>

        {/* Badge Expansion */}
        <div className={`absolute top-2 right-2 z-20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded shadow-sm text-white
          ${monster.expansion === 'Sunbreak' ? 'bg-purple-600 border border-purple-400' : 'bg-blue-600 border border-blue-400'}`}>
          {monster.expansion || 'Rise'}
        </div>
      </div>

      {/* Body */}
      <div className="p-3 relative bg-kamura-800">
        <h3 className="text-lg font-bold text-kamura-100 mb-1 leading-tight">{monster.name}</h3>

        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] text-kamura-400 font-medium uppercase tracking-wider truncate pr-2">{monster.type}</span>
          <div className="flex items-center space-x-1 bg-red-950/80 px-1.5 py-0.5 rounded border border-red-900/50 shrink-0">
            <AlertTriangle size={10} className="text-red-400" />
            <span className="text-xs text-red-200 font-bold">{monster.threatLevel}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-xs text-kamura-400">
            <div className="flex gap-1">
              {monster.elements.map(el => (
                <span key={el} className="flex items-center gap-1 bg-kamura-900 px-1.5 py-0.5 rounded text-gray-200 border border-kamura-700">
                  {getElementIcon(el)} {el === 'None' ? 'Fisik' : el}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonsterCard;
