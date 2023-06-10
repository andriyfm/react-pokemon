interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <nav>
        <ul className="inline-flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <li key={page}>
                <button
                  className={`px-3 py-1 rounded-full w-10 h-10 flex justify-center items-center hover:scale-75 transition-all ease-out ${
                    currentPage === page
                      ? "bg-F2B807 text-white"
                      : "bg-[#F5DB13] text-slate-800"
                  }`}
                  onClick={() => handleClick(page)}
                >
                  {page}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
