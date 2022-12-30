import React from 'react';
import { Link } from 'react-router-dom';

import './book-movie-title.styles.scss';

const BookMovieTitle = ({ match }) => {
    return(
        <div className='date-list-container'>
            <h1>Select the Date from the below mentioned:</h1>
            <div className='date-list'>
                <Link to={`${match.url}/06-12-2022`}><span>06-12-2022</span></Link>
                <Link to={`${match.url}/11-12-2022`}><span>11-12-2022</span></Link>
                <Link to={`${match.url}/18-12-2022`}><span>18-12-2022</span></Link>
                <Link to={`${match.url}/23-12-2022`}><span>23-12-2022</span></Link>
                <Link to={`${match.url}/26-12-2022`}><span>26-12-2022</span></Link>
                <Link to={`${match.url}/31-12-2022`}><span>31-12-2022</span></Link>
            </div>
        </div>
    );
}

export default BookMovieTitle;