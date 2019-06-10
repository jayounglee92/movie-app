import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './movie';


// map을 이용할 때는 index 가 필수
class App extends Component {

  // Render Flow : componentWillMount() => render() => componentDidMount()
  // Update Flow : componentWillReceiveProps() => shouldComponentUpdate() old props과 new props가 다르면 true 반환함 => render() => compoenentDidMount()

  // state = {
  //   greeting: 'Hello!',
  //   movies: [
  //     {
  //       title: "알라딘",
  //       poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81478/81478_185.jpg"
  //     },
  //     {
  //       title: "기생충",
  //       poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81774/81774_185.jpg"
  //     },
  //     {
  //       title: "액스맨-다크 피닉스",
  //       poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81218/81218_185.jpg"
  //     },
  //     {
  //       title: "로켓맨",
  //       poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81847/81847_185.jpg"
  //     },
  //     {
  //       title: '라라랜드',
  //       poster: 'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png'
  //     }
  //   ]
  // }

  componentWillMount(){
    console.log('will mount');
  }

  state = {

  }

  componentDidMount(){
    console.log('did mount');
    
    setTimeout(() => {
      this.setState({
        movies: [
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
          },
          {
            title: '라라랜드',
            poster: 'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png'
          }
        ]     
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {      
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render(){
    console.log("did render");

    return (
      <div className="App">       
        {this.state.movies ?  this._renderMovies() : 'Loading'}  
      </div>
    );
  }
  
}

export default App;
