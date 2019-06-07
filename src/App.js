import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';

const movieTitles = [
  "알라딘",
  "기생충",
  "액스맨-다크 피닉스",
  "로켓맨"
]

const movieImages = [
  "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81478/81478_185.jpg",
  "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81774/81774_185.jpg",
  "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81218/81218_185.jpg",
  "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81847/81847_185.jpg"
]

const movies = [
  {
    title: "알라딘",
    poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81478/81478_185.jpg"
  },
  {
    title: "기생충",
    poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81774/81774_185.jpg"
  },
  {
    title: "액스맨-다크 피닉스",
    poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81218/81218_185.jpg"
  },
  {
    title: "로켓맨",
    poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81847/81847_185.jpg"
  }
]

function App() {
  return (
    <div className="App">
      {movies.map((movie, index) => {      
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })}
    </div>
  );
}

export default App;
