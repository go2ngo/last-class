import {addStoryState} from '../store'
import {ADD_STORY, FETCH_STORIES} from '../actions'

const addStoryReducer = (state=addStoryState, action)=>{
  if (action.type === ADD_STORY) {
    if (action.payload.status === 200) {
      return{...state, addStory:action.payload.data.message}
    }
  }else if (action.type === FETCH_STORIES) {
    if (action.payload.status === 200) {
      return{...state, stories:action.payload.data}
    }
  }

  return state
}

export default addStoryReducer
