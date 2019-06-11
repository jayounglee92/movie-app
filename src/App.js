import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './movie';


// map을 이용할 때는 index 가 필수
class App extends Component {

  // Render Flow : componentWillMount() => render() => componentDidMount()
  // Update Flow : componentWillReceiveProps() => shouldComponentUpdate() old props과 new props가 다르면 true 반환함 => render() => compoenentDidMount()

  state = {}

  componentDidMount(){
    this._getMovies()
  
  }

   _getMovies = async () => {
    // await : 뒤 함수가 끝날 때 까지 기다림, async와 함께 써야함
    const movies = await this._callApi()
    // 위의 _callApi()가 완료 된 후에 실행됨
    this.setState({
      movies
    })
  }

  _callApi = () => {
    // fetch : xml http request 를 간단히 해 불러올 수 있음, 모던 자바스크립에서 가능
    /* 
      [ promise의 단계 ]
      1. fetch :  ajax로 url 을 불러옴
      2. then  :  불러온 것이 완료되면 실행됨
      3. catch : fetch에서 에러가 있다면 실행됨
     */
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies )
    .catch(err => console.log(err))
    // response 체크 후,  json으로 변환하고, 콘솔로 봄
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {  
      console.log(movie)    
      return <Movie 
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
        />
    })
    return movies
  }

  render(){
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>       
        {this.state.movies ?  this._renderMovies() : 'Loading'}  
      </div>
    );
  }
  
}

export default App;
