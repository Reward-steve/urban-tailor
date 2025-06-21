import Link from "next/link";
export const Logo = () => {
  return (
    <Link href="/">
      <span className="flex items-center space-x-2 text-2xl font-medium text-green-600 dark:text-gray-100">
        <span className="w-9 h-9 flex justify-center items-center bg-green-600 text-white rounded-md font-sans">
          UT
        </span>
        <span>UrbanTailor</span>
      </span>
    </Link>
  );
};
