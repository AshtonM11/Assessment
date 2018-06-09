import React, { Component } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

class AddAnimals extends Component {
  constructor (props) {
    super(props)
    this.state = {
        name: '',
        imageUrl:'',
      };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }
  addAnimal = () => {
    
    axios({
      method: 'POST',
      url: BASE_URL + '/api/newAnimal',
      data: {data: this.state},
    }).then(response => {
        console.log('response',response)
        this.props.updateAnimals(response.data)
    })

  }

  render () {
    return (
     <form>
       <label> Animal </label>
       <input type="text" name="name" onChange={this.handleChange}/>
       <label> Picture </label>
       <input type="url" name="imageUrl" onChange={this.handleChange}/>
       <button onClick={this.addAnimal}> Add Animal </button>
     </form>
    )
  }
}

export default AddAnimals