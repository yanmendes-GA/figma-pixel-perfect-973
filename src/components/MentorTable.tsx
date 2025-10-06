import React from 'react';
import { DataTable, Column } from './DataTable';
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
  const columns: Column<MentorshipSession>[] = [
    {
      key: 'title',
      label: 'Título',
      sortable: true,
      width: 'flex-1 min-w-[200px]'
    },
    {
      key: 'status',
      label: 'Status',
      sortable: false,
      width: 'w-[200px]',
      align: 'center',
      hidden: 'hidden lg:flex',
      render: (session) => (
        <StatusChip status={session.status} text={session.statusText} />
      )
    },
    {
      key: 'mentorName',
      label: 'Empresa',
      sortable: true,
      width: 'w-[250px]',
      hidden: 'hidden xl:flex',
      render: (session) => (
        <div className="flex items-center gap-2.5">
          <Avatar initials={session.mentorInitials} />
          <span className="truncate">{session.mentorName}</span>
        </div>
      )
    },
    {
      key: 'date',
      label: 'Data da mentoria',
      sortable: true,
      width: 'w-[150px]',
      align: 'center',
      hidden: 'hidden lg:flex',
      render: (session) => (
        <time dateTime={session.date}>{session.date}</time>
      )
    },
    {
      key: 'hasRating',
      label: 'Avaliação',
      sortable: false,
      width: 'w-[180px]',
      align: 'center',
      hidden: 'hidden xl:flex',
      render: (session) => <StarRating showEmpty={!session.hasRating} />
    }
  ];

  const getRowActions = (session: MentorshipSession) => [
    {
      label: 'Ver detalhes',
      onClick: () => console.log('View details:', session.id),
    },
    {
      label: 'Editar',
      onClick: () => console.log('Edit:', session.id),
    },
    ...(session.status !== 'cancelled'
      ? [
          {
            label: 'Cancelar',
            onClick: () => console.log('Cancel:', session.id),
            variant: 'destructive' as const,
          },
        ]
      : []),
  ];

  return (
    <DataTable
      data={sessions}
      columns={columns}
      selectable={true}
      getRowId={(session) => session.id}
      getRowActions={getRowActions}
      minHeight="min-h-[600px]"
    />
  );
};
