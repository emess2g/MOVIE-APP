import React from 'react'
import { FaVideo } from 'react-icons/fa'

const Header = () => {
  return (
    <div>
        <div className="">
            <div className="flex justify-center items-center gap-2">
               <FaVideo />
               <h2 className='uppercase'>the movie central</h2>
            </div>
        </div>
    </div>
  )
}

export default Header