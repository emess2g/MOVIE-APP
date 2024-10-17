import React, { createContext, useContext, useEffect, useState } from "react";
import { apiKey } from "./key";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
 const [data, setData] = useState([]);
 const [videos, setVideos] = useState([]);
 const [movies, setMovies] = useState([]);
 const [trending, setTrending] = useState([]);

 const apiUrl = 'https://api.themoviedb.org/3';

 const fetchData = async () => {
  try {
   const response = await fetch(`${apiUrl}/trending/all/day?api_key=${apiKey}`);
   if (!response.ok) throw new Error('Failed to fetch trending data');
   const responseData = await response.json();
   console.log(responseData);
   setData(responseData.results); // Ensure you extract the correct property
  } catch (error) {
   console.error("Error fetching trending data:", error);
  }
 };

 const fetchMovies = async () => {
  try {
   const movieResponse = await fetch(`${apiUrl}/movie/upcoming?api_key=${apiKey}`);
   if (!movieResponse.ok) throw new Error('Failed to fetch movies');
   const movieData = await movieResponse.json();
  //  console.log(movieData);
   setMovies(movieData.results); // Ensure you extract the correct property
  } catch (error) {
   console.error("Error fetching movies:", error);
  }
 };
 
 const fetchTrending = async () => {
   try {  const trendingRes = await fetch(`${apiUrl}/trending/all/day?api_key=${apiKey}`)
  if (!trendingRes.ok) throw new Error('Failed to fetch trending data');
  const trendingData = await trendingRes.json();
 //  console.log(movieData);
  setTrending(trendingData.results); // Ensure you extract the correct property
 } catch (error) {
  console.error("Error fetching movies:", error);
 }

 }
 

 const fetchVideo = async (movie_id, id) => {
  try {
   const ytVideo = await fetch(`${apiUrl}/movie/550/videos?api_key=${apiKey}`);
   if (!ytVideo.ok) throw new Error('Failed to fetch video');
   const YTvideo = await ytVideo.json();
   console.log(YTvideo);
   setVideos(YTvideo.results); // Set the videos array
  } catch (error) {
   console.error("Error fetching video:", error);
  }
 };

//  const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${apiKey}`)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

 useEffect(() => {
  fetchData();
  fetchMovies();
  fetchVideo()
  fetchTrending()
  // You may need to call fetchVideo with appropriate parameters
  // For example, you might want to call it conditionally based on data
 }, []);

 console.log(videos);
 
 return (
  <AppContext.Provider value={{ videos, data, movies, trending }}>
   {children}
  </AppContext.Provider>
 );
};

export default AppProvider ;
