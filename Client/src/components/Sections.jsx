import React, { useState } from 'react'
import Card from './Card'

const Sections = (props) => {
  // const [location, setLocation] = useState('');
  return (
    <div id='sec1' className='h-[36%] w-full overflow-clip overflow-y-hidden px-2 py-2'>
        <span className='text-xl font-bold ml-3'>
            Popular in {props.Location}
        </span>
        <a href="" className='text-xl font-bold ml-3'> - </a>            
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
