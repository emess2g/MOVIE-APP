import React, {createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext();

 const Context = ({children, media_type, id}) => {
    const [data, setData] = useState([]);
    const [video, setVideo] = useState([]);

    // const baseImgUrl = 'https://api.themoviedb.org/3';

    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

    const fetchData = async () => {
        const response = await fetch(` ${apiUrl}/trending/all/day?api_key=${apiKey}`);
  
        const responseData = await response.json();
        console.log(responseData);
        setData(responseData.adult);
    }

    const fetchVideo = async () => {
        const ytVideo = await fetch(`${apiUrl}/${media_type}/${id}/videos?api_key=${apiKey}`);
        const YTvideo = await ytVideo.json();
        console.log(YTvideo);
        setVideo(YTvideo.results[0]);
    }

    useEffect(() => {
        fetchData();
        fetchVideo();
    }, [])
    
    console.log(video);
    return (
      <AppContext.Provider value={{ video }}>
        {children}
      </AppContext.Provider>
    )

}  

export {AppContext, Context} ;