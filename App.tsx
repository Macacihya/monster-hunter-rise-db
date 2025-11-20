
import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronRight, Sparkles, Info, ArrowLeft, Zap, BookOpen, Briefcase, WifiOff, Shield, Sword, Crosshair, Feather, Music, Move, Scissors, Ghost, Download } from 'lucide-react';
import BottomNav from './components/BottomNav';
import MonsterCard from './components/MonsterCard';
import MarkdownRenderer from './components/MarkdownRenderer';
import { queryOfflineDatabase } from './services/geminiService';
import { MONSTERS_DATA, WEAPONS_DATA, ITEMS_DATA, ARMOR_DATA } from './constants';
import { ViewState, ChatMessage, WeaponCategory } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedWeapon, setSelectedWeapon] = useState<WeaponCategory | null>(null);
  const [itemSearch, setItemSearch] = useState('');
  const [monsterSearch, setMonsterSearch] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat
  useEffect(() => {
    if (view === ViewState.CHAT) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, view]);

  // Reset scroll position when switching main views
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [view, selectedWeapon]);

  // Handle PWA Install Prompt
  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    if (view !== ViewState.CHAT) {
      setView(ViewState.CHAT);
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: text,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await queryOfflineDatabase(text);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const handleMonsterClick = (name: string) => {
    handleSend(name);
  };

  const handleItemClick = (name: string) => {
    handleSend(name);
  };

  const handleBackFromWeapon = () => {
    setSelectedWeapon(null);
  };

  // Helper for weapon icons
  const getWeaponIcon = (iconName: string, size: number = 24) => {
    switch (iconName) {
      case 'Sword': return <Sword size={size} />;
      case 'Slash': return <Sword size={size} className="rotate-90" />; // Mock for LS
      case 'Shield': return <Shield size={size} />;
      case 'Scissors': return <Scissors size={size} />;
      case 'Zap': return <Zap size={size} />;
      case 'Hammer': return <Zap size={size} />; // Fallback if Hammer icon not imported or mapped differently in Lucide
      case 'Music': return <Music size={size} />;
      case 'Move': return <Move size={size} />;
      case 'Feather': return <Feather size={size} />;
      case 'Crosshair': return <Crosshair size={size} />;
      default: return <Sword size={size} />;
    }
  };

  // --- VIEWS ---

  const renderHome = () => (
    <div className="p-4 space-y-8 pb-24 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center space-y-4 mt-4">
        <div className="inline-block p-3 rounded-full bg-kamura-800 border-2 border-kamura-accent shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          <BookOpen className="text-kamura-accent w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-kamura-accent to-amber-200 tracking-tight">
          Hunter's Notes
        </h1>
        <div className="flex justify-center items-center gap-2 text-kamura-500 text-sm">
           <WifiOff size={14} />
           <span>Database Offline (v.Rise.3.0)</span>
        </div>
        
        {/* PWA Install Button */}
        {deferredPrompt && (
          <button 
            onClick={handleInstallClick}
            className="mt-2 px-4 py-2 bg-kamura-accent text-kamura-900 text-sm font-bold rounded-full flex items-center gap-2 mx-auto hover:bg-amber-400 transition-all shadow-lg animate-bounce"
          >
            <Download size={16} />
            Install App Offline
          </button>
        )}
      </div>

      {/* Search Bar Fake */}
      <div 
        onClick={() => setView(ViewState.CHAT)}
        className="bg-kamura-800 border border-kamura-700 rounded-full p-4 flex items-center gap-3 shadow-lg cursor-pointer hover:border-kamura-accent transition-colors group"
      >
        <Search className="text-kamura-500 group-hover:text-kamura-accent transition-colors" />
        <span className="text-kamura-500 text-sm font-medium group-hover:text-kamura-100 transition-colors">Cari data Monster, Item, atau Senjata...</span>
      </div>

      {/* Featured / Recent Monsters Preview */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <h2 className="text-lg font-semibold text-kamura-100 flex items-center gap-2">
            <Info size={18} className="text-kamura-accent" /> Monster Populer
          </h2>
          <button 
            onClick={() => setView(ViewState.MONSTERS)}
            className="text-xs text-kamura-accent hover:underline flex items-center"
          >
            Lihat Semua <ChevronRight size={12} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {MONSTERS_DATA.slice(0, 4).map(m => (
            <MonsterCard key={m.id} monster={m} onClick={handleMonsterClick} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-3 gap-3">
        <button 
          onClick={() => setView(ViewState.WEAPONS)}
          className="p-4 bg-gradient-to-br from-kamura-800 to-kamura-900 border border-kamura-700 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-blue-500 transition-colors"
        >
          <div className="p-2 bg-blue-900/30 rounded-full text-blue-400"><Zap size={20}/></div>
          <span className="font-medium text-sm text-center">Panduan Senjata</span>
        </button>
        <button 
          onClick={() => setView(ViewState.ITEMS)}
          className="p-4 bg-gradient-to-br from-kamura-800 to-kamura-900 border border-kamura-700 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-green-500 transition-colors"
        >
          <div className="p-2 bg-green-900/30 rounded-full text-green-400"><Briefcase size={20}/></div>
          <span className="font-medium text-sm text-center">Database Item</span>
        </button>
        <button 
          onClick={() => setView(ViewState.ARMOR)}
          className="p-4 bg-gradient-to-br from-kamura-800 to-kamura-900 border border-kamura-700 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-purple-500 transition-colors"
        >
          <div className="p-2 bg-purple-900/30 rounded-full text-purple-400"><Shield size={20}/></div>
          <span className="font-medium text-sm text-center">Set Armor</span>
        </button>
      </div>
    </div>
  );

  const renderMonsters = () => {
    const filteredMonsters = MONSTERS_DATA.filter(m => 
      m.name.toLowerCase().includes(monsterSearch.toLowerCase()) || 
      m.type.toLowerCase().includes(monsterSearch.toLowerCase())
    );

    return (
      <div className="p-4 pb-24 animate-fade-in">
        <div className="py-4 border-b border-kamura-800 mb-4 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-kamura-100">Monster Besar</h2>
            <Ghost className="text-kamura-500" size={24} />
          </div>
          <div className="relative">
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-kamura-500" size={16} />
             <input 
               type="text"
               placeholder="Cari Monster (Contoh: Malzeno, Gore)..."
               value={monsterSearch}
               onChange={(e) => setMonsterSearch(e.target.value)}
               className="w-full bg-kamura-800 text-kamura-100 text-sm rounded-lg pl-10 pr-4 py-2 border border-kamura-700 focus:border-kamura-accent focus:outline-none"
             />
          </div>
          <div className="flex justify-between items-center px-1">
             <span className="text-xs text-kamura-500">Total: {MONSTERS_DATA.length}</span>
             <span className="text-xs text-kamura-400 bg-kamura-800 px-2 py-0.5 rounded">Ditemukan: {filteredMonsters.length}</span>
          </div>
        </div>

        {filteredMonsters.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredMonsters.map(m => (
              <MonsterCard key={m.id} monster={m} onClick={handleMonsterClick} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-kamura-500">
            <Ghost size={48} className="mx-auto mb-4 opacity-30" />
            <p>Monster tidak ditemukan.</p>
          </div>
        )}
      </div>
    );
  };

  const renderArmor = () => (
    <div className="p-4 pb-24 animate-fade-in">
      <div className="py-4 border-b border-kamura-800 mb-4">
        <h2 className="text-2xl font-bold text-kamura-100">Armor Set Populer</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {ARMOR_DATA.map(armor => (
           <div key={armor.id} className="bg-kamura-800 border border-kamura-700 rounded-xl p-3 flex flex-col items-center text-center hover:border-kamura-accent transition-colors">
              <div className="w-16 h-16 mb-3 rounded-lg overflow-hidden border border-kamura-600">
                 <img src={armor.image} alt={armor.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-bold text-kamura-100 mb-1">{armor.name}</h3>
              <span className="text-[10px] text-kamura-500 uppercase tracking-wider mb-2">Rarity {armor.rarity}</span>
              <div className="flex flex-wrap justify-center gap-1">
                {armor.skills.slice(0, 2).map(skill => (
                  <span key={skill} className="text-[10px] bg-kamura-900 px-1.5 py-0.5 rounded text-kamura-400">{skill}</span>
                ))}
              </div>
           </div>
        ))}
      </div>
    </div>
  );

  const renderItems = () => {
    const filteredItems = ITEMS_DATA.filter(item => 
      item.name.toLowerCase().includes(itemSearch.toLowerCase()) ||
      item.category.toLowerCase().includes(itemSearch.toLowerCase())
    );

    return (
      <div className="p-4 pb-24 animate-fade-in">
         <div className="py-4 border-b border-kamura-800 mb-4 space-y-3">
          <div className="flex justify-between items-center">
             <h2 className="text-2xl font-bold text-kamura-100">Item Pouch</h2>
             <Briefcase className="text-kamura-500" size={24}/>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-kamura-500" size={16} />
            <input 
              type="text"
              placeholder="Cari Item (Contoh: Machalite Ore)..."
              value={itemSearch}
              onChange={(e) => setItemSearch(e.target.value)}
              className="w-full bg-kamura-800 text-kamura-100 text-sm rounded-lg pl-10 pr-4 py-2 border border-kamura-700 focus:border-kamura-accent focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div 
                key={item.id}
                onClick={() => handleItemClick(item.name)}
                className="flex items-center p-3 bg-kamura-800 border border-kamura-700 rounded-lg hover:border-kamura-accent cursor-pointer transition-all group"
              >
                 <div className="w-10 h-10 rounded overflow-hidden border border-kamura-600 shrink-0 mr-3">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <div className="flex justify-between items-start">
                      <h3 className="font-bold text-kamura-100 text-sm truncate pr-2 group-hover:text-kamura-accent transition-colors">{item.name}</h3>
                      <span className="text-[10px] uppercase tracking-wider bg-kamura-900 px-1.5 py-0.5 rounded text-kamura-400 border border-kamura-700">R{item.rarity}</span>
                   </div>
                   <p className="text-xs text-kamura-500 truncate">{item.description}</p>
                 </div>
                 <ChevronRight size={16} className="text-kamura-600 ml-2 group-hover:text-kamura-accent" />
              </div>
            ))
          ) : (
             <div className="text-center py-10 text-kamura-500">
               <p>Item tidak ditemukan di database offline.</p>
             </div>
          )}
        </div>
      </div>
    );
  };

  const renderWeapons = () => {
    if (selectedWeapon) {
      return (
        <div className="p-4 pb-24 animate-fade-in min-h-full">
           {/* Header */}
           <div className="flex items-center gap-3 mb-6 sticky top-0 z-20 bg-kamura-900/95 backdrop-blur-sm py-2">
             <button onClick={handleBackFromWeapon} className="p-2 bg-kamura-800 rounded-full text-kamura-500 hover:text-kamura-100">
                <ArrowLeft size={24} />
             </button>
             <h2 className="text-2xl font-bold text-kamura-accent">{selectedWeapon.name}</h2>
           </div>

           {/* Overview Card */}
           <div className="bg-kamura-800 border border-kamura-700 rounded-xl overflow-hidden mb-6 shadow-lg">
             <div className={`h-40 w-full relative flex items-center justify-center ${selectedWeapon.color}`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-white/90 transform scale-150">
                   {getWeaponIcon(selectedWeapon.icon, 64)}
                </div>
             </div>
             <div className="p-5 relative">
                <h3 className="text-lg font-semibold text-kamura-100 mb-1">Ringkasan</h3>
                <p className="text-kamura-400 text-sm mb-4">{selectedWeapon.description}</p>
                
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-kamura-500 mb-2 block">Skill Prioritas</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedWeapon.prioritySkills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-kamura-900/50 border border-kamura-700 rounded-lg text-xs text-blue-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
             </div>
           </div>

           {/* Action Buttons */}
           <h3 className="text-sm font-semibold text-kamura-500 uppercase tracking-wider mb-3">Data Referensi</h3>
           <div className="grid gap-3">
             <button 
                onClick={() => handleSend(selectedWeapon.name)}
                className="p-4 bg-kamura-800 border border-kamura-700 rounded-xl flex items-center gap-4 hover:border-kamura-accent hover:bg-kamura-700 transition-all text-left group"
             >
               <div className="p-2 bg-amber-900/30 rounded-lg text-amber-400 group-hover:scale-110 transition-transform"><BookOpen size={24} /></div>
               <div>
                 <div className="font-bold text-kamura-100">Buka Panduan Lengkap</div>
                 <div className="text-xs text-kamura-500">Lihat skill wajib dan tips</div>
               </div>
             </button>
           </div>
        </div>
      );
    }

    return (
      <div className="p-4 pb-24 animate-fade-in">
        <div className="py-4 border-b border-kamura-800 mb-4">
          <h2 className="text-2xl font-bold text-kamura-100">Panduan Senjata</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {WEAPONS_DATA.map(w => (
            <div 
              key={w.id} 
              onClick={() => setSelectedWeapon(w)}
              className="rounded-xl bg-kamura-800 border border-kamura-700 overflow-hidden group cursor-pointer hover:border-kamura-accent transition-all shadow-md"
            >
              <div className={`h-24 flex items-center justify-center relative overflow-hidden ${w.color}`}>
                 <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                 <div className="relative z-10 text-white/90 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                    {getWeaponIcon(w.icon, 40)}
                 </div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-kamura-100 text-sm mb-1">{w.name}</h3>
                <p className="text-[10px] text-kamura-400 line-clamp-2 leading-tight opacity-80">{w.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderChat = () => (
    <div className="flex flex-col h-full bg-kamura-900 relative">
      <div className="h-14 shrink-0 flex items-center px-4 border-b border-kamura-800 bg-kamura-900 z-10 shadow-sm">
        <button onClick={() => setView(ViewState.HOME)} className="mr-3 text-kamura-500 hover:text-kamura-100">
          <ArrowLeft size={20} />
        </button>
        <h2 className="font-bold text-kamura-100">Ensiklopedia</h2>
        <div className="ml-auto">
            {isLoading && <Sparkles className="animate-pulse text-kamura-accent" size={18} />}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-32 custom-scrollbar">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center opacity-50">
            <div className="w-16 h-16 bg-kamura-800 rounded-full flex items-center justify-center mb-4 border border-kamura-700">
              <BookOpen size={32} className="text-kamura-500" />
            </div>
            <p className="text-kamura-400 text-sm">Pilih Monster, Item, atau Senjata untuk melihat data.</p>
          </div>
        )}
        
        {messages.map((msg) => {
          if (msg.role === 'model') {
            return (
              <div key={msg.id} className="flex justify-start mb-6 w-full">
                <div className="flex-1 max-w-full overflow-hidden">
                  <div className="bg-kamura-800/80 border-2 border-kamura-700/60 rounded-xl overflow-hidden shadow-lg relative group hover:border-kamura-600 transition-colors">
                    <div className="bg-kamura-900/80 border-b border-kamura-700 px-4 py-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen size={14} className="text-kamura-accent" />
                        <span className="text-[10px] uppercase tracking-widest text-kamura-400 font-bold">Hunter's Notes Data</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-kamura-700"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-kamura-700"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-kamura-accent"></div>
                      </div>
                    </div>
                    
                    <div className="p-4 md:p-5 bg-gradient-to-b from-kamura-800 to-kamura-900">
                      <MarkdownRenderer content={msg.text} />
                    </div>

                    <div className="h-1 w-full bg-gradient-to-r from-kamura-700 via-kamura-accent to-kamura-700 opacity-30"></div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
        
        {isLoading && (
           <div className="flex justify-start w-full animate-pulse">
             <div className="w-full bg-kamura-800 h-32 rounded-xl border border-kamura-700 opacity-50"></div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="absolute bottom-16 left-0 right-0 p-4 bg-kamura-900/95 backdrop-blur-md border-t border-kamura-800 z-20">
        <div className="relative flex items-center max-w-3xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Cari database (ex: Rathalos)..."
            className="w-full bg-kamura-800 text-kamura-100 placeholder-kamura-500 border border-kamura-700 rounded-full py-3 pl-5 pr-12 focus:outline-none focus:border-kamura-accent focus:ring-1 focus:ring-kamura-accent transition-all shadow-inner"
          />
          <button 
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="absolute right-1.5 top-1.5 p-2 bg-kamura-accent text-kamura-900 rounded-full hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            <Search size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 w-full h-full bg-kamura-900 text-kamura-100 font-sans overflow-hidden flex flex-col">
      <main className="flex-1 relative overflow-hidden w-full">
        {view === ViewState.CHAT ? (
            renderChat()
        ) : (
            <div ref={scrollContainerRef} className="h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar">
                 {view === ViewState.HOME && renderHome()}
                 {view === ViewState.MONSTERS && renderMonsters()}
                 {view === ViewState.WEAPONS && renderWeapons()}
                 {view === ViewState.ITEMS && renderItems()}
                 {view === ViewState.ARMOR && renderArmor()}
            </div>
        )}
      </main>

      <BottomNav currentView={view} onChangeView={(v) => { setView(v); setSelectedWeapon(null); }} />
    </div>
  );
};

export default App;