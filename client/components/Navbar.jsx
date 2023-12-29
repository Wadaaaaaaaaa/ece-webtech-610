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
          <Link href="/destinations">Destinations</Link>
          <Link href="/about">About</Link>
        </div>
        


        <div className="mr-10 flex space-x-4 ">
        <a href="/profiles" className="tab mr-4">
    <svg
      width="104"
      height="50"
      viewBox="0 0 104 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="21.5"
        y="3.5"
        width="60"
        height="60"
        rx="30"
        stroke="black"
        strokeWidth="7"
      ></rect>
      <g clipPath="url(#clip0_41_27)">
        <mask
          id="mask0_41_27"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="61"
          width="104"
          height="52"
        >
          <path
            d="M0 113C0 84.2812 23.4071 61 52.1259 61C80.706 61 104 84.4199 104 113H0Z"
            fill="white"
          ></path>
        </mask>
        <g mask="url(#mask0_41_27)">
          <path
            d="M-7 113C-7 80.4152 19.4152 54 52 54H52.2512C84.6973 54 111 80.3027 111 112.749H97C97 88.0347 76.9653 68 52.2512 68H52C27.1472 68 7 88.1472 7 113H-7ZM-7 113C-7 80.4152 19.4152 54 52 54V68C27.1472 68 7 88.1472 7 113H-7ZM52.2512 54C84.6973 54 111 80.3027 111 112.749V113H97V112.749C97 88.0347 76.9653 68 52.2512 68V54Z"
            fill="black"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_41_27">
          <rect
            width="104"
            height="39"
            fill="white"
            transform="translate(0 61)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  </a>
          <button onClick={logout} class="flex items-center justify-start w-12 h-12 rounded-full cursor-pointer relative overflow-hidden transition duration-300 shadow-md bg-green-500 hover:w-32 hover:rounded-lg hover:shadow-lg">
          <div class="w-full flex items-center justify-center transition duration-300">
            <svg viewBox="0 0 512 512" class="w-6">
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              ></path>
            </svg>
          </div>
          <div class="absolute right-0 w-0 opacity-10 text-black font-semibold text-lg transition duration-300">
            Logout
          </div>
          </button>
        </div>
      </nav>
    </div>
  );
};
