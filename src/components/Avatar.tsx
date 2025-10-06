import React from 'react';

interface AvatarProps {
  initials: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ initials, className = "" }) => {
  return (
    <div className={`justify-center items-center bg-[#D67C1C] flex min-h-[41px] flex-col text-base text-[#F6E5D2] font-bold whitespace-nowrap text-center uppercase w-[41px] h-[41px] px-2 rounded-[20.5px] ${className}`}>
      <div>{initials}</div>
    </div>
  );
};
