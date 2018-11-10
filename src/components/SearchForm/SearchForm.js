import React from "react";
import "./SearchForm.css";



//Search form for searching articles
 const SearchForm = props => (
    <div className = "container">
    <div className = "card">
    <div className = "card-title">
      <h1>Search Articles</h1>
    </div>
        <form className = "search" id="searchForm">
            <div className="form-group">
            <label>Topic</label>
            <input type ="topic" className="form-control" name="topic" onChange={props.handleInputChange} />
            </div>
            <br></br>
            <div className="form-group">
            <label>Start Date</label>
            <input type ="startDate" className="form-control" name="startDate" onChange={props.handleInputChange} />
            </div>
            <br></br>
            <div className="form-group">
            <label>End Date</label>
            <input type ="endDate" className="form-control" name="endDate" onChange={props.handleInputChange} />
            </div>
            <div className="card-footer">
            <button type="submit" className="btn btn-outline-warning" onClick= {props.handleFormSubmit} >Submit
            </button>
            </div>
        </form>
    
    </div>
    </div>
);
export default SearchForm;