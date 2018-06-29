import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      customerNames: []
    }
  }

  getUserInfo = () => {
    axios.get('/api/customer_names').then(customers => {
        
        this.setState({
          customerNames: customers.data
        })
    })
  }


  render() {
   
    let names = this.state.customerNames.map(customer => {
      return <div className='customer-name' key={customer.id}>{customer.name}</div>
    })

    return (
      <div className="App">
      {names}
       <button onClick={() => this.getUserInfo()}>Get Customer Names</button>
      </div>
    );
  }
}

export default App;
