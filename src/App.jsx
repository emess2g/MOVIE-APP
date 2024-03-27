import React from "react";
import Header from './components/Header.jsx';
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./Pages/Trending.jsx";
import Movies from "./Pages/Movies.jsx";
import TV from "./Pages/TV.jsx";
import Search from "./Pages/Search.jsx";
import SingleMovie from "./Pages/SingleMovie.jsx";
import Error from "./Pages/Error.jsx";
const App = () => {
  return (
    <div className="bg-[#111111]">
      <BrowserRouter >
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Trending />} exact />
     // Home page is denoted with ‘/’ symbol
          <Route path="/movies" element={<Movies /> } />// movies page
          <Route path="/tv" element={<TV />} /> // TV Series Page
          <Route path="/search" element={<Search />} /> 
     // Custom Search Page
          <Route path="/error" element={<Error />} /> // Error Page
        </Routes>
      </BrowserRouter>
    </div>
  );
};
 
 
export default App;
