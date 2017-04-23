import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import slider from './sliderReducer';

export default combineReducers({
  slider,
  form: reduxFormReducer,
});
