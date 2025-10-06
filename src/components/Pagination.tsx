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
    <div className="flex w-full items-center gap-2.5 text-[15px] font-normal leading-[1.2] justify-center mt-4">
      <div className="self-stretch flex min-w-60 w-full items-center gap-[40px_100px] justify-between flex-wrap flex-1 shrink basis-[0%] my-auto p-2.5">
        <div className="text-white self-stretch my-auto">
          Total de registros: {totalRecords}
        </div>
        
        <nav className="self-stretch flex min-w-60 items-center gap-2.5 text-xl text-[#A0A3A6] font-bold whitespace-nowrap my-auto" aria-label="Pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="aspect-[1.12] object-contain w-[37px] self-stretch shrink-0 my-auto disabled:opacity-50"
            aria-label="Previous page"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/af24ae428215ba3acf0ab84f5cbc3d58ee4e344f?placeholderIfAbsent=true"
              className="w-full h-full"
              alt="Previous"
            />
          </button>
          
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`self-stretch flex min-h-[50px] flex-col items-center justify-center w-[50px] my-auto px-4 py-[13px] rounded-[10px] ${
                currentPage === page 
                  ? 'bg-[#D67C1C] text-[#F6E5D2]' 
                  : 'hover:bg-[#3F464C] transition-colors'
              }`}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              <div>{page}</div>
            </button>
          ))}
          
          <div className="self-stretch flex min-h-[50px] flex-col items-center justify-center w-[50px] my-auto px-1 py-[13px] rounded-[10px]">
            <div>...86</div>
          </div>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="aspect-[1.15] object-contain w-[38px] self-stretch shrink-0 my-auto disabled:opacity-50"
            aria-label="Next page"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/508844458591646ef4ccc58a41b2c346a5a39dbe?placeholderIfAbsent=true"
              className="w-full h-full"
              alt="Next"
            />
          </button>
        </nav>
        
        <div className="self-stretch flex items-center gap-2.5 justify-center my-auto">
          <label htmlFor="items-per-page" className="text-white self-stretch my-auto">
            Itens por página:
          </label>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="justify-center items-center bg-[#232A32] self-stretch flex min-h-9 gap-2.5 text-[#D0D1D3] whitespace-nowrap w-[63px] my-auto pl-3.5 pr-[13px] py-[9px] rounded-lg hover:bg-[#3F464C] transition-colors"
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
            >
              <span className="self-stretch my-auto">{itemsPerPage}</span>
              <div className="rotate-[1.570796370506285rad] self-stretch flex w-2.5 shrink-0 h-3 my-auto" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#232A32] border border-[#3F464C] rounded-lg shadow-lg z-10">
                {[5, 10, 20, 50].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleItemsPerPageChange(option)}
                    className="block w-full px-3.5 py-2 text-left text-[#D0D1D3] hover:bg-[#3F464C] transition-colors"
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
