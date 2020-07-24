import React, { useEffect } from 'react';
import HowToCard from './HowToCard';
import { getList } from '../actions/index';

const HowToList = ({ getList, list, isEditing }) => {

    useEffect(() => {
        getList();
    }, [getList])

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