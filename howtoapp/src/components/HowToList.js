import React, { useEffect } from 'react';
import HowToCard from './HowToCard';
import { connect } from 'react-redux';
import { getList, addCard, deleteCard } from '../actions/index';
import './HowToList.css';
import AddToList from './AddtoList';

const HowToList = ({ getList, list, isEditing, deleteCard, addCard }) => {

    useEffect(() => {
        getList();
    }, [])

    const testDelete = (id) => {
        console.log('clicked', id)
    } 

    return(
        <div>
            <AddToList addCard={addCard} getList={getList} />
            {list.map(howto => (
                <div key={howto.id}>
                    <HowToCard HowTo={howto} deleteCard={testDelete(howto.id)} /> 
                    {/* deleteCard={deleteCard(howto.id)} */}
                </div>
            ))}
            {isEditing && (
                <form>

                </form>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        list: state.list,
        isEditing: state.isEditing
    }
}

const mapDispatchToProps = { getList, addCard }
// deleteCard

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HowToList);