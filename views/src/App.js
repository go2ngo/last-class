import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import AddStory from './AddStory'
import ViewStories from './ViewStories'

const App = ()=>{
  return(
    <div className='container'>
      <ul>
        <li><Link to='/addStory'>Add Story</Link></li>
        <li><Link to='/viewStories'>View Stories</Link></li>
      </ul>

      <Switch>
        <Route path='/addStory' component={AddStory} />
        <Route path='/viewStories' component={ViewStories} />
      </Switch>
    </div>
  )
}

export default App
