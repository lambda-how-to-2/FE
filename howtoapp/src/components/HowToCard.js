import React from 'react';

const HowToCard = (props) => {
    return(
        <div>
            <h2>{props.HowTo.title}</h2>
            <h4>{props.HowTo.author}</h4>
            <p>{props.HowTo.description}</p>
        </div>
    )
}

export default HowToCard;