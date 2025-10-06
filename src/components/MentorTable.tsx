import React from 'react';
import { Avatar } from './Avatar';
import { StatusChip } from './StatusChip';
import { StarRating } from './StarRating';

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
  const handleRowAction = (sessionId: string) => {
    console.log('Action clicked for session:', sessionId);
  };

  return (
    <div className="shadow-[0_4px_25px_0_rgba(0,0,0,0.15)] bg-[#232A32] min-h-[834px] w-full pt-[30px] pb-[422px] px-[30px] rounded-[20px]">
      <div className="flex w-full flex-col items-stretch text-[15px] text-[#D0D1D3] font-semibold leading-[1.2] justify-center pr-[70px]">
        <div className="flex w-full items-center flex-wrap" role="row">
          <div className="self-stretch flex-1 shrink basis-[0%] my-auto" role="columnheader">
            Título
          </div>
          <div className="text-center self-stretch w-[227px] my-auto" role="columnheader">
            Status
          </div>
          <div className="self-stretch w-[308px] my-auto" role="columnheader">
            Empresa
          </div>
          <div className="self-stretch w-40 my-auto" role="columnheader">
            Data da mentoria
          </div>
          <div className="text-center self-stretch w-[187px] my-auto" role="columnheader">
            Avaliação
          </div>
        </div>
      </div>
      
      <div className="mt-2.5" role="table">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="justify-between items-center flex w-full flex-wrap py-5 border-b-[#3F464C] border-b border-solid"
            role="row"
          >
            <div className="self-stretch flex min-w-60 items-center gap-4 flex-wrap flex-1 shrink basis-[0%] my-auto">
              <div className="text-white text-[15px] font-normal leading-[1.2] self-stretch flex-1 shrink basis-[50px] my-auto" role="cell">
                {session.title}
              </div>
              
              <div className="self-stretch my-auto" role="cell">
                <StatusChip status={session.status} text={session.statusText} />
              </div>
              
              <div className="self-stretch flex min-w-60 items-center gap-2.5 leading-[1.2] w-[289px] my-auto" role="cell">
                <Avatar initials={session.mentorInitials} />
                <div className="text-white text-[15px] font-normal self-stretch my-auto">
                  {session.mentorName}
                </div>
              </div>
              
              <div className="self-stretch flex items-center gap-2.5 text-[15px] text-white font-normal whitespace-nowrap leading-[1.2] justify-center w-[135px] my-auto" role="cell">
                <time dateTime={session.date}>
                  {session.date}
                </time>
              </div>
              
              <div className="self-stretch flex flex-col items-center justify-center w-56 my-auto" role="cell">
                <StarRating showEmpty={!session.hasRating} />
              </div>
            </div>
            
            <div className="self-stretch flex flex-col items-center justify-center w-[50px] my-auto" role="cell">
              <button
                onClick={() => handleRowAction(session.id)}
                className="aspect-[1.16] object-contain w-[22px] hover:opacity-70 transition-opacity"
                aria-label={`Actions for ${session.title}`}
              >
                <img
                  src={session.actionIcon}
                  className="w-full h-full"
                  alt="Actions"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
