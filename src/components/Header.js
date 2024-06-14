import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
function Header(){
    const [toggle,settoggle]=useState(false)
return(
    <header className="flex justify-between px-5 py-2 bg-primary">
        <a  className="font-bold text-black" href="#">Nabeela</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
      { toggle && <nav className="block md:hidden ">
        <ul onClick={() => settoggle(!toggle)} className="flex flex-col text-white mobile-nav ">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=>settoggle(!toggle)} className="block md:hidden"><Bars3Icon className='text-white h-5'/></button>
        </header>
)
}
export default Header