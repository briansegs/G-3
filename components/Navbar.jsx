import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gradient__bg px-14 py-10">
        <div className="flex justify-start items-center">
            <Image src={logo} alt="logo" />

            <ul className="flex text-white font-manrope text-2xl gap-8 mx-8 items-center font-semibold">
                <Link href="/">
                    <li className="hover:text-gray-400">Home</li>
                </Link>
                <Link href="/about">
                    <li className="hover:text-gray-400">About</li>
                </Link>
                <Link href="/products">
                    <li className="hover:text-gray-400">Products</li>
                </Link>
                <Link href="/contact">
                    <li className="hover:text-gray-400">Contact</li>
                </Link>
            </ul>
        </div>

        <div className="flex text-white font-manrope font-semibold text-2xl items-center justify-center gap-2">
            <Link href='/signin'>
                <div className="px-3">
                    <p className="hover:text-gray-400">Sign In</p>
                </div>
            </Link>
            
            <Link href='/signup'>
                <button 
                type="button"
                className="bg-red-600 hover:bg-[#245d9b] px-3 py-2 rounded-lg"
                >
                    Sign up
                </button>
            </Link>
            
        </div>
    </nav>
  )
}

export default Navbar