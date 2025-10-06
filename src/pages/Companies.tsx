import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { DataTable, Column } from '@/components/DataTable';
import { Avatar } from '@/components/Avatar';
import { useNavigate } from 'react-router-dom';

interface Company {
  id: string;
  name: string;
  initials: string;
  totalMentorships: number;
  activeMentorships: number;
  completedMentorships: number;
}

const Companies = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const navigate = useNavigate();

  const companies: Company[] = [
    {
      id: '1',
      name: 'Company SGA',
      initials: 'CS',
      totalMentorships: 12,
      activeMentorships: 3,
      completedMentorships: 9
    },
    {
      id: '2',
      name: 'Tech Innovations Corp',
      initials: 'TI',
      totalMentorships: 8,
      activeMentorships: 2,
      completedMentorships: 6
    },
    {
      id: '3',
      name: 'Digital Solutions Ltd',
      initials: 'DS',
      totalMentorships: 15,
      activeMentorships: 5,
      completedMentorships: 10
    },
    {
      id: '4',
      name: 'Marketing Masters',
      initials: 'MM',
      totalMentorships: 6,
      activeMentorships: 1,
      completedMentorships: 5
    },
    {
      id: '5',
      name: 'Startup Accelerator',
      initials: 'SA',
      totalMentorships: 20,
      activeMentorships: 7,
      completedMentorships: 13
    }
  ];

  const columns: Column<Company>[] = [
    {
      key: 'name',
      label: 'Empresa',
      sortable: true,
      width: 'flex-1 min-w-[250px]',
      render: (company) => (
        <div className="flex items-center gap-2.5">
          <Avatar initials={company.initials} />
          <span className="truncate">{company.name}</span>
        </div>
      )
    },
    {
      key: 'totalMentorships',
      label: 'Total de Mentorias',
      sortable: true,
      width: 'w-[180px]',
      align: 'center',
      hidden: 'hidden lg:flex'
    },
    {
      key: 'activeMentorships',
      label: 'Ativas',
      sortable: true,
      width: 'w-[150px]',
      align: 'center',
      hidden: 'hidden xl:flex',
      render: (company) => (
        <span className="text-success font-semibold">{company.activeMentorships}</span>
      )
    },
    {
      key: 'completedMentorships',
      label: 'Concluídas',
      sortable: true,
      width: 'w-[150px]',
      align: 'center',
      hidden: 'hidden xl:flex',
      render: (company) => (
        <span className="text-muted-foreground">{company.completedMentorships}</span>
      )
    }
  ];

  const getRowActions = (company: Company) => [
    {
      label: 'Ver detalhes',
      onClick: () => navigate(`/empresas/${company.id}`)
    },
    {
      label: 'Editar',
      onClick: () => console.log('Edit company:', company.id)
    },
    {
      label: 'Excluir',
      onClick: () => console.log('Delete company:', company.id),
      variant: 'destructive' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row relative min-h-screen w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/1efeabe87bf4e2c63484bb630cfbbaa5e04d63fd?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0 opacity-50"
          alt="Background"
        />
        
        <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <div className="relative flex-1 flex flex-col min-h-screen">
          <main className="flex-1 px-4 lg:px-8 py-5 max-w-[2000px] mx-auto w-full">
            <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
            
            <div className="w-full mt-6 lg:mt-10">
              {selectedCompanies.length > 0 && (
                <div className="mb-4 p-4 bg-primary/10 rounded-lg text-primary-foreground">
                  {selectedCompanies.length} empresa(s) selecionada(s)
                </div>
              )}
              
              <DataTable
                data={companies}
                columns={columns}
                selectable={true}
                onSelectionChange={setSelectedCompanies}
                getRowId={(company) => company.id}
                getRowActions={getRowActions}
                minHeight="min-h-[600px]"
              />
            </div>
          </main>
          
          <footer className="relative flex w-full items-center gap-4 lg:gap-[40px] text-sm lg:text-[15px] text-muted-foreground font-semibold justify-between flex-wrap px-4 lg:px-8 py-4 border-t border-border">
            <div>Grupo Acelerador 2025</div>
            <div>V 1.0.2</div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Companies;
