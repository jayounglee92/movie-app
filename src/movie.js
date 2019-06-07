import React from 'react';
import './movie.css';

function Movie() {
    return (
        <div>
            <MoviePoster/>
            <h1>Hello this is a movie</h1>
        </div>
    );
}

function MoviePoster() {
    return (
        <img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81847/81847_1000.jpg"/>
    );
}

export default Movie;