import { getApiPhotos } from './service';

export const setPhotosActionType = (photos) => ( {type: 'SET_PHOTOS', photos} );

export const callApiPhotosAction = dispatch => {
  const photosData = getApiPhotos();


  photosData.then( photos => {
    dispatch(setPhotosActionType(photos))
    // сохраняем фотки в локальное хранилище браузера, типо как в cookie
    localStorage.setItem('photos', JSON.stringify(photos))
  } )
}
