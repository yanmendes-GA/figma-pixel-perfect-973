import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    {
      title: 'Total de Mentorias',
      value: '148',
      icon: Calendar,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Mentorias Ativas',
      value: '32',
      icon: TrendingUp,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      title: 'Empresas Cadastradas',
      value: '45',
      icon: Users,
      color: 'text-info',
      bgColor: 'bg-info/10'
    },
    {
      title: 'Taxa de Conclusão',
      value: '87%',
      icon: Award,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  const recentMentorships = [
    { title: 'Mentoria sobre financeiro', company: 'Company SGA', status: 'Concluído', date: '08/10/2025' },
    { title: 'Estratégias de Marketing Digital', company: 'Tech Corp', status: 'Em andamento', date: '10/10/2025' },
    { title: 'Gestão de Equipes', company: 'Startup XYZ', status: 'Agendado', date: '12/10/2025' },
    { title: 'Análise de Métricas', company: 'Company SGA', status: 'Concluído', date: '05/10/2025' },
  ];

  const upcomingMentorships = [
    { title: 'Planejamento Estratégico', company: 'Innovation Ltd', date: '15/10/2025', time: '14:00' },
    { title: 'Desenvolvimento de Produto', company: 'Build Co', date: '16/10/2025', time: '10:00' },
    { title: 'Cultura Organizacional', company: 'People First', date: '18/10/2025', time: '16:30' },
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
            
            <div className="w-full mt-6 lg:mt-10 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-[20px] p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm font-medium mb-2">
                          {stat.title}
                        </p>
                        <p className="text-foreground text-3xl font-bold">
                          {stat.value}
                        </p>
                      </div>
                      <div className={`${stat.bgColor} ${stat.color} p-4 rounded-xl`}>
                        <stat.icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent and Upcoming Mentorships */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Recent Mentorships */}
                <div className="bg-card rounded-[20px] p-6 shadow-lg">
                  <h2 className="text-foreground text-xl font-bold mb-6">
                    Mentorias Recentes
                  </h2>
                  <div className="space-y-4">
                    {recentMentorships.map((mentorship, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-background/50 rounded-xl hover:bg-muted/20 transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="text-foreground font-semibold mb-1">
                            {mentorship.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {mentorship.company}
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <span className={`text-sm font-medium ${
                            mentorship.status === 'Concluído' ? 'text-success' :
                            mentorship.status === 'Em andamento' ? 'text-info' :
                            'text-warning'
                          }`}>
                            {mentorship.status}
                          </span>
                          <p className="text-muted-foreground text-sm mt-1">
                            {mentorship.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Mentorships */}
                <div className="bg-card rounded-[20px] p-6 shadow-lg">
                  <h2 className="text-foreground text-xl font-bold mb-6">
                    Próximas Mentorias
                  </h2>
                  <div className="space-y-4">
                    {upcomingMentorships.map((mentorship, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-background/50 rounded-xl hover:bg-muted/20 transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="text-foreground font-semibold mb-1">
                            {mentorship.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {mentorship.company}
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-foreground font-medium text-sm">
                            {mentorship.date}
                          </p>
                          <p className="text-muted-foreground text-sm mt-1">
                            {mentorship.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Chart Placeholder */}
              <div className="bg-card rounded-[20px] p-6 shadow-lg">
                <h2 className="text-foreground text-xl font-bold mb-6">
                  Desempenho do Mês
                </h2>
                <div className="h-[300px] flex items-center justify-center bg-background/50 rounded-xl">
                  <p className="text-muted-foreground">
                    Gráfico de desempenho será exibido aqui
                  </p>
                </div>
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

export default Dashboard;
