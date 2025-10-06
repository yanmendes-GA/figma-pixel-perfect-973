import React, { useState } from 'react';
import { Menu, Search, Bell, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const handleNewMentorship = () => {
    navigate('/mentorias/nova');
  };

  return (
    <header className="w-full py-5">
      <div className="flex w-full items-center gap-4 lg:gap-[29px] flex-wrap">
        <div className="items-center bg-card self-stretch flex min-w-60 min-h-[51px] gap-4 lg:gap-10 flex-wrap flex-1 shrink basis-6 my-auto px-5 rounded-[43px]">
          {/* Mobile menu button */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-muted-foreground" />
          </button>

          <nav className="hidden sm:flex items-center text-[15px] whitespace-nowrap leading-[1.2] my-auto p-2.5" aria-label="Breadcrumb">
            <span className="text-muted-foreground font-normal">
              Início
            </span>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground font-bold">
              Mentorias
            </span>
          </nav>
          
          <form onSubmit={handleSearchSubmit} className="items-center bg-background self-stretch flex min-w-40 md:min-w-60 min-h-10 gap-2.5 italic text-xs font-medium whitespace-nowrap leading-[1.2] flex-wrap flex-1 shrink basis-[0%] my-auto px-5 rounded-[43px]">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar"
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder-muted-foreground"
            />
          </form>
          
          <div className="hidden sm:flex items-center gap-3.5 my-auto">
            <button className="p-2 hover:bg-muted/50 rounded-lg transition-colors" aria-label="Notifications">
              <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </button>
            <button className="p-2 hover:bg-muted/50 rounded-lg transition-colors" aria-label="Settings">
              <Settings className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </button>
          </div>
        </div>
        
        <button
          onClick={handleNewMentorship}
          className="bg-primary text-primary-foreground flex items-center gap-2.5 text-base lg:text-lg font-bold tracking-[0.02px] leading-none justify-center px-6 lg:px-8 py-3 lg:py-4 rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105 whitespace-nowrap"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d06f8fe92bbf0bdfd4b14494e2b8ff770fd18569?placeholderIfAbsent=true"
            className="w-6 lg:w-[29px]"
            alt="Add icon"
          />
          <span className="hidden sm:inline">
            Nova Mentoria
          </span>
          <span className="sm:hidden">
            Nova
          </span>
        </button>
      </div>
    </header>
  );
};
