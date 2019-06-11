import React from 'react';
import PropTypes from 'prop-types';
import './movie.css';
import { symbols } from 'ansi-colors';
import LinesEllipsis from 'react-lines-ellipsis'


function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
            <MoviePoster poster={poster} alt={title}/>
            </div>  
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Moive__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />    
                </p>
            </div>
        </div>
    );
}


function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    );
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Gerne">{genre} </span>
    );
}


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.shape.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;


/*
    [ Functional Component VS Class Component ]

    1. Class Component
        - componentDidMount, getDerivedStateFromProps등의 React Component의 라이프사이클을 정의해서 사용
        
    2.  Functional Component
        - 라이프사이클은 사용할 수 없으며 온전히 render함수만 정의
        - Class Component에 비해 성능이 좋고 가독성, 테스트가 용이
        - 말그대로 함수형 컴포넌트이기에 함수형 프로그래밍의 장점을 활용
        - React 16.8 버전부터 Functional Component에서 state와 라이프사이클을 사용할 수 있는 Hook이라는 개념이 등장
        - Hook은 state와 componentDidMount, componentDidUpdate, componentWillMount 세 가지 라이프사이클만 구현

    - https://boxfoxs.tistory.com/395
    - https://medium.com/@minoo/react-stateless-functional-components-%EC%9A%B0%EB%A6%AC%EA%B0%80-%EA%B0%84%EA%B3%BC%ED%95%98%EA%B3%A0-%EC%9E%88%EB%8A%94-9%EA%B0%80%EC%A7%80-ecef2ef73d79
*/ 

// 1. Class Component 
/*
class MoviePoster extends Component {
    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render(){
        return (
            <img src={this.props.poster} alt="Movie Poster"/>
        );
    }
     
}
*/
// 2. Functional Component : 위와 같이 출력됨, tate/redner/life cycle없음, 온리 props, 단순 return