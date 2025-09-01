import React from 'react'
import { Link, Route } from 'react-router-dom'

const Card = () => {
  return (
  
    <div id='card' className='h-full w-[50%] flex flex-col items-center ml-3'  >
      {/* <div> */}

        <div className='h-[60%] w-full rounded-[20%] overflow-hidden bg-zinc-400'>
            <Link to={'/User/stay'} className='h-[60%] w-full rounded-[20%] overflow-hidden bg-zinc-400'>
            <img src="https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXN8ZW58MHx8MHx8fDA%3D" alt="" className='h-full w-full object-cover z-0' />
            </Link>
        </div>
            <span className='text-nowrap text-xs font-semibold'>Aparment in Gwalior</span>
            <span className='font-semibold text-nowrap text-xs text-zinc-500 '>$4000 for month. *4.5</span>
      
      {/* </div> */}
      
    </div>
    
  )
}

export default Card
