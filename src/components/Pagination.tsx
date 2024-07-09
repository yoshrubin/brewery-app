import arrowRight from "../assets/arrow-right.svg";

interface PaginationProps {
  page: number;
  onClick: (value: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  onClick,
  totalPages,
}) => {
  return (
    <div className="flex space-x-4 items-center">
      <button
        className={`bg-white hover:bg-slate-200 rounded-md p-2 text-center 
            ${page === 1 ? "opacity-50 pointer-events-none" : ""}`}
        disabled={page === 1}
        onClick={() => {
          if (page === 1) return;
          onClick((page -= 1));
        }}
      >
        <img src={arrowRight} alt="Arrow Left" className="rotate-180" />
      </button>
      <p className="text-center">{page}</p>

      <button
        className={`bg-white hover:bg-slate-200 rounded-md p-2 text-center
            ${page === totalPages ? "opacity-50 pointer-events-none" : ""}`}
        disabled={page === totalPages}
        onClick={() => {
          if (page === totalPages) return;
          onClick((page += 1));
        }}
      >
        <img src={arrowRight} alt="Arrow Right" />
      </button>
    </div>
  );
};

export default Pagination;
