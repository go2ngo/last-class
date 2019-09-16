import axios from 'axios'
export const ADD_STORY = 'ADD_STORY'
export const FETCH_STORIES = 'FETCH_STORIES'

export const addStory = (data)=>dispatch=>{
  axios.post('/api/addStory', data)
  .then(res=>dispatch({
    type:ADD_STORY,
    payload:res
  }))
  .catch(err=>console.log(err))
}

export const fetchStories = ()=>dispatch=>{
  axios.get('/api/stories')
  .then(res=>dispatch({
    type:FETCH_STORIES,
    payload:res
  }))
  .catch(err=>console.log(err))
}

export default null
