// components/StyleModal.tsx
import Image from "next/image";

interface StyleModalProps {
  isOpen: boolean;
  onClose: () => void;
  style: {
    title: string;
    image: string;
    description: string;
  } | null;
}

export function StyleModal({ isOpen, onClose, style }: StyleModalProps) {
  if (!isOpen || !style) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 animate-fadeIn"
      onClick={onClose}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-lg w-full">
        <Image
          src={style.image}
          alt={style.title}
          width={800}
          height={800}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">{style.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {style.description}
          </p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
