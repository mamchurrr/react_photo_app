export const getPhoto = (state, props) => {
  const id = props.match.params.idPhoto;
  const localPhotos = localStorage.getItem('photos'); 
  const photos = (localPhotos) 
    ? JSON.parse(localPhotos)
    : state.gallery.photos;
  return photos.find( p => p.id === id)
}