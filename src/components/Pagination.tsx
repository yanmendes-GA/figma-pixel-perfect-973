import React, { useState } from 'react';

interface PaginationProps {
  totalRecords: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalRecords,
  currentPage,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const totalPages = Math.ceil(totalRecords / itemsPerPage);
  const pages = [1, 2, 3, 4, 5];

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    onItemsPerPageChange(newItemsPerPage);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex w-full items-center gap-4 text-[15px] font-normal leading-[1.2] justify-center mt-6">
      <div className="flex w-full items-center gap-4 lg:gap-[40px] justify-between flex-wrap p-2.5">
        <div className="text-foreground text-sm lg:text-[15px]">
          Total de registros: <span className="font-semibold">{totalRecords}</span>
        </div>
        
        <nav className="flex items-center gap-1 lg:gap-2.5 text-lg lg:text-xl text-muted-foreground font-bold whitespace-nowrap" aria-label="Pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="w-8 h-8 lg:w-[37px] lg:h-[37px] flex items-center justify-center disabled:opacity-30 hover:bg-muted/50 rounded-lg transition-all disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/af24ae428215ba3acf0ab84f5cbc3d58ee4e344f?placeholderIfAbsent=true"
              className="w-full h-full"
              alt="Previous"
            />
          </button>
          
          {pages.slice(0, 3).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-lg transition-all ${
                currentPage === page
                  ? 'bg-primary text-primary-foreground shadow-md scale-105'
                  : 'hover:bg-muted/50 hover:scale-105'
              }`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
          
          <div className="hidden lg:flex items-center justify-center w-[50px] h-[50px] text-muted-foreground">
            ...86
          </div>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="w-8 h-8 lg:w-[38px] lg:h-[38px] flex items-center justify-center disabled:opacity-30 hover:bg-muted/50 rounded-lg transition-all disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/508844458591646ef4ccc58a41b2c346a5a39dbe?placeholderIfAbsent=true"
              className="w-full h-full"
              alt="Next"
            />
          </button>
        </nav>
        
        <div className="flex items-center gap-2 lg:gap-2.5 text-sm lg:text-[15px]">
          <label htmlFor="items-per-page" className="text-foreground hidden sm:inline">
            Itens por página:
          </label>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center bg-card min-h-9 gap-2 text-foreground whitespace-nowrap w-16 lg:w-[63px] px-3 py-2 rounded-lg hover:bg-muted/50 transition-all hover:shadow-md"
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
            >
              <span className="font-semibold">{itemsPerPage}</span>
              <span className="text-xs">▼</span>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute bottom-full left-0 mb-1 bg-card border border-border rounded-lg shadow-xl z-50 animate-in fade-in-0 zoom-in-95">
                {[5, 10, 20, 50].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleItemsPerPageChange(option)}
                    className={`block w-full px-4 py-2.5 text-left transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      option === itemsPerPage
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
