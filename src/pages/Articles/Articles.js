import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./Articles.css";


class Articles extends Component {

  //Setting the state
  state = {
    topic: "",
    startDate: "",
    endDate: "",
    articleResult: [], 
  };

  //input change
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Submit button gets articles from NYT
  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.topic, this.state.startDate, this.state.endDate)
      .then(res => {
        this.setState({ articleResult: res.data.response.docs });
        console.log(this.state.articleResult);
      })
      .catch(err => console.log(err));
  };
  
  //Save article button
  handleSaveArticle = articleData => {
      API.saveArticle({
        title:articleData.headline.main,
        url:articleData.web_url,
        synopsis:articleData.snippet
      })
      .then(alert("Article has been saved"))
      .catch(err => console.log(err));
    
  };
  
  render() {
    return (
      <div className="background">
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <h1>Results</h1>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.state.articleResult.map((article, i) => (
                <div key={i} className="card">
                  <div className="card-body">
                    <h5 className="card-title">{article.headline.main}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {article.pub_date}
                    </h6>
                    <p className="card-text">{article.snippet}</p>
                    <button className="btn btn-outline-warning">
                      <a
                        href={article.web_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Article Here
                      </a>
                    </button>
                    <button
                      id="Button"
                      className="btn btn-outline-warning"
                      onClick={()=>this.handleSaveArticle(article)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
       
        
      </div>
    );
  }
}

export default Articles;
