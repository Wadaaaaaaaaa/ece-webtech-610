import Link from "next/link";

export const Navbar = () => {

    return(
        <div class="bg-gray-800 h-16 flex items-center text-2xl text-white">
        <nav className="ml-2 flex space-x-4 font-bold">
            <Link href="/">Index</Link>
            <Link href="/contacts">Contact</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/about">About</Link>
        </nav>
        <br/>
        </div>
    )
}