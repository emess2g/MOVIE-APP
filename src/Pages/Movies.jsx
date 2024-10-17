import React from 'react'
// import { POPULAR_MOVIES_API_URL } from '../components/config';
import {useState, useEffect} from 'react'
import {img_300, unavailable} from '../components/config'
// import Pagination from '../components/Pagination';
import { FaFire } from 'react-icons/fa';
import dayjs from 'dayjs'

const Movies = () => {
  const [state, setState] = useState([]);
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1)
  
  const fetchTrend = async () => {
    const data = await fetch(POPULAR_MOVIES_API_URL);
    const responseData = await data.json();

    setState(responseData.results);
  }

  const handleSearch = (value) => {
    const input = state.filter((search) => {
       return value && search && search.title && search.title.toLowerCase().includes(value);
     });
     console.log(results);
     setState(input)
 
   }

   const handleChange = (value) => {
    setInput(value);
    handleSearch(value)
  };


  const handleDelete = ( id )=> {
    const movies = state.filter(m => m._id !== id._id);
    setState(movies)
    console.log(id)
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
              <p>All Genres</p>
              <input type="search"
               placeholder='search' 
               value={input}
               onChange={(e) => handleChange(e.target.value)}
               />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4  justify-between">
            { state.map((val) => {
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
                <div key={id} className="relative fle flex-co  justify-between p-2  text items-cent     runded-md text-">
                     <div className="w-[%]">
                     <img className='rounded-md' src={  poster_path ? `${img_300}/${poster_path}` : unavailable } alt={title} />
                     <div className="absolute  bottom-0 flex flex-col  gap- text-center p-4 ">
                      <h5 className='text-center text-[14px] bg-white-700 '>{title || name}</h5>
                        {/* <p>{media_type === "tv" ? "TV" : "Movie"}</p> */}
                        {/* <div>{dayjs(first_air_date).format("MMM D, YYYY") || dayjs(release_date).format("MMM D, YYY")}</div> */}
                        <button onClick={() => handleDelete(id)}>Delete</button>
                      </div>
                     
                     </div>
               
                                           
                </div>
              )
            }) }
           </div>
           {/* <Pagination/> */}
           </div>
    </div>
  )
}

export default Movies