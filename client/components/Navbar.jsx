import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-16 flex items-center text-2xl text-white">
      <nav className="ml-2 flex-grow flex justify-between items-center">
        <div className="flex space-x-4 font-bold">
          <Link href="/homepage">Accueil</Link>
          <Link href="/contacts">Contact</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="mr-10">
          <Link href="/">
            <button className="text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">Log out</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
