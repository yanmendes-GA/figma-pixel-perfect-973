import React from 'react';

export const Sidebar: React.FC = () => {
  const menuItems = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/16608b5283d1c28f06df6399933cd036703aba0a?placeholderIfAbsent=true",
      label: "Dashboard",
      active: false
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c2b970a1c3236163d3cbf7cea8fb3c7b1a0ac8f5?placeholderIfAbsent=true",
      label: "Mentorias",
      active: true
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d5552ce5144f8ec02b46263b0ed319e28bf78775?placeholderIfAbsent=true",
      label: "Empresas",
      active: false
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/5a9a186f9787ab76ce65871f24deb81c7ba7d116?placeholderIfAbsent=true",
      label: "Relatórios",
      active: false
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/f151c0770b6dfd827ffa984c8ec09e127e823e62?placeholderIfAbsent=true",
      label: "Configurações",
      active: false
    }
  ];

  return (
    <nav className="relative min-w-60 w-[331px] pt-[22px] pb-[68px] px-[27px] border-r-[#3F464C] border-r border-solid">
      <div className="z-0 w-full">
        <div className="flex w-full flex-col items-center justify-center pt-5">
          <div className="max-w-full w-[266px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d5aa05831702c1b0f3b5cabf59b188b7b0987600?placeholderIfAbsent=true"
              className="aspect-[5.13] object-contain w-full"
              alt="Logo"
            />
          </div>
        </div>
        
        <div className="w-full text-[15px] text-[#D0D1D3] font-semibold whitespace-nowrap leading-[1.2] mt-[60px]">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex w-full items-center gap-4 px-5 py-2.5 rounded-xl ${
                item.active 
                  ? 'items-center border bg-[#232A32] text-[#D67C1C] border-solid border-[#D67C1C]' 
                  : ''
              } ${index > 0 ? 'mt-5' : ''}`}
            >
              <img
                src={item.icon}
                className="aspect-[1.13] object-contain w-[26px] self-stretch shrink-0 my-auto"
                alt={item.label}
              />
              <div className="self-stretch my-auto">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="justify-between items-center bg-[#232A32] z-0 flex min-h-[66px] w-full gap-[40px_77px] p-2.5 rounded-[10px]">
        <div className="self-stretch flex items-center gap-2.5 my-auto">
          <div className="justify-center items-center bg-[#101820] self-stretch flex min-h-[46px] flex-col w-[46px] h-[46px] my-auto px-2.5 rounded-[23px] border-[0.422px] border-solid border-[#3F464C]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/52ea50c2b8c816d4e9bfcc66f52b5bb806eaaaf9?placeholderIfAbsent=true"
              className="aspect-[2] object-contain w-[21px]"
              alt="User avatar"
            />
          </div>
          <div className="self-stretch leading-[1.2] w-[104px] my-auto">
            <div className="text-white text-[15px] font-normal">
              Yan Ricardo
            </div>
            <div className="text-[#D0D1D3] text-xs italic font-medium mt-1">
              Mentor
            </div>
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/45831fc560f2816a64217faf0799c13b29664f78?placeholderIfAbsent=true"
          className="aspect-[1.12] object-contain w-[18px] self-stretch shrink-0 my-auto"
          alt="Dropdown arrow"
        />
      </div>
      
      <div className="justify-center items-center bg-[#3F464C] absolute z-0 flex min-h-[26px] w-[26px] flex-col h-[26px] right-[-13px] rounded-[13px] top-[83px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/db84d331501902a57cd5f9ceba5643a2d0e458b5?placeholderIfAbsent=true"
          className="aspect-[1.1] object-contain w-full"
          alt="Collapse sidebar"
        />
      </div>
    </nav>
  );
};
