import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-zinc-400 py-8 px-4 mt-auto'>
      <div className='max-w-6xl mx-auto flex flex-col justify-center gap-3 text-md'>
        <span className='cursor-pointer hover:underline hover:text-blue-900'>Support</span>
        <span className='cursor-pointer hover:underline hover:text-blue-900'>Add your Home to StayZ</span>
        <span className='cursor-pointer hover:underline hover:text-blue-900'>Help Centre</span>
        <span className='cursor-pointer hover:underline hover:text-blue-900'>About Us</span>
        <span className='cursor-pointer hover:underline hover:text-blue-900'>Contact Us</span>
      </div>
    </footer>
  )
}

export default Footer
