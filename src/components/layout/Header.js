import Link from "next/link";
import Smile from "../icons/Smile";

export default function Header() {
    return (
        <header className="flex items-center justify-between pb-6">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={'/'} className="flex gap-2 items-center text-primary text-2xl font-semibold">Dolce <span className="text-secondary">Vita</span>
        <Smile />
        </Link>
          <Link href={'/'} className="hover:text-gray-700">Home</Link>
          <Link href={''} className="hover:text-gray-700">Menu</Link>
          <Link href={''} className="hover:text-gray-700">About</Link>
          <Link href={''} className="hover:text-gray-700">Contact</Link>
          
        </nav>
        
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'} className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full">Register</Link>
        </nav>
      </header>
    );
} 