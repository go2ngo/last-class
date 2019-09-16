import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import addStory from './reducers/addStory'

export const addStoryState = {
  addStory:'',
  stories:[]
}

const reducers = combineReducers({addStory})
const store = createStore(reducers, applyMiddleware(thunk))

export default store
