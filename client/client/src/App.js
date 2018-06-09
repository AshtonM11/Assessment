import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import AddAnimals from './components/AddAnimals'

const BASE_URL = 'http://localhost:4000'

class App extends Component {
  constructor () {
    super() 

    this.state = {
      animalsInZoo: {
        name: '',
        id: '',
        imageUrl: ''
      } ,
      zoo: [],
    }
  }


  componentDidMount(){
    axios({
      method: 'GET',
      url: BASE_URL +'/api/zoo',
    }).then(response => {
      console.log('animals',response)
      this.setState({ zoo: response.data })
    })  
  }

  updateAnimals(animals) {
    this.setState({ zoo: animals })
  }

  render() {
    
    
    return (
      
      <div>
       
      <div style={{ margin: '0 auto', marginTop: 40 }}>
        <AddAnimals updateAnimals={(animals) => this.setState({ zoo: animals })}/>
      </div> 
      

      <div style={{display: 'flex', justifyContent: 'space-around'}}className="App">
        <div>
          <h1> Animals in Zoo </h1>
          
          <h1> 
          {this.state.zoo.map(item => (
             <div>
              <h2>{item.name}</h2>
             <img src={item.imageUrl}/>
             </div>
           ))}
           </h1>
          
          
          
          
        </div>
      </div> 
    </div>
    );
  }
}

export default App;