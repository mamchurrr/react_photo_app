import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListPhotos from './ListPhotos'
import './style.scss'
import { getApiPhotos } from './service';

class Gallery extends Component {

    componentDidMount() {
        console.log('Did Mount')
        const photosData = getApiPhotos();
        const { setPhotos } = this.props;

        photosData.then((photos)=>{
            setPhotos(photos);
            console.log(photos)
        })
    }

    render() {
        const { photos } = this.props;

        return (
            <div id="gallery" className="page">
                <h1>Hello Gallery</h1>
                <ListPhotos photos={ photos }/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    setPhotos: photos => dispatch({type:'SET_PHOTOS', photos}),
})
const mapStateToProps = (state) => ({
    photos: state.gallery.photos,
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
