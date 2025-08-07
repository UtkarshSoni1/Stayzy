import React from 'react'

const Header = () => {
  return (
    <header className='h-34 w-full flex flex-col justify-center shadow-md shadow-black/20'>
      <nav className='h-16 w-full flex items-center justify-center'>
        <input type="search" name="search" id="new" className='h-4/5 w-[90%] bg-white rounded-4xl shadow-black/30 shadow-md text-xl font-semibold text-center' placeholder='Start your Search' />
      </nav>
      <div id="nav2" className='h-18 w-full flex items-center justify-start gap-5 px-5'>
        <div className='h-full w-1/3 flex flex-col items-center justify-start hover:border-b-2'>
          <img src="https://imgs.search.brave.com/4ZeCQ0-TgfXKI3km3VJ2812HFlI2WXVTS6ZIyELXyzE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTkv/MDQxLzU1NC9zbWFs/bC9hLXNtYWxsLWJs/dWUtaG91c2Utd2l0/aC1hLWJyb3duLXJv/b2YtZnJlZS1wbmcu/cG5n" alt="" className='h-[70%] w-2/3 object-contain mt-[-2px]'/>
          <span className='text-md font-semibold tracking-tight hover'>Homes</span>
        </div>
        <div className='h-full w-1/3 flex flex-col items-center justify-start hover:border-b-2'>
          <img src="https://imgs.search.brave.com/J-LjnhKpuGVhLU-oBRc0Z3OmRaEKKgXNwwrsP5wJcSo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTkv/NjAzLzA2OS9zbWFs/bC9jb2xvcmZ1bC1o/b3QtYWlyLWJhbGxv/b24tdG95LWlzb2xh/dGVkLWFnYWluc3Qt/YmxhY2stY3V0LW91/dC10cmFuc3BhcmVu/dC1wbmcucG5n" alt="" className='h-full w-1/2  object-contain zoom' />
          <span className='text-md font-semibold tracking-tight '>Experiences</span>
        </div>
        <div className='h-full w-1/3 flex flex-col items-center justify-center hover:border-b-2'>
          <img src="https://imgs.search.brave.com/lrE5ccUh_YSfJ3j8PRojiaS3dSBLmA_epCV9qz85CgE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLWNsaXBhcnQv/MjAyMjEwMTIvb3Vy/bWlkL3BuZ3RyZWUt/M2QtY2xvY2hlLWZv/b2QtY292ZXItcG5n/LWltYWdlXzYzMDkz/MTUucG5n" alt="" className='h-[70%] w-2/3  object-contain' />
          <span className='text-md font-semibold tracking-tight'>Services</span>

        </div>
        
      </div>
    </header>
  )
}

export default Header
