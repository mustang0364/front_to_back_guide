import React, { Component } from 'react';
import axios from 'axios';

import CompanyContainer from './components/CompanyContainer';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      companyNames: [],
      comment:'',
      company: '',
    }
  }

selectCompany=(company)=> {
this.setState({
  company:company
})
}

deleteCompany = (id) => {
 // console.log('id--------', id);
  axios.delete(`/api/post_comment/${id}`)
  .then(res => {
    this.setState({companyNames: res.data});
  }).catch(err => console.log('Delete Error--------', err));
}

reRender = () => {
  axios.get('/api/company_names')
  .then(res => {
    
    this.setState({
      companyNames: res.data
    })
  }).catch(err => console.log('Axios Get Cities Error-----', err));   
}

  changeHandler=(comment)=>{
    this.setState({
      comment:comment
    })
  }
 postComment=()=>{
   console.log(this.state.company, this.state.comment);
   axios.post('/api/post_comment',{company:this.state.company, comment: this.state.comment}).then(response => 
  this.setState({
    companyNames:response.data
  })).catch(err => console.log(err))
 }

  getUserInfo = () => {
    axios.get('/api/company_names').then(customers => {
        
        this.setState({
          companyNames: customers.data
        })
    })
  }






  //getPlaces=()=>
  //axios.get()



render() {
   
    let names = this.state.companyNames.map(company => {
      return (
      
      <CompanyContainer key={company.id} company={company} reRender={this.reRender}
             deleteCompany={this.deleteCompany} updateComment={this.updateComment} 
             handleChange={this.handleCommentChange}/>
      )})
      console.log(this.state.companyNames)
  return (
    <div className="App">

        <p>Silicon Valley</p>

      <button className="animated-box in" onClick={() => this.getUserInfo}>Yellow Pages</button> 
                
    
    
      

  <div>
    <select onChange= {(e)=> this.selectCompany(e.target.value)}>
          <option className="twitter"> Twitter</option> 
          <option className="facebook">Facebook</option>    
          <option className="salesForce">SalesForce </option>
          <option className="youtube">Youtube</option> 
          <option className="Instagram">Instagram</option>
          <option className="Pinterest">Pinterest</option>
          <option className="Tesla">Tesla</option>

    </select>  
  </div>

  <div>
    <p className="experience">Post Comment:</p>
  </div>
  
  
        
  <div>  
    <button className="postcomment in" onClick={() =>this.postComment()}>Post comment</button>
  </div>
      <textarea className="textArea" onChange={(e)=>this.changeHandler(e.target.value)}></textarea>
    <div>
      <div>{names}</div>
      <div className="buildings">
      <div className="sky"></div>
      <div className="sky1"></div>
      <div className="sky2"></div>
      <div className="cloud"></div>
      <div className="car"></div>
      <div className="porsche"></div>
      <div className="birds"></div>
      <div className="birds2"></div>
      <div className="plane"></div>
      <div className="motorcycle"></div>
      <div className="whatup"></div>
      <div className="krankenwagen"></div>
      <div className="charger"></div>
      <div className="sun"></div>
      <div className="slack"></div>
    </div>
    </div>
</div>
)    
}
}


export default App;
