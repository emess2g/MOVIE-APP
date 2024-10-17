import React from "react";
import { FaFire, FaFilm, FaTv, FaSearch, FaPortrait } from "react-icons/fa";
import { MdAccountCircle, MdBookmark, MdBookmarkAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const data = [
 
    {
      id: 2,
      name: "Movies",
      link: "/movies",
    },
    {
      id: 3,
      name: "TV Series",
      link: "/tv",
    },
  ];
  return (
    <div className=" bg-[inherit] text-[#F5F5F7] text-[18px] shadow-xl  fixed z-10 top-0 w-full">
      <div className=" mx-2 flex justify-between py-4 px-4 items-center text-[20px]">
        <div className="">
          <h1>emessVid</h1>
        </div>
        <div className="flex  gap-6  justify-center w-[70%] ">
          {data.map((Val) => (
            <NavLink to={Val.link} key={Val.id}>
              <div className="flex  gap- text-[]  justify-between">
                <button className="flex gap-2 items-center w-[]">
                  <p>{Val.icon}</p>
                  <h5 className="">{Val.name}</h5>
                </button>
              </div>
            </NavLink>
          ))}

          <div className="border text-[16px] w-[60%] rounded px-2 flex justify-between items-center gap-2 ">         
            <form action="">
              <input
                type="search "
                className="bg-inherit outline-none "
                placeholder="search movies"
              />
            </form>
            <FaSearch />
          </div>
        </div>

        <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <MdBookmarkAdd/>
          <p>WatchList</p>
        </div>

        <div className="flex items-center gap-1">
          <MdAccountCircle />
          <p>Sign In</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
