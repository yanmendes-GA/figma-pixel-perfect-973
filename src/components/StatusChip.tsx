import React from 'react';

interface StatusChipProps {
  status: 'not-started' | 'cancelled' | 'completed' | 'not-evaluated';
  text: string;
}

export const StatusChip: React.FC<StatusChipProps> = ({ status, text }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'not-started':
        return {
          textColor: 'text-white',
          bgColor: 'bg-[#3F464C]',
          borderColor: 'border-[#A0A3A6]'
        };
      case 'cancelled':
        return {
          textColor: 'text-[#DE4949]',
          bgColor: 'bg-[rgba(222,73,73,0.20)]',
          borderColor: 'border-[#DE4949]'
        };
      case 'completed':
        return {
          textColor: 'text-[#1CD644]',
          bgColor: 'bg-[rgba(28,214,68,0.20)]',
          borderColor: 'border-[#1CD644]'
        };
      case 'not-evaluated':
        return {
          textColor: 'text-[#E6E676]',
          bgColor: 'bg-[rgba(230,230,118,0.20)]',
          borderColor: 'border-[#E6E676]'
        };
      default:
        return {
          textColor: 'text-white',
          bgColor: 'bg-[#3F464C]',
          borderColor: 'border-[#A0A3A6]'
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <div className="flex min-h-[38px] flex-col items-stretch text-xs font-normal uppercase leading-[1.2] justify-center w-[186px] px-[25px]">
      <div className={`justify-center items-center border flex w-full gap-2.5 px-5 py-2.5 rounded-[0_15px] border-solid ${styles.textColor} ${styles.bgColor} ${styles.borderColor}`}>
        <div className="self-stretch my-auto">
          {text}
        </div>
      </div>
    </div>
  );
};
