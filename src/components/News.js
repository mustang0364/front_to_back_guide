import React,{Component} from 'react';
import axios from 'axios'

class News  extends Component {
    constructor() {
        super();
        this.state = {
            articles:[]
          }
    }
    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=36fa97415dff4392a5613249d0217990').then(response =>{
            this.setState({
                articles:response.data.articles
            })
            console.log('response from news', response.data.article)
        }).catch(error => console.log(error))
    }
      
    
    
    
    
    
    
    
    render() { 
        let articles=this.state.articles.map( e => {
            return <div>{e.title}</div>

        })
        return ( 
           
            <div>  {articles[0]} </div>
         )
    }
}
 
export default News;