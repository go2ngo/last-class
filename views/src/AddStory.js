import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addStory} from './actions'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class AddStory extends Component {
  constructor(){
    super()
    this.state = {title:null, story:null}
  }
  handleChange = e =>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit = e =>{
    e.preventDefault()
    this.props.addStory(this.state)
  }
  render(){
    let message = <h2>{' '}</h2>
    if (this.props.message) {
      message = <h2 className='alert alert-success'>{this.props.message}</h2>
    }
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
          {message}
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input type='text' id='title' className='form-control' onChange={this.handleChange} />
            </div>
            <div className='form-group'>
              <label htmlFor='story'>Story</label>
              <textarea id='story' className='form-control' onChange={this.handleChange} ></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>Add Story</button>
          </form>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToprops = (state)=>{
  return{
    message:state.addStory.addStory
  }
}

export default connect(mapStateToprops, {addStory})(AddStory)
