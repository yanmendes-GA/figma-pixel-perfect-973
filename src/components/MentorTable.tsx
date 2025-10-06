import React from 'react';
import { Avatar } from './Avatar';
import { StatusChip } from './StatusChip';
import { StarRating } from './StarRating';
import { ActionMenu } from './ActionMenu';

interface MentorshipSession {
  id: string;
  title: string;
  status: 'not-started' | 'cancelled' | 'completed' | 'not-evaluated';
  statusText: string;
  mentorName: string;
  mentorInitials: string;
  date: string;
  hasRating: boolean;
  actionIcon: string;
}

interface MentorTableProps {
  sessions: MentorshipSession[];
}

export const MentorTable: React.FC<MentorTableProps> = ({ sessions }) => {
  const getActionItems = (sessionId: string, status: string) => [
    {
      label: 'Ver detalhes',
      onClick: () => console.log('View details:', sessionId),
    },
    {
      label: 'Editar',
      onClick: () => console.log('Edit:', sessionId),
    },
    ...(status !== 'cancelled'
      ? [
          {
            label: 'Cancelar',
            onClick: () => console.log('Cancel:', sessionId),
            variant: 'destructive' as const,
          },
        ]
      : []),
  ];

  return (
    <div className="shadow-lg bg-card w-full pt-[30px] pb-8 px-4 lg:px-[30px] rounded-[20px] overflow-x-auto">
      <div className="min-w-[900px]">
        <div className="flex w-full items-center text-[15px] text-muted-foreground font-semibold leading-[1.2] pb-4 border-b border-border">
          <div className="flex-1 min-w-[200px]" role="columnheader">
            Título
          </div>
          <div className="text-center w-[200px] hidden lg:block" role="columnheader">
            Status
          </div>
          <div className="w-[250px] hidden xl:block" role="columnheader">
            Empresa
          </div>
          <div className="w-[150px] hidden lg:block" role="columnheader">
            Data da mentoria
          </div>
          <div className="text-center w-[180px] hidden xl:block" role="columnheader">
            Avaliação
          </div>
          <div className="w-[50px]" role="columnheader"></div>
        </div>
      </div>
      
      <div className="min-w-[900px]" role="table">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="flex items-center w-full py-5 border-b border-border hover:bg-muted/20 transition-colors group"
            role="row"
          >
            <div className="flex-1 min-w-[200px] text-foreground text-[15px] font-normal leading-[1.2] pr-4" role="cell">
              {session.title}
            </div>
            
            <div className="w-[200px] hidden lg:flex justify-center" role="cell">
              <StatusChip status={session.status} text={session.statusText} />
            </div>
            
            <div className="w-[250px] hidden xl:flex items-center gap-2.5 leading-[1.2]" role="cell">
              <Avatar initials={session.mentorInitials} />
              <span className="text-foreground text-[15px] font-normal truncate">
                {session.mentorName}
              </span>
            </div>
            
            <div className="w-[150px] hidden lg:flex items-center justify-center text-[15px] text-foreground font-normal whitespace-nowrap" role="cell">
              <time dateTime={session.date}>
                {session.date}
              </time>
            </div>
            
            <div className="w-[180px] hidden xl:flex flex-col items-center justify-center" role="cell">
              <StarRating showEmpty={!session.hasRating} />
            </div>
            
            <div className="w-[50px] flex items-center justify-center" role="cell">
              <ActionMenu items={getActionItems(session.id, session.status)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
