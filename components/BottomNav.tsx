
import React from 'react';
import { Home, Sword, Ghost, Briefcase } from 'lucide-react';
import { ViewState } from '../types';

interface BottomNavProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onChangeView }) => {
  const navItems = [
    { view: ViewState.HOME, label: 'Hub', icon: <Home size={20} /> },
    { view: ViewState.MONSTERS, label: 'Monster', icon: <Ghost size={20} /> },
    { view: ViewState.WEAPONS, label: 'Senjata', icon: <Sword size={20} /> },
    { view: ViewState.ITEMS, label: 'Item', icon: <Briefcase size={20} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-kamura-800 border-t border-kamura-700 safe-pb z-50 shadow-lg">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => onChangeView(item.view)}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
                isActive ? 'text-kamura-accent' : 'text-kamura-500 hover:text-kamura-100'
              }`}
            >
              <div className={`mb-1 ${isActive ? 'scale-110' : ''} transition-transform duration-200`}>
                {item.icon}
              </div>
              <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
              {isActive && <div className="absolute bottom-1 w-1 h-1 bg-kamura-accent rounded-full" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
