import React, { Component } from 'react'
import './Movie.css'

export default class Movie extends Component {
    render() {
        return (

            <div className="movie-card">
                <div className="movie-item">
                <img src="https://resize1.indiatvnews.com/en/centered/newbucket/1200_675/2019/05/d6elinduuaaahnw-1557375125.jpg" />
                <div>123.03k  Maharshi</div>
                </div>

                <div className="movie-item">
                <img src="https://data1.ibtimes.co.in/en/full/712859/nani-jersey.jpg" />
                <div>54.98k Jersey</div>
               </div>
               
               <div className="movie-item">
                <img src="https://static.toiimg.com/photo/80196210.jpeg" />
                <div>132.76k Love Story</div>
               </div>
                  
            </div>
            
        )
    }
}
