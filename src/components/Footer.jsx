import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-zinc-400 py-8 px-4 mt-auto'>
      <div className='max-w-6xl mx-auto flex flex-col justify-center gap-5 text-xl'>
        <span className='hover:text-gray-700 cursor-pointer'>Support</span>
        <span className='hover:text-gray-700 cursor-pointer'>Help Centre</span>
        <span className='hover:text-gray-700 cursor-pointer'>About Us</span>
        <span className='hover:text-gray-700 cursor-pointer'>Contact Us</span>
      </div>
    </footer>
  )
}

export default Footer
