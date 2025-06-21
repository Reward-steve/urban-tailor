// components/StyleCard.tsx
import Image from "next/image";

interface StyleCardProps {
  title: string;
  image: string;
  description: string;
  onClick?: () => void;
}

export function StyleCard({
  title,
  image,
  description,
  onClick,
}: StyleCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={350}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
