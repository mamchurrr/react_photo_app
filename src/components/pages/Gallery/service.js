import settings from '../../../system/settings.json'

export const getApiPhotos = () => 
    fetch(settings.url)
        .then((response) => {
            return response.json();
        })
            
