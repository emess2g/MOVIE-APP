// api keys
export const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
export const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

export const POPULAR_MOVIES_API_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
export const DISCOVER_API_URL = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US`;
export const POPULAR_TVS_API_URL = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US`;
export const TRENDING_API_URL = `${API_URL}trending/all/day?api_key=${API_KEY}&language=en-US`;

export const SEARCH_API_URL = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&page=1`;


//image sizes for tmdb
export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_500 = "https://image.tmdb.org/t/p/w500";

// contentModal and singleContent
export const unavailable =
  "https://www.movienewz.com/img/films/poster-holder.jpg";

// contentModal
export const unavailableLandscape =
  "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg";

// For Carousel
export const noPicture =
  "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";