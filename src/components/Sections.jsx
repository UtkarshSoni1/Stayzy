import React from 'react'
import Card from './Card'

const Sections = () => {
  return (
    <div id='sec1' className='h-[36%] w-full overflow-clip overflow-y-hidden px-2 py-2'>
        <span className='text-2xl font-bold ml-3'>
            Popular in Indramani Nagar
            <a href=""> - </a>            
        </span>
        <div className='h-full w-full py-2 flex items-center overflow-y-hidden'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Sections
