import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movie(props) {

    // To check type of props
    let propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }
    return (        
        <div>
            <MoviePoster poster={props.poster}/>
            <h1>{props.title}</h1>
        </div>
    );
}

function MoviePoster(props) {
    // To check type of props
    let propTypes = {
        poster: PropTypes.string.isRequired
    }
    return (
        <img src={props.poster} alt="Movie Poster"/>
    ); 
}

export default Movie;