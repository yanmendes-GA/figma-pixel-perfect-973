import React from 'react';

interface AvatarProps {
  initials: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ initials, className = "" }) => {
  return (
    <div className={`flex items-center justify-center bg-primary text-primary-foreground font-bold uppercase w-[41px] h-[41px] rounded-full text-base ${className}`}>
      {initials}
    </div>
  );
};
