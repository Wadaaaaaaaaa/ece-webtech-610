import Link from "next/link";
import { useRouter } from "next/router"; // Importez useRouter
import { supabase } from "../supabase";

export const Navbar = () => {
  const router = useRouter(); // Utilisez useRouter

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/login-native"); // Redirigez vers la page d'accueil après la déconnexion
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-500 to-indigo-500 h-24 flex items-center text-4xl text-white">
      <nav className="ml-2 flex-grow flex justify-between items-center">
        <div className="flex space-x-4 font-bold">
          <Link href="/homepage">Accueil</Link>
          <Link href="/contacts">Contact</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="mr-10">
          <button
            onClick={logout}
            className="text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Log out
          </button>
        </div>
      </nav>
    </div>
  );
};
