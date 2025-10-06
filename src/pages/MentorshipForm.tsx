import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useNavigate, useParams } from 'react-router-dom';

const MentorshipForm = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    title: isEditMode ? 'Mentoria sobre financeiro' : '',
    generation: isEditMode ? 'Livro caixa da empresa' : '',
    link: isEditMode ? 'https://linkdogrupo.whatsapp.com.br' : '',
    mentorshipDate: isEditMode ? '20/08/2025' : '',
    value: isEditMode ? '396,00' : '',
    description: isEditMode ? `Durante esta mentoria, foram abordadas as políticas para melhorar o desempenho da empresa e fortalecer o alinhamento entre os espaços.

Principais atividades:
- Criação de diretrizes de marca e ajustar a comunicação institucional;
- Mapear os princípios gerenciais operacionais e propor melhorias nos processos internos;
- Avaliar indicadores.` : '',
    satisfactionSurvey: isEditMode,
    satisfactionDescription: isEditMode ? 'Descrição da pesquisa de satisfação' : ''
  });

  const mentor = {
    name: 'Yan Ricardo Mendes',
    initials: 'YR',
    role: 'Dono Acelerador'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/mentorias');
  };

  const handleCancel = () => {
    navigate('/mentorias');
  };

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
                <h1 className="text-2xl font-bold text-foreground mb-8">
                  {isEditMode ? 'Editar Mentoria' : 'Nova Mentoria'}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Mentor Info */}
                    <div className="lg:w-64 flex-shrink-0">
                      <div className="flex flex-col items-center gap-4 p-6 bg-background/50 rounded-xl">
                        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-3xl font-bold text-primary-foreground">
                            {mentor.initials}
                          </span>
                        </div>
                        <div className="text-center">
                          <h3 className="text-foreground font-bold mb-1">
                            {mentor.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {mentor.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="flex-1 space-y-6">
                      {/* Title */}
                      <div>
                        <Label htmlFor="title">Título</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          placeholder="Mentoria sobre financeiro"
                          className="mt-2"
                        />
                      </div>

                      {/* Two columns */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="generation">Tema da sessão</Label>
                          <Input
                            id="generation"
                            value={formData.generation}
                            onChange={(e) => setFormData({ ...formData, generation: e.target.value })}
                            placeholder="Livro caixa da empresa"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="type">Tipo da mentoria</Label>
                          <Input
                            id="type"
                            placeholder="Online"
                            className="mt-2"
                          />
                        </div>
                      </div>

                      {/* Link */}
                      <div>
                        <Label htmlFor="link">Link da geração</Label>
                        <Input
                          id="link"
                          type="url"
                          value={formData.link}
                          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                          placeholder="https://linkdogrupo.whatsapp.com.br"
                          className="mt-2"
                        />
                      </div>

                      {/* Two columns */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="date">Data da Mentoria</Label>
                          <Input
                            id="date"
                            value={formData.mentorshipDate}
                            onChange={(e) => setFormData({ ...formData, mentorshipDate: e.target.value })}
                            placeholder="20/08/2025"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="value">Valor R$</Label>
                          <Input
                            id="value"
                            value={formData.value}
                            onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                            placeholder="396,00"
                            className="mt-2"
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <Label htmlFor="description">Atividades e tarefas geradas</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="Descreva as atividades..."
                          className="mt-2 min-h-[200px]"
                        />
                      </div>

                      {/* Satisfaction Survey */}
                      <div className="bg-background/50 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-foreground font-semibold mb-1">
                              Conteúdo Satisfatório
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Esta mentoria tem como objetivo auxiliar empresas em fase
                              inicial de desenvolvimento estratégico, criação de processos e
                              desenvolvimento de referências.
                            </p>
                          </div>
                          <Switch
                            checked={formData.satisfactionSurvey}
                            onCheckedChange={(checked) =>
                              setFormData({ ...formData, satisfactionSurvey: checked })
                            }
                          />
                        </div>
                        {formData.satisfactionSurvey && (
                          <Textarea
                            value={formData.satisfactionDescription}
                            onChange={(e) =>
                              setFormData({ ...formData, satisfactionDescription: e.target.value })
                            }
                            placeholder="Descrição da pesquisa de satisfação"
                            className="mt-4"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer Buttons */}
                  <div className="flex justify-between pt-6 border-t border-border">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleCancel}
                    >
                      Cancelar
                    </Button>
                    <Button type="submit">
                      Salvar
                    </Button>
                  </div>
                </form>
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

export default MentorshipForm;
