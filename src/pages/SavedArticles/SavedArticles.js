import React, {Component} from "react";
import API from "../../utils/API";

class SavedArticles extends Component{
    
    render() {
        return(
            <div className="container">
        <div className = "row">
          <div className = "col-md-12">
                   
            <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Date</h6>
              <p class="card-text">synopsis</p>
              <button className="btn"><a href="#" target="_blank">Read Article Here</a></button>
              <button id="saveButton" className="btn" onClick={this.handleSaveArticle}>Save</button>
            </div>
          </div>   
                  
          </div>
        </div>
        </div>
        )
    }
}
export default SavedArticles;