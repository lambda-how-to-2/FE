import React from 'react';
import HowToCard from './HowToCard';

const HowToList = ({ list, isEditing }) => {
    return(
        <div>
            {list.map(howto => (
                <HowToCard HowTo={howto} />
            ))}
            {isEditing && (
                <form>
                    
                </form>
            )}
        </div>
    )
}

export default HowToList;