import React from "react";
import "./SearchForm.css";


//Search form for searching articles
 const SearchForm = props => (
    <div className = "container">
        <form className = "search">
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
            <button type="submit" className="btn btn-primary" onClick= {props.handleFormSubmit}>Submit</button>
        </form>
    </div>
);
export default SearchForm;