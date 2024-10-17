import React, { useContext } from 'react'
import {useState, useEffect} from 'react'
import {img_300, unavailable} from '../components/config'
import Pagination from '../components/Pagination';
import { FaFire } from 'react-icons/fa';
import dayjs from 'dayjs'
import Modal from './Modal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from './context';
const Trending = () => {
    const {trending} = useContext(AppContext)

    const [show, setsShow] = useState(false);

    const showModal = () => {
        setsShow(!true);
    }
    
 
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      className: "",
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  
    };
  
  

  return (
    <div>
       <div className="pt-[rem]  mx-2 flex flex-col justify-center">
            <div className="flex flex-col justify-center items-start border-black">
              <div className="flex p-2 mb-4 items-center gap-2 text-cente  " >
                <FaFire />
              <h2>Trending Movies of the Week</h2>
                <FaFire />
              </div>
            </div>

            <div className="slider-container">
            <Slider {...settings} className=":grid-cols- gap-  justify-between">
            {trending.map((trends) => {
              const {
                name,
                title,
                site,
                poster_path,
                first_air_date,
                release_date,
                media_type,
                id,
              } = trends;

              return (
                <div key={id} className="relativ fle flex-co  justify-between p-2  text items-cent     runded-md text-white">
                     <div className=" flex flex-col gap-1 w-[%]">
                     <div className="">
                     <img className='rounded-md' src={  poster_path ? `${img_300}/${poster_path}` : unavailable } alt={title} />
                     </div>
                     <div className="   flex flex-col  gap- text-center p-4 ">
                      <h5 className='text-center text-[12px] bg-white-700 '>{title || name}</h5>
                        {/* <p>{media_type === "tv" ? "TV" : "Movie"}</p> */}
                         {site}
                        {/* <p>{media_type}</p> */}
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

export default Trending
