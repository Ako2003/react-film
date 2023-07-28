import App from "./App";
import React from "react";
import MovieCard from "./MovieList";
import MoviePage from "./MoviePage"
import ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const element = document.getElementById('root');

const root = ReactDOM.createRoot(element);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/movie/:id" element={<MoviePage />} />
         </Routes>
    </BrowserRouter>
)