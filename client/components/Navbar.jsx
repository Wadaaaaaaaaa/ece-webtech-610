import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-gray-800 h-16 flex items-center text-2xl text-white">
      <nav className="ml-2 flex-grow flex justify-between items-center">
        <div className="flex space-x-4 font-bold">
          <Link href="/">Index</Link>
          <Link href="/contacts">Contact</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="mr-10">
          <Link href="/login-native">Login</Link>
        </div>
      </nav>
    </div>
  );
};
