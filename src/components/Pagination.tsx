import arrowRight from "../assets/arrow-right.svg";

interface PaginationProps {
  page: number;
  onClick: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, onClick }) => {
  return (
    <div className="flex justify-evenly items-center">
      <button
        className="bg-white hover:bg-slate-200 rounded-md p-2 text-center {page === 1 ? 'hidden' : ''}"
        onClick={() => onClick((page -= 1))}
      >
        <img src={arrowRight} className="rotate-180  " alt="Arrow Left" />
      </button>
      <p className="text-center">{page}</p>
      <button
        className="bg-white hover:bg-slate-200 rounded-md p-2 text-center"
        onClick={() => onClick((page += 1))}
      >
        <img src={arrowRight} alt="Arrow Right" />
      </button>
    </div>
  );
};

export default Pagination;
