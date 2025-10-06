import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical } from 'lucide-react';

export interface ActionMenuItem {
  label: string;
  icon?: React.ReactNode | string;
  onClick: () => void;
  variant?: 'default' | 'destructive';
}

interface ActionMenuProps {
  items: ActionMenuItem[];
  align?: 'left' | 'right';
}

export const ActionMenu: React.FC<ActionMenuProps> = ({ items, align = 'right' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-muted/50 transition-colors"
        aria-label="Actions menu"
        aria-expanded={isOpen}
      >
        <MoreVertical className="w-5 h-5 text-muted-foreground" />
      </button>

      {isOpen && (
        <div
          className={`absolute z-50 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-1 animate-in fade-in-0 zoom-in-95 ${
            align === 'right' ? 'right-0' : 'left-0'
          }`}
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                item.variant === 'destructive'
                  ? 'text-destructive hover:bg-destructive/10'
                  : 'text-card-foreground hover:bg-muted/50'
              }`}
            >
              {item.icon && (
                typeof item.icon === 'string' ? (
                  <img src={item.icon} className="w-4 h-4" alt="" />
                ) : (
                  <span className="w-4 h-4 flex items-center justify-center">{item.icon}</span>
                )
              )}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
