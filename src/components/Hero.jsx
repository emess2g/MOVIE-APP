import React, {useState, useEffect, useContext} from 'react'

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { VIDEOS_API_URL } from './config';
import dayjs from 'dayjs'
import {img_500, unavailable} from '../components/config'

import { Carousel } from 'react-responsive-3d-carousel'
import { AppContext } from './context'



const Hero = () => {
    const {data} = useContext(AppContext)
    const [state, SetState] = useState([]);
    const [page, setPage] = useState(1)
    
    const fetchTrend = async () => {
      const data = await fetch(VIDEOS_API_URL);
      const responseData = await data.json();
  
      SetState(responseData.results);
    }
  
    useEffect(() => {
      fetchTrend()
    }, [page])


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
    const carouselContainer = {
         width : '',
         border : '2px solid black'

    }  


  return (
    <div className=' mx-2 pt-[6rem]'>  
          <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}

      >
           {data.map((d) => {
              const {
                name,
                title,
                poster_path,
                first_air_date,
                release_date,
                media_type,
                id,
                video
              } = d;
              return (
                <div key={id} className=" bg-[white]"                 
                >
                     <div className=" flex flex-col gap-2 items-center  ">
                        <img className='' src={  poster_path ? `${img_500}/${poster_path}` : unavailable } alt={title} />
                     <div className="   flex flex-col  gap- text-center pt-2 ">
                      <h1 className='text-center text-[px] bg-white-700 '>{title || name}</h1>
                        <p>{media_type === "tv" ? "TV" : "Movie"}</p>
                        {video}
                       {/*  <div>{dayjs(first_air_date).format("MMM D, YYYY") || dayjs(release_date).format("MMM D, YYY")}</div> */}
                      </div>
                     </div>
               
                                           
                </div>
              )
            })}
      </Carousel>
    </div>
  )
}

export default Hero
