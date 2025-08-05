import React from 'react'

const Card = () => {
  return (
    <div id='card' className='h-full w-[50%] flex flex-col items-center ml-5 mt-5'>
        <div className='h-[60%] w-full rounded-[20%] overflow-hidden '>
            <img src="https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXN8ZW58MHx8MHx8fDA%3D" alt="" className='h-full w-full object-cover' />
        </div>
        <span className='font-semibold text-nowrap text-md'>Aparment in Gwalior</span>
        <span className='font-semibold text-nowrap text-sm text-zinc-500'>$4000 for month. *4.5</span>
    </div>
  )
}

export default Card
