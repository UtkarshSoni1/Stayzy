import React, { useRef } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const NavbarRef = useRef();

  // const hideNavbar = () => {
  //   useGSAP(() => {
  //   gsap.from(NavbarRef.current, {
  //     y: "100%", // animate from off-screen bottom
  //     delay: 0.5,
  //     duration: 1,
  //     ease: "power3.out"
  //   });
  // }, []);
  // }
  
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

  // useGSAP(() => {
  //   gsap.from(NavbarRef.current, {
  //     y: "100%", // animate from off-screen bottom
  //     delay: 0.5,
  //     duration: 1,
  //     ease: "power3.out"
  //   });
  // }, []); // empty dependency to run only on mount

  return (
    <div
      ref={NavbarRef}
      className='h-16 w-full flex items-center bg-white fixed bottom-0 border-t-[1px] border-zinc-400'
    >
      <div className='h-full w-1/3 flex flex-col items-center py-2 text-zinc-500 hover:text-red-400'>
        <IoIosSearch className='text-3xl' />
        <span className='text-whi'>Explore</span>
      </div>
      <div className='h-full w-1/3 flex flex-col items-center py-2 text-zinc-500 hover:text-red-400'>
        <FaRegHeart className='text-3xl' />
        <span className='text-whi'>Wishlist</span>
      </div>
      <div className='h-full w-1/3 flex flex-col items-center py-2 text-zinc-500 hover:text-red-400'>
        <FaRegCircleUser className='text-3xl' />
        <span className='text-whi'>Log in</span>
      </div>
    </div>
  );
}

export default Navbar;
