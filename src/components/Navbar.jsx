import React, { useRef } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const NavbarRef = useRef();
  
  window.addEventListener('wheel',(dets) => {
    console.log(dets.deltaY);
    if(dets.deltaY < 0){
      gsap.to(NavbarRef.current,{
        y:"0%",
        // delay: 0.5,
        duration: 1,
        ease: "power3.out"
      })
    }
    else{
      gsap.to(NavbarRef.current, {
      y: "100%",
      // duration: 0.5,
      ease: "power3.out"
    });
    }
  })

  return (
    <div
      ref={NavbarRef}
      className='h-16 w-full flex items-center bg-white fixed bottom-0 border-t-[1px] border-zinc-400'
    >
      <div className='h-full w-1/3 flex flex-col items-center py-2 text-zinc-500 hover:text-red-400'>
      <Link to='/'>
        <IoIosSearch className='text-3xl' />
        <span className='text-whi'>Explore</span>
      </Link>
      </div>
      <div className='h-full w-1/3 flex flex-col items-center py-2 text-zinc-500 hover:text-red-400'>
      <Link to='/wishlist'>
        <FaRegHeart className='text-3xl' />
        <span className='text-whi'>Wishlist</span>
      </Link>
      </div>
      <div className='h-full w-1/3 flex flex-col items-center py-2 text-zinc-500 hover:text-red-400'>
      <Link to='/login'>
        <FaRegCircleUser className='text-3xl' />
        <span className='text-whi'>Log in</span>
      </Link>
      </div>
    </div>
  );
}

export default Navbar;
