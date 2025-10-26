import { Component } from "react";
import { movies } from "./moviesdata";

import "./index.css";
import { MovieCard } from "./moviecard";
export class MovieList extends Component {
    render() {
//    const{title,plot,price,rating,fav,stars,inCart}=this.state.movies;
   const{movies,addStars,decStars,fevarouite,cart}=this.props;
    return (
     
      <>
      {movies.map((movie)=><MovieCard movies={movie} addStars={addStars} decStars={decStars} fevarouite={fevarouite} cart={cart} />)}
     



       
{/* 1 way
<MovieCard movies={this.state}/> 
2nd way
 <MovieCard title={title}
 plot={plot}
 price={price}
 rating={rating}
 fav={fav}
 stars={stars}
 inCart={inCart}/> */}
    
     </>
    )
  }
}


