import { Component } from "react";

import "./index.css";
export function MovieCard(props){
// export class MovieCard extends Component {
  
  
//   render() {
    const{title,price,plot,rating,stars,fav,inCart}=props.movies;
    const{movies,addStars,decStars,fevarouite,cart}=props;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="poster"  src="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1500_.jpg"/>
          </div>
          <div className="right">
         <div className="title"> {title}</div>
            <div className="plot">{plot}</div>
            <div className="price"> Rs. {price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                 <img alt="Decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" className="str-btn" onClick={()=>{decStars(movies)}}/>
               
                  <img alt="Star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" className="stars"/>
                  <img alt="Increase" src="https://cdn-icons-png.flaticon.com/128/32/32563.png" className="str-btn" onClick={()=>{addStars(movies)}}/>
                  <span>{stars}</span>
               
              </div>
               {/* {fav ?<button className="unfavourite-btn"onClick={this.handleFav}>Un-favourite</button>:<button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
              <button className={fav?"unfavourite-btn":"favourite-btn"}onClick={()=>{fevarouite(movies)}}>{fav?"Un-favourite":"Favourite"}</button>
               {inCart? <button className="remcart-btn"onClick={()=>{cart(movies)}}>Remove from cart</button>: <button className="cart-btn" onClick={()=>{cart(movies)}}>Add to cart</button>}
              {/* <button className="cart-btn" onClick={this.handleCart}>Add to cart</button>
               <button className="remcart-btn">onClick={this.handleCart}Remove from cart</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  
}


