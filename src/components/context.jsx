import React, {createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext();

 const Context = ({children, media_type, id}) => {
    const [data, setData] = useState([]);
    const [video, setVideo] = useState([]);
    const [movies, setMovies] = useState([]);

    // const baseImgUrl = 'https://api.themoviedb.org/3';

    const fetchData = async () => {
        const response = await fetch(` ${apiUrl}/trending/all/day?api_key=${apiKey}`);
  
        const responseData = await response.json();
        console.log(responseData);
        setData(responseData.adult);
    }

    const fetchMovies = async () => {
      const movieResponse = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}`);

      const movieData = await movieResponse.json();
      console.log(movieData);
      setMovies(movieData)
    }

    // const fetchVideo = async () => {
    //     const ytVideo = await fetch(`${apiUrl}/${media_type}/${id}/videos?api_key=${apiKey}`);
    //     const YTvideo = await ytVideo.json();
    //     console.log(YTvideo);
    //     setVideo(YTvideo.results[0]);
    // }

    useEffect(() => {
        fetchData();
        fetchMovies();
        // fetchVideo();
    }, [])
    
    console.log(video);
    return (
      <AppContext.Provider value={{ video }}>
        {children}
      </AppContext.Provider>
    )

}  

export {AppContext, Context} ;