import React from 'react';
import './HowToList.css';
import { Link } from 'react-router-dom'
const HowToCard = (props) => {
    return(
        <div className='howtocard'>
            <h2>{props.HowTo.title} <span className='delete' onClick={() => {props.deleteCard(props.HowTo.id)}}>X</span></h2>
            <Link to={`${props.HowTo.id}/edit`}><h4 className='author'>{props.HowTo.author}</h4></Link>
            <Link to={`${props.HowTo.id}/edit`}><p>{props.HowTo.description}</p></Link>
        </div>
    )
}
export default HowToCard;
