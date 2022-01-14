import React from 'react'
import propTypes from 'prop-types';
import starRating from '../Starrating';

const Moviecard = (props)=>(
    <div className='movie-card'>
    <div className='movie-card card'>
    <div className='card-body'>
        <h4 className="card-title">{props.movie.title}</h4>
        <h6 className="card-subtitle mb-2 text-mutes">{props.movie.subtitle}</h6>
        </div>

    <div className='card-footer'>
    <div className='clearfix'>
    <div className='float-left mt-1'>
    <Starrating rating={props.movie.rating}/>
    </div>
    <div className='card-footer-badge'>{props.movie.rating}</div>
    </div>
    </div>

    </div>
    </div>
   </div>

)

MovieCard.defaultProps = {
    movie:{}
};

MovieCard.propsRelisingDate = {

    movie:propsRelisingDate.object
}

export default MoviesCard;




