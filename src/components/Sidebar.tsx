import React from 'react';
import { X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/16608b5283d1c28f06df6399933cd036703aba0a?placeholderIfAbsent=true",
      label: "Dashboard",
      path: "/"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c2b970a1c3236163d3cbf7cea8fb3c7b1a0ac8f5?placeholderIfAbsent=true",
      label: "Mentorias",
      path: "/mentorias"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d5552ce5144f8ec02b46263b0ed319e28bf78775?placeholderIfAbsent=true",
      label: "Empresas",
      path: "/empresas"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/5a9a186f9787ab76ce65871f24deb81c7ba7d116?placeholderIfAbsent=true",
      label: "Relatórios",
      path: "/relatorios"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/f151c0770b6dfd827ffa984c8ec09e127e823e62?placeholderIfAbsent=true",
      label: "Configurações",
      path: "/configuracoes"
    }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      <nav
        className={`fixed lg:relative inset-y-0 left-0 z-50 w-[331px] bg-background border-r border-border transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative h-full pt-[22px] pb-[68px] px-[27px] flex flex-col">
          {/* Close button for mobile */}
          <button
            onClick={onToggle}
            className="absolute top-4 right-4 lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>

          <div className="flex-1 overflow-y-auto">
            <div className="flex w-full flex-col items-center justify-center pt-5">
              <div className="max-w-full w-[266px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d5aa05831702c1b0f3b5cabf59b188b7b0987600?placeholderIfAbsent=true"
                  className="aspect-[5.13] object-contain w-full"
                  alt="Logo"
                />
              </div>
            </div>
            
            <div className="w-full text-[15px] font-semibold whitespace-nowrap leading-[1.2] mt-[60px]">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path || 
                  (item.path !== '/' && location.pathname.startsWith(item.path));
                
                return (
                  <button
                    key={index}
                    onClick={() => navigate(item.path)}
                    className={`flex w-full items-center gap-4 px-5 py-2.5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-card text-primary border border-primary shadow-sm'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                    } ${index > 0 ? 'mt-5' : ''}`}
                  >
                    <img
                      src={item.icon}
                      className="aspect-[1.13] object-contain w-[26px] shrink-0 transition-transform duration-200 hover:scale-110"
                      alt={item.label}
                    />
                    <span className="flex-1 text-left">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* User profile at bottom */}
          <div className="mt-auto pt-4">
            <div className="bg-card flex items-center justify-between w-full gap-2 p-2.5 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center bg-background w-[46px] h-[46px] rounded-full border border-border">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/52ea50c2b8c816d4e9bfcc66f52b5bb806eaaaf9?placeholderIfAbsent=true"
                    className="aspect-[2] object-contain w-[21px]"
                    alt="User avatar"
                  />
                </div>
                <div className="leading-tight">
                  <div className="text-foreground text-[15px] font-normal">
                    Yan Ricardo
                  </div>
                  <div className="text-muted-foreground text-xs italic font-medium">
                    Mentor
                  </div>
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/45831fc560f2816a64217faf0799c13b29664f78?placeholderIfAbsent=true"
                className="w-[18px] transition-transform duration-200 group-hover:rotate-180"
                alt="Dropdown arrow"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
