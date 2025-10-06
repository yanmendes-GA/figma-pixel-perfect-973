import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Avatar } from '@/components/Avatar';
import { StatusChip } from '@/components/StatusChip';
import { useParams } from 'react-router-dom';
import { Building2 } from 'lucide-react';

const CompanyDetail = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'dados' | 'mentorias' | 'atividades'>('mentorias');
  const { id } = useParams();

  const company = {
    name: 'Company SGA',
    initials: 'CS',
    description: 'Grupo Acelerador'
  };

  const stats = [
    { label: 'Total', value: '12' },
    { label: 'Finalizadas', value: '7' },
    { label: 'Pendentes', value: '5' }
  ];

  const mentorships = [
    {
      id: '1',
      title: 'Mentoria sobre financeiro',
      mentorName: 'Mentor Da teste',
      mentorInitials: 'MD',
      status: 'completed' as const,
      statusText: 'Concluído',
      type: 'Presencial',
      date: '20/08/25'
    },
    {
      id: '2',
      title: 'Mentoria sobre financeiro',
      mentorName: 'Mentor Da teste',
      mentorInitials: 'MD',
      status: 'completed' as const,
      statusText: 'Concluído',
      type: 'Presencial',
      date: '20/08/25'
    },
    {
      id: '3',
      title: 'Mentoria sobre financeiro',
      mentorName: 'Mentor Da teste',
      mentorInitials: 'MD',
      status: 'completed' as const,
      statusText: 'Concluído',
      type: 'Presencial',
      date: '20/08/25'
    },
    {
      id: '4',
      title: 'Mentoria sobre financeiro',
      mentorName: 'Mentor Da teste',
      mentorInitials: 'MD',
      status: 'not-started' as const,
      statusText: 'Não iniciado',
      type: 'Presencial',
      date: '20/08/25'
    },
    {
      id: '5',
      title: 'Mentoria sobre financeiro',
      mentorName: 'Mentor Da teste',
      mentorInitials: 'MD',
      status: 'not-started' as const,
      statusText: 'Não iniciado',
      type: 'Online',
      date: '20/08/25'
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
              <div className="bg-card rounded-[20px] shadow-lg p-6 lg:p-8">
                {/* Company Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 pb-6 border-b border-border">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground">
                      {company.initials}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-foreground mb-2">
                      {company.name}
                    </h1>
                    <p className="text-muted-foreground">
                      {company.description}
                    </p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-8 border-b border-border mt-6">
                  <button
                    onClick={() => setActiveTab('dados')}
                    className={`pb-4 px-2 font-semibold transition-colors ${
                      activeTab === 'dados'
                        ? 'text-foreground border-b-2 border-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Dados da empresa
                  </button>
                  <button
                    onClick={() => setActiveTab('mentorias')}
                    className={`pb-4 px-2 font-semibold transition-colors ${
                      activeTab === 'mentorias'
                        ? 'text-foreground border-b-2 border-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Mentorias
                  </button>
                  <button
                    onClick={() => setActiveTab('atividades')}
                    className={`pb-4 px-2 font-semibold transition-colors ${
                      activeTab === 'atividades'
                        ? 'text-foreground border-b-2 border-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Atividades
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'dados' && (
                  <div className="mt-6 text-center py-12">
                    <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Formulário de dados da empresa
                    </p>
                  </div>
                )}

                {activeTab === 'mentorias' && (
                  <div className="mt-6">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl font-bold text-foreground mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Mentorships List */}
                    <div className="space-y-3">
                      {mentorships.map((mentorship) => (
                        <div
                          key={mentorship.id}
                          className="bg-background/50 rounded-xl p-4 hover:bg-muted/20 transition-colors"
                        >
                          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                            <div className="flex items-center gap-3 flex-1">
                              <Avatar initials={mentorship.mentorInitials} />
                              <div>
                                <h3 className="text-foreground font-semibold mb-1">
                                  {mentorship.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {mentorship.mentorName}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 flex-wrap">
                              <StatusChip 
                                status={mentorship.status} 
                                text={mentorship.statusText}
                              />
                              <span className="text-sm text-muted-foreground min-w-[100px]">
                                {mentorship.type}
                              </span>
                              <span className="text-sm text-muted-foreground min-w-[80px]">
                                {mentorship.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'atividades' && (
                  <div className="mt-6 text-center py-12">
                    <p className="text-muted-foreground">
                      Nenhuma atividade registrada
                    </p>
                  </div>
                )}
              </div>
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

export default CompanyDetail;
