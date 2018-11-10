import React, { Component } from "react";
import "./SavedArticles.css";
import API from "../../utils/API";
import Navbar2 from "../../components/NavBar2/Navbar2"

class SavedArticles extends Component {
  state = {
    savedArticles: [],
    title: "",
    url: "",
    snippet: ""
  };

  componentDidMount() {
    this.showArticles();
  }

  // //Get saved articles from the db
  showArticles = () => {
    API.getSaved()
      .then(res =>
        this.setState({
          savedArticles: res.data,
          title: "",
          url: "",
          synopsis: ""
        })
      )
      .catch(err => console.log(err));
  };

  //Delete button for deleting articles from the db
  handleDeleteArticle = article => {
    API.deleteArticle(article._id)
      .then(res => this.showArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar2 />
              <h1 className="articlesResults">Saved Articles</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
            <div className="card-columns">
              {this.state.savedArticles.map((save, i) => (
                <div key={i} className="card" id="resultCard">
                  <div className="card-body">
                    <h5 className="card-title">{save.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {save.date}
                    </h6>
                    <p className="card-text">{save.synopsis}</p>
                    <button className="btn btn-outline-danger">
                      <a
                        href={save.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Article Here
                      </a>
                    </button>
                    <button
                      id="Button"
                      className="btn btn-outline-danger"
                      onClick={() => this.handleDeleteArticle(save)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default SavedArticles;
