import React from 'react';
import './HowToList.css';

const HowToCard = (props) => {
    return(
        <div className='howtocard'>
            <h2>{props.HowTo.title} <span className='delete' >X</span></h2>
            <h4 className='author'>{props.HowTo.author}</h4>
            <p>{props.HowTo.description}</p>
        </div>
    )
}

export default HowToCard;