import React from 'react';
import Photo from './Photo'

const ListPhotos = ({photos}) => (
    <div className="list-photos">
        { photos.map (p => <Photo key={p.id} photo = {p}/>) }
    </div>
)

export default ListPhotos