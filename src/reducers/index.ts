import {combineReducers} from 'redux';

import contact from './contact';
import info from './info';

export default combineReducers<{}>({
    contact,
    info,
});
