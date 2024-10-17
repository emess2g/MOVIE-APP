import React from 'react'
// import { DISCOVER_API_URL } from './config';
import {useState, useEffect} from 'react'
import {img_300, unavailable} from '../components/config'
import Pagination from '../components/Pagination';
import { FaFire } from 'react-icons/fa';
import dayjs from 'dayjs'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Discoveries = () => {
    const [state, setState] = useState([]);
    const [index, setIndex] = useState([])
    const [page, setPage] = useState(1)
    
    const fetchTrend = async () => {
      const data = await fetch(DISCOVER_API_URL);
      const responseData = await data.json();
  
      setState(responseData.results);
    }

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      className: "",
      arrows: false
    };
  
  
    useEffect(() => {
      fetchTrend()
    }, [page])

  return (
    <div>
      <div className="pt-[rem] m-2  flex flex-col justify-center">
            <div className="flex flex-col justify-center items-start border-black">
              <div className="flex p-2 mb-4 items-center gap-2 text-cente  " >
              <h2>Discoveries</h2>
              </div>
            </div>
            
            <div className="slider-container">
            <Slider {...settings} className="">
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
                <div key={id} className="  ">
                     <div className="w-[%] m-2">
                     <img className='rounded-md' src={  poster_path ? `${img_300}/${poster_path}` : unavailable } alt={title} />
                     <div className="absolute  bottom-0 flex flex-col  gap- text-center p-4 ">
                      {/* <h5 className='text-center text-[14px] bg-white-700 '>{title || name}</h5> */}
                        {/* <p>{media_type === "tv" ? "TV" : "Movie"}</p> */}
                        {/* <div>{dayjs(first_air_date).format("MMM D, YYYY") || dayjs(release_date).format("MMM D, YYY")}</div> */}
                      </div>
                     </div>
               
                                           
                </div>
              )
            })}
            {/* <Pagination page={page}  setPage={setPage}/> */}
           </Slider>
            </div>
           </div>
    </div>
  )
}

export default Discoveries
