import React from 'react';
import formatDate from '../../../utils/formatDate'

const Photo = ({photo}) => 
    {
        const {
            urls:{thumb}, 
            id,
            created_at
        } = photo;

        return (
            <div className="photo">
                <div className="wrap">
                    <h4> { formatDate(created_at) } </h4>
                    <img src={thumb} key={id} alt=""/>
                </div>
            </div>
        )
    }

export default Photo