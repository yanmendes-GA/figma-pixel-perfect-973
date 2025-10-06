import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { MentorTable } from '@/components/MentorTable';
import { Pagination } from '@/components/Pagination';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalRecords = 754;

  const mentorshipSessions = [
    {
      id: '1',
      title: 'Mentoria sobre financeiro',
      status: 'not-started' as const,
      statusText: 'não iniciado',
      mentorName: 'Yan Ricardo Mendes',
      mentorInitials: 'yr',
      date: '08/10/2025',
      hasRating: true,
      actionIcon: 'https://api.builder.io/api/v1/image/assets/TEMP/2ec5d27ca344c5159735edd3cdfcf889f8c4b3f4?placeholderIfAbsent=true'
    },
    {
      id: '2',
      title: 'Mentoria sobre um cara legal que ganha muito dinheiro.',
      status: 'cancelled' as const,
      statusText: 'cancelado',
      mentorName: 'Lucas Amaral',
      mentorInitials: 'LA',
      date: '08/10/2025',
      hasRating: true,
      actionIcon: 'https://api.builder.io/api/v1/image/assets/TEMP/3001ebed72f1d9c809494e682b3aa101c95e9d95?placeholderIfAbsent=true'
    },
    {
      id: '3',
      title: 'Mentoria sobre um cara legal que ganha muito dinheiro.',
      status: 'completed' as const,
      statusText: 'concluído',
      mentorName: 'Rayan Chemin',
      mentorInitials: 'RC',
      date: '08/10/2025',
      hasRating: true,
      actionIcon: 'https://api.builder.io/api/v1/image/assets/TEMP/df17240f8293c5ca8e12002e9e43690e943a945a?placeholderIfAbsent=true'
    },
    {
      id: '4',
      title: 'Mentoria sobre um cara legal que ganha muito dinheiro.',
      status: 'not-evaluated' as const,
      statusText: 'não avaliado',
      mentorName: 'Ricardo Gusse',
      mentorInitials: 'RG',
      date: '08/10/2025',
      hasRating: false,
      actionIcon: 'https://api.builder.io/api/v1/image/assets/TEMP/5520fbc5397ec0c51cc6db566b5f15d574bf50a8?placeholderIfAbsent=true'
    }
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log('Page changed to:', page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
    console.log('Items per page changed to:', items);
  };

  return (
    <div className="overflow-hidden bg-[#101820]">
      <div className="flex flex-col relative min-h-[1080px] w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/1efeabe87bf4e2c63484bb630cfbbaa5e04d63fd?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Background"
        />
        
        <div className="relative flex items-stretch gap-10 flex-wrap">
          <Sidebar />
          
          <main className="min-w-60 flex-1 shrink basis-[54px] py-5">
            <Header />
            
            <div className="w-full mt-10">
              <MentorTable sessions={mentorshipSessions} />
              
              <Pagination
                totalRecords={totalRecords}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
                onItemsPerPageChange={handleItemsPerPageChange}
              />
              
              <footer className="flex w-full items-center gap-[40px_100px] text-[15px] text-[#3F464C] font-semibold leading-[1.2] justify-between flex-wrap mt-4">
                <div className="self-stretch my-auto">
                  Grupo Acelerador 2025
                </div>
                <div className="self-stretch my-auto">
                  V 1.0.2
                </div>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
