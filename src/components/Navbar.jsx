import React from "react";
import { FaFire , FaFilm, FaTv, FaSearch, FaPortrait} from 'react-icons/fa'
import { MdAccountCircle } from "react-icons/md";
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  const data = [
    {
        id:1,
      icon: '',
      name: "Home",
      link: '/'
    },
    {
      id:2,
      icon: <FaFilm />,
      name: "Movies",
      link: '/movies'
    },
    {
      id:3,
      icon: <FaTv />,
      name: "TV Series",
      link: '/tv'
    },
  ];
  return (
    <div className=" bg-[whitesmoke]  fixed z-10 top-0 w-full">
      <div className=" mx-8 flex justify-between p-6 items-center text-[20px]">  
           <div className="">
            <h1>emessVid</h1>
           </div>
          <div className="flex  gap-6  justify-center w-[%] ">
            {
                data.map((Val) => (
                    <NavLink to={Val.link} key={Val.id}>
                        <div className="flex  gap- text-[]  justify-between" >
                          <button  className="flex gap-2 items-center w-[]">
                            <p >{Val.icon}</p>             
                            <h5 className="">{Val.name}</h5>
                          </button>
                        </div>
                    </NavLink> 
                ))
            }

<div className="border text-[16px] rounded px-2 flex items-center gap-2 ">
            <FaSearch/>           
          <form action="">
            <input type="search " className="bg-inherit outline-none" placeholder="search movies" />
          </form>
        </div>
          </div>
        

        <div className="flex items-center gap-2">
        <MdAccountCircle/>
          <p>Account</p>
        </div>
        </div>
    </div>
  );
};
 
 
export default Navbar;
