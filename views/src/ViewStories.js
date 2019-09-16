import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchStories} from './actions'

class ViewStories extends Component {
  UNSAFE_componentWillMount(){
    this.props.fetchStories()
  }
  render(){
    let no = 0
    return(
      <div>
        <table className='table table-bordered'>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Title</th>
            <th>Story</th>
          </tr>
        </thead>
        <tbody>
        {this.props.stories.map((story, key)=>{
          return(
            <tr key={key}>
              <td>{++no}</td>
              <td>{story.title}</td>
              <td>{story.story}</td>
            </tr>
          )
        })}
        </tbody>
        </table>
      </div>
    )
  }
}
const mapStateToprops = (state)=>{
  return{
    stories:state.addStory.stories
  }
}
export default connect(mapStateToprops, {fetchStories})(ViewStories)
