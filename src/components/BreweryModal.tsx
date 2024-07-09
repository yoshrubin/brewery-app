import { useEffect, useRef } from "react";
import { Brewery } from "../store/brewerySlice";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  brewery: Brewery | null;
}

const BreweryModal: React.FC<ModalProps> = ({ isOpen, onClose, brewery }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    const dialog = dialogRef.current;

    if (dialog && isOpen) {
      dialog.showModal();
      window.addEventListener("keydown", handleKeyDown);
    } else if (dialog) {
      dialog.close();
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity ease-in
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-md shadow-md flex flex-col space-y-2"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-center">{brewery?.name}</h2>
        <p>Type: {brewery?.brewery_type}</p>
        <p>
          Address: {brewery?.address_1}, {brewery?.address_2}, {brewery?.city},{" "}
          {brewery?.state}, {brewery?.postal_code}
        </p>

        <a href={`tel:${brewery?.phone}`}>
          Phone:{" "}
          <span className="text-blue-500 hover:underline">
            {brewery?.phone}
          </span>
        </a>
        <a href={brewery?.website_url} target="_blank" rel="noreferrer">
          Website:{" "}
          <span className="text-blue-500 hover:underline">
            {brewery?.website_url}
          </span>
        </a>
        <button
          autoFocus={true}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </dialog>
  );
};

export default BreweryModal;
