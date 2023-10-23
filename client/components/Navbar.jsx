import Link from "next/link";

export const Navbar = () => {

    return(

        <nav>
            <Link href="/">Index</Link>
            <Link href="/contacts">Contact</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}