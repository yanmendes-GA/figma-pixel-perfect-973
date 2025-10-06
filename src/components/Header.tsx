import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const handleNewMentorship = () => {
    console.log('Creating new mentorship');
  };

  return (
    <header className="w-full py-5">
      <div className="flex w-full items-center gap-[29px] flex-wrap">
        <div className="items-center bg-[#232A32] self-stretch flex min-w-60 min-h-[51px] gap-10 flex-wrap flex-1 shrink basis-6 my-auto px-5 rounded-[43px]">
          <nav className="self-stretch flex items-center text-[15px] whitespace-nowrap leading-[1.2] my-auto p-2.5" aria-label="Breadcrumb">
            <div className="text-[#A0A3A6] font-normal self-stretch my-auto">
              Início
            </div>
            <div className="self-stretch flex w-[19px] shrink-0 h-4 my-auto" />
            <div className="text-[#D0D1D3] font-bold self-stretch my-auto">
              Mentorias
            </div>
          </nav>
          
          <form onSubmit={handleSearchSubmit} className="items-center bg-[#101820] self-stretch flex min-w-60 min-h-10 gap-2.5 italic text-xs text-[#6F7479] font-medium whitespace-nowrap leading-[1.2] flex-wrap flex-1 shrink basis-[0%] my-auto px-5 rounded-[43px]">
            <div className="self-stretch flex w-6 shrink-0 h-[21px] my-auto" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar"
              className="self-stretch my-auto bg-transparent border-none outline-none text-[#6F7479] placeholder-[#6F7479]"
            />
          </form>
          
          <div className="self-stretch flex items-center gap-3.5 my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0f52fa3f713bde09c483ff3883b40ffe6888a7f4?placeholderIfAbsent=true"
              className="aspect-[1.14] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Notification"
            />
            <div className="self-stretch flex w-[23px] shrink-0 h-[21px] my-auto" />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b8622ad01573443d07363526c65e1271ab6ad901?placeholderIfAbsent=true"
              className="aspect-[1.14] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Settings"
            />
          </div>
        </div>
        
        <button
          onClick={handleNewMentorship}
          className="self-stretch flex min-w-60 items-center gap-2.5 text-lg text-[#F6E5D2] font-bold tracking-[0.02px] leading-none justify-center my-auto px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d06f8fe92bbf0bdfd4b14494e2b8ff770fd18569?placeholderIfAbsent=true"
            className="aspect-[1.16] object-contain w-[29px] self-stretch shrink-0 my-auto"
            alt="Add icon"
          />
          <span className="self-stretch my-auto">
            Nova Mentoria
          </span>
        </button>
      </div>
    </header>
  );
};
