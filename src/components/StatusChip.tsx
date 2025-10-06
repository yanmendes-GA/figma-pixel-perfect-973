import React from 'react';

interface StatusChipProps {
  status: 'not-started' | 'cancelled' | 'completed' | 'not-evaluated';
  text: string;
}

export const StatusChip: React.FC<StatusChipProps> = ({ status, text }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'not-started':
        return 'text-muted-foreground bg-muted/50 border-muted-foreground/30';
      case 'cancelled':
        return 'text-destructive bg-destructive/20 border-destructive';
      case 'completed':
        return 'text-[hsl(142,76%,36%)] bg-[hsl(142,76%,36%)]/20 border-[hsl(142,76%,36%)]';
      case 'not-evaluated':
        return 'text-[hsl(60,90%,68%)] bg-[hsl(60,90%,68%)]/20 border-[hsl(60,90%,68%)]';
      default:
        return 'text-muted-foreground bg-muted/50 border-muted-foreground/30';
    }
  };

  return (
    <div className={`inline-flex items-center justify-center px-5 py-2 rounded-[15px] border text-xs font-normal uppercase leading-[1.2] transition-all ${getStatusStyles()}`}>
      {text}
    </div>
  );
};
