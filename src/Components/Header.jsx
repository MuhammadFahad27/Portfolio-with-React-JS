import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <nav className="flex w-full bg-zinc-900 h-18 z-10 fixed text-white justify-between
    items-center px-6 ">
        <div className="flex gap-5">
            <GiHamburgerMenu  className="md:invisible text-2xl "/>
            <h1 className="text-xl xl:text-3xl">Muhammad Fahad </h1>
        </div>
      
        <div className="hidden lg:flex md:gap-4 lg:gap-7 lg:mr-20 text-lg"> 
            <a href="" className="font-semibold duration-300 hover:border-b-2 text-purple-400">Education</a>
            <a href="" className="font-semibold duration-300 hover:border-b-2 text-purple-400">About Me</a>
            <a href="" className="font-semibold duration-300 hover:border-b-2 text-purple-400">Home</a>
            <a href="" className="font-semibold duration-300 hover:border-b-2 text-purple-400">Testomonila</a>
            <a href="" className="font-semibold duration-300 hover:border-b-2 text-purple-400">Service</a>
        </div>
        <div className="flex items-center gap-2  ">
            <button
            className="bg-white text-black px-4  hover:bg-transparent hover:text-white
            border-1 duration-500">
            <a href="mailto:muhammadfahadkamboh3@gamil.com">Email</a></button>
            <MdDarkMode className="text-2xl
            cursor-pointer"/>
        </div>
    </nav>
  )
}

export default Header