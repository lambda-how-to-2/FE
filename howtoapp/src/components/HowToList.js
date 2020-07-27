import React, { useEffect } from 'react';
import HowToCard from './HowToCard';
import { connect } from 'react-redux';
import { getList } from '../actions/index';
import './HowToList.css';

const HowToList = ({ getList, list, isEditing }) => {

    useEffect(() => {
        getList();
    }, [])

    return(
        <div>
            {list.map(howto => (
                <div key={howto.id}>
                    <HowToCard HowTo={howto} />
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

export default connect(
    mapStateToProps,
    { getList }
)(HowToList);