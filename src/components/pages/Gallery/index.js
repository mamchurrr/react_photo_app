import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListPhotos from './ListPhotos'
import './style.scss'
// import { getApiPhotos } from './service';
import { callApiPhotosAction } from './actions';

class Gallery extends Component {

    componentDidMount() {
        console.log('Did Mount')
        this.props.callApiPhotos();
    }

    render() {
        const { photos } = this.props;

        return (
            <div id="gallery" className="page">
                <h1>Gallery</h1>
                <ListPhotos photos={ photos }/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    callApiPhotos: () => callApiPhotosAction(dispatch),
})
const mapStateToProps = (state) => ({
    photos: state.gallery.photos,
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
