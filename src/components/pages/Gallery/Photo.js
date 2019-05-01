import React from 'react';
import { Link } from 'react-router-dom';
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
                    <h4>
                        { formatDate(created_at) } 
                    </h4>
                    <Link to={`/photo/${id}`}>
                        <img src={thumb} key={id} alt=""/>
                    </Link>
                </div>
            </div>
        )
    }

export default Photo