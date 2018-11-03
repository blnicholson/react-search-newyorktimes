import React, {Component} from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm/SearchForm";

class Articles extends Component {
    state = {
        topic: "",
        startDate: "",
        endDate: "",
        synopsis:"",
        articleResult: [],
        savedArticles: []
    };

componentDidMount(){
    this.showArticles();
}
//Get saved articles
showArticles = () => {
    API.getSaved()
    .then(res => this.setState({savedArticles: res.data, topic:"", startDate:"", endDate:"", synopsis:""}))
    .catch(err => console.log(err));
};

handleInputChange = event => {
    const {name, value}=event.target;
    this.setState({
        [name]: value
    });
};

handleSaveArticle = event => {
    event.preventDefault();
    API.saveArticle({
        
    })
        .then(res=> this.showBooks())
        .catch(err => console.log(err))
        console.log("book saved")
}
//Submit button gets articles from NYT
handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.topic, this.state.startDate, this.state.endDate)
       .then(res =>{
           this.setState({articleResult: res.data.response.docs})
           console.log(res.data)
       })
       .catch(err => console.log(err));
    
};
render(){
    return(
    <div>
        <SearchForm 
          handleFormSubmit = {this.handleFormSubmit}
          handleInputChange = {this.handleInputChange}
        />
        <br></br>
        <div className="container">
        <div className = "row">
          <div className = "col-md-12">
                   {this.state.articleResult.map(article =>(
            <div className="card" >
            <div className="card-body">
              <h5 className="card-title">{article.headline.main}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{article.pub_date}</h6>
              <p class="card-text">{article.snippet}</p>
              <button className="btn"><a href={article.web_url} target="_blank">Read Article Here</a></button>
              <button id="saveButton" className="btn" onClick={this.handleSaveArticle}>Save</button>
            </div>
          </div>   
                   ))}
          </div>
        </div>
        </div>
    </div>   
    )
}
};


export default Articles;