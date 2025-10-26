import React from "react";
import { MovieList } from "./MovieList";
import  Navbar  from "./Navbar";
import HeadingOne from "./HeadingOne";
import { HeadingTwo } from "./HeadingTwo";
import { movies } from "./moviesdata";
class App extends React.Component{
     constructor(){
      super();
      this.state={
          movies:movies,
          cartCount:0
       
  
      }
      //this.addStars=this.addStars.bind(this);
      
    }

  handleIncStar=(movie)=>{
          const{movies}=this.state;
          const mid=movies.indexOf(movie);
          if(movies[mid].stars>=5)
     { 
      return;
     }
          movies[mid].stars+=0.5;
          this.setState({
              movies:movies
          });
  
  
      }
      handleDecStar=(movie)=>{
        const{movies}=this.state;
        const mid=movies.indexOf(movie);
        if(movies[mid].stars<=0)
        {
          return;
        }
        movies[mid].stars-=0.5;
        this.setState({
          movies:movies
        })
  
      }
      handelFev=(movie)=>{
        const{movies}=this.state;
        const mid=movies.indexOf(movie);
        
       
        movies[mid].fav=!movies[mid].fav;
        this.setState(
  
         movies
        )
      }
        cartHandel=(movie)=>{
        let {movies,cartCount}=this.state;
        const mid=movies.indexOf(movie);
     movies[mid].inCart=!movies[mid].inCart;
     if(movies[mid].inCart){
      cartCount=cartCount+1;
     }else{
      cartCount-=1;
     }
         
        this.setState({
  
         movies,cartCount}
        )
        console.log(cartCount);
          
         
        
      
      }
  
  

  render(){
    const{movies,cartCount}=this.state;
    return(
      <>
      <Navbar cartCount={cartCount}/>
    <MovieList movies={movies}
    addStars={this.handleIncStar} decStars={this.handleDecStar} fevarouite={this.handelFev} cart={this.cartHandel}  key={movies.id}
    />
    
      </>

    )
  }
}

// // functional component
// function App() {
//   return (
//     <>
//     {/* <HeadingOne/>
//     <HeadingTwo/> */}
   
//     <Navbar/>
//     <MovieList/>
//     </>
//   ); 
// }


export default App;
