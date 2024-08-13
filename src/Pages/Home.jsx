import React, {useState, useEffect} from 'react'
import {img_300, unavailable} from '../components/config'
import Pagination from '../components/Pagination';
import { FaFire } from 'react-icons/fa';
import dayjs from 'dayjs'

const Home = () => {
  const [state, SetState] = useState([]);
  const [page, setPage] = useState(1)

  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  
  const fetchTrend = async () => {
    const data = await fetch(`
    ${apiUrl}/trending/all/day?api_key=${apiKey}&page=${page}`);
    const responseData = await data.json();

    SetState(responseData.results);
  }

  useEffect(() => {
    fetchTrend()
  }, [page])


  return (
    <>
    <div className="mt-[8rem]  mx-8 flex flex-col justify-center">
            <div className="flex flex-col justify-center items-start border-black">
              <div className="flex p-2 mb-4 items-center gap-2 text-cente  " >
                <FaFire />
              <h2>Trending Today</h2>
                <FaFire />
              </div>
            </div>
            <div className="grid grid-cols-8 gap-4  justify-between">
            {state.map((val) => {
              const {
                name,
                title,
                poster_path,
                first_air_date,
                release_date,
                media_type,
                id,
              } = val;
              console.log(state);
              return (
                <div key={id} className="relative fle flex-co  justify-between p-2  text items-cent     runded-md text-white">
                     <div className="w-[%]">
                     <img className='rounded-md' src={  poster_path ? `${img_300}/${poster_path}` : unavailable } alt={title} />
                     <div className="absolute  bottom-0 flex flex-col  gap- text-center p-4 ">
                      <h5 className='text-center text-[14px] bg-white-700 '>{title || name}</h5>
                        {/* <p>{media_type === "tv" ? "TV" : "Movie"}</p> */}
                        {/* <div>{dayjs(first_air_date).format("MMM D, YYYY") || dayjs(release_date).format("MMM D, YYY")}</div> */}
                      </div>
                     </div>
               
                                           
                </div>
              )
            })}
            {/* <Pagination page={page}  setPage={setPage}/> */}
           </div>
           </div>
    </>
  )
}

export default Home