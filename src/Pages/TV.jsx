import React from 'react'
// import { POPULAR_TVS_API_URL } from '../components/config';
import {useState, useEffect} from 'react'
import {img_300, unavailable} from '../components/config'
import Pagination from '../components/Pagination';
import { FaFire } from 'react-icons/fa';
import dayjs from 'dayjs'

const Movies = () => {
  const [state, SetState] = useState([]);
  const [page, setPage] = useState(1)
  
  const fetchTrend = async () => {
    const data = await fetch(POPULAR_TVS_API_URL);
    const responseData = await data.json();

    SetState(responseData.results);
  }

  useEffect(() => {
    fetchTrend()
  }, [page])

  return (
    <div>
       <div className="pt-[8rem]  mx-8 flex flex-col justify-center">
            <div className="flex flex-col justify-center items-start border-black">
              <div className="flex p-2 mb-4 items-center gap-2 text-cente  " >
              <h2>Movies</h2>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4  justify-between">
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
    </div>
  )
}

export default Movies