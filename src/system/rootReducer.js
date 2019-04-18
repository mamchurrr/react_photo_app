import {combineReducers} from 'redux'

import gallery from '../components/pages/Gallery/reducer';
import photo from '../components/pages/Photo/reducer';

export default combineReducers({
    gallery,
    photo,
})