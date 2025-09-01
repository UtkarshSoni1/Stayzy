import Sections from './Sections'
import Footer from './Footer'
import { useState } from 'react'


const MarketPlace = () => {
  let [location, setLocation] = useState('');
  return (
    <div className='h-[100dvh] w-full '>
      {/* {setLocation("Indramani nagar")} */}
      <Sections Location="Indramani Nagar"/>
      {/* {setLocation("pragati vihar")} */}
      <Sections Location="Pragati Vihar"/>
      {/* {setLocation("purushottam colony")} */}
      <Sections Location="Purushottam Vihar"/>
      {/* {setLocation("Krishna nagar")} */}
      <Sections Location="Krishna Nagar"/>
      <Footer />
    </div>
  )
}

export default MarketPlace
