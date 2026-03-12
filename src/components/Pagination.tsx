"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages: (number | string)[] = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1, 2, 3, "...", totalPages);
  }

  return (
    <div className="flex items-center gap-2 pt-6 text-sm">
      {pages.map((page, i) =>
        page === "..." ? (
          <span key={`ellipsis-${i}`} className="px-1 text-[#374151]">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`flex h-8 w-8 items-center justify-center rounded ${
              currentPage === page
                ? "font-bold text-[#1771b8]"
                : "text-[#374151] hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className="px-2 text-[#374151] hover:text-[#212731]"
      >
        Next
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        className="px-2 text-[#374151] hover:text-[#212731]"
      >
        Last
      </button>
    </div>
  );
}
