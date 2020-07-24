import React, { useEffect } from 'react';
import HowToCard from './HowToCard';
import { connect } from 'react-redux';
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