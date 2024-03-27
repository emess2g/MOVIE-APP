import React from "react";
import { FaFire , FaFilm, FaTv, FaSearch} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'


const Footer = () => {
  const data = [
    {
        id:1,
      icon: <FaFire />,
      name: "Trending",
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
    {
      id:4,
      icon: <FaSearch />,
      name: "Search",
      link: '/search'
    },
  ];
  return (
    <>
      <div className="flex ">  
          <div className="flex  gap-2  justify-center w-[100%] bg-[black]">
            {
                data.map((Val) => (
                    <NavLink to={Val.link}>
                        <div className="flex text-[white]  justify-between" key={Val.id}>
                          <button  className="flex flex-col items-center w-[100%]">
                            <p >{Val.icon}</p>             
                            <h5 className="">{Val.name}</h5>
                          </button>
                        </div>
                    </NavLink> 
                ))
            }
          </div>
        </div>
    </>
  );
};
 
 
export default Footer;
