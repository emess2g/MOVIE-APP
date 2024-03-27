import React, {useState, useEffect} from 'react'
import {img_300, unavailable} from '../components/config'
import Pagination from '../components/Pagination';
import { FaFire } from 'react-icons/fa';
import dayjs from 'dayjs'

const Trending = () => {
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
    <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center border-black">
              <div className="flex text-center" >
                <FaFire />
              <h2>Trending Today</h2>
                <FaFire />
              </div>
            </div>
            <div className="grid grid-cols-4 justify-center">
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
              return (
                <div key={id} className="flex flex-col items-center  bg-[red] m-2 p-2 rounded-md text-white">

                    <img className='w-[80%]' src={  poster_path ? `${img_300}/${poster_path}` : unavailable } alt={title} />

                      <h5 className='text-center '>{title || name}</h5>
                      <div className=" flex  gap-2 text-center">
                        <div>{media_type === "tv" ? "TV" : "Movie"}</div>
                        <div>{dayjs(first_air_date).format("MMM D, YYYY") || dayjs(release_date).format("MMM D, YYY")}</div>
                      </div>
                 
                        
                </div>
              )
            })}
            <Pagination page={page}  setPage={setPage}/>
           </div>
           </div>
    </>
  )
}

export default Trending