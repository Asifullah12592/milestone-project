import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center bgImag'>
        <div className='text-xl font-medium '>Asif</div>
        <ul className='gap-10 lg:gap16 hidden md:flex '>
          <li className='menuLink'><a href="#main">Home</a></li>
          <li className='menuLink'><a href="#about">About</a></li>
          <li className='menuLink'><a href="#projects">Projects</a></li>
          <li className='menuLink'><a href="#skills">Skills</a></li>
          <li className='menuLink'><a href="#contact">Contacts</a></li>

        </ul>
        <div className='md:hidden' onClick={toggleMenu}>
          {menu ? <AiOutlineClose size={30} /> :
            <AiOutlineMenu size={30} />
          }
        </div>
      </div>

      {menu && (
        <ul className='flex flex-col gap-4 mt-4 md:hidden'>
          <li className='menuLink'>
            <a href="#main" onClick={toggleMenu}>Home</a>
            </li>
            <li className='menuLink'>
            <a href="#About" onClick={toggleMenu}>About</a>
            </li>
            <li className='menuLink'>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li className='menuLink'>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
            </li>
            <li className='menuLink'>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
        </ul>
      )
      }
    </div>


  )
}

export default Navbar
