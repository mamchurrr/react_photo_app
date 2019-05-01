import React from 'react';
import {connect} from 'react-redux';
import { getPhoto } from './selectors';
import formatDate from '../../../utils/formatDate';
import './style.scss';

const Photo = ({data}) => {
    const { 
        id, 
        urls:{ raw },
        created_at,
    } = data;
    return (
        <div id="Photo" className="page">
            <h1>Photo</h1>
            <h2>{formatDate(created_at)}</h2>
            <img key={id} src={raw} alt="" />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    data: getPhoto(state, ownProps)
});
export default connect(mapStateToProps)(Photo);