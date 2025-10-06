import React, { useState } from 'react';
import { ArrowUpDown, Check } from 'lucide-react';
import { ActionMenu, ActionMenuItem } from './ActionMenu';
import { cn } from '@/lib/utils';

export interface Column<T> {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  hidden?: string; // Tailwind responsive classes like "lg:block"
  render?: (item: T) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  selectable?: boolean;
  onSelectionChange?: (selectedIds: string[]) => void;
  getRowId: (item: T) => string;
  getRowActions?: (item: T) => ActionMenuItem[];
  minHeight?: string;
}

export function DataTable<T>({
  data,
  columns,
  selectable = false,
  onSelectionChange,
  getRowId,
  getRowActions,
  minHeight = 'min-h-[400px]'
}: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      const aValue = (a as any)[sortColumn];
      const bValue = (b as any)[sortColumn];

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  const toggleSelectAll = () => {
    if (selectedIds.size === data.length) {
      setSelectedIds(new Set());
      onSelectionChange?.([]);
    } else {
      const allIds = new Set(data.map(getRowId));
      setSelectedIds(allIds);
      onSelectionChange?.(Array.from(allIds));
    }
  };

  const toggleSelectRow = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
    onSelectionChange?.(Array.from(newSelected));
  };

  const isAllSelected = selectedIds.size === data.length && data.length > 0;
  const isSomeSelected = selectedIds.size > 0 && selectedIds.size < data.length;

  return (
    <div className={cn("shadow-lg bg-card w-full pt-[30px] pb-8 px-4 lg:px-[30px] rounded-[20px] overflow-x-auto", minHeight)}>
      <div className="min-w-[900px]">
        <div className="flex w-full items-center text-[15px] text-muted-foreground font-semibold leading-[1.2] pb-4 border-b border-border">
          {selectable && (
            <div className="w-[50px] flex items-center justify-center" role="columnheader">
              <button
                onClick={toggleSelectAll}
                className={cn(
                  "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
                  isAllSelected || isSomeSelected
                    ? "bg-primary border-primary"
                    : "border-muted-foreground hover:border-primary"
                )}
                aria-label="Select all"
              >
                {isAllSelected && <Check className="w-4 h-4 text-primary-foreground" />}
                {isSomeSelected && !isAllSelected && (
                  <div className="w-2 h-2 bg-primary-foreground rounded-sm" />
                )}
              </button>
            </div>
          )}
          {columns.map((column) => (
            <div
              key={column.key}
              className={cn(
                column.width || "flex-1",
                column.hidden,
                column.align === 'center' && "text-center",
                column.align === 'right' && "text-right"
              )}
              role="columnheader"
            >
              {column.sortable ? (
                <button
                  onClick={() => handleSort(column.key)}
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  {column.label}
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              ) : (
                column.label
              )}
            </div>
          ))}
          {getRowActions && <div className="w-[50px]" role="columnheader"></div>}
        </div>
      </div>

      <div className="min-w-[900px]" role="table">
        {sortedData.map((item) => {
          const rowId = getRowId(item);
          const isSelected = selectedIds.has(rowId);

          return (
            <div
              key={rowId}
              className={cn(
                "flex items-center w-full py-5 border-b border-border hover:bg-muted/20 transition-colors group",
                isSelected && "bg-muted/30"
              )}
              role="row"
            >
              {selectable && (
                <div className="w-[50px] flex items-center justify-center" role="cell">
                  <button
                    onClick={() => toggleSelectRow(rowId)}
                    className={cn(
                      "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
                      isSelected
                        ? "bg-primary border-primary"
                        : "border-muted-foreground hover:border-primary"
                    )}
                    aria-label={`Select row ${rowId}`}
                  >
                    {isSelected && <Check className="w-4 h-4 text-primary-foreground" />}
                  </button>
                </div>
              )}
              {columns.map((column) => (
                <div
                  key={column.key}
                  className={cn(
                    column.width || "flex-1",
                    column.hidden,
                    "text-foreground text-[15px] font-normal leading-[1.2] pr-4",
                    column.align === 'center' && "text-center justify-center flex",
                    column.align === 'right' && "text-right justify-end flex"
                  )}
                  role="cell"
                >
                  {column.render ? column.render(item) : (item as any)[column.key]}
                </div>
              ))}
              {getRowActions && (
                <div className="w-[50px] flex items-center justify-center" role="cell">
                  <ActionMenu items={getRowActions(item)} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
