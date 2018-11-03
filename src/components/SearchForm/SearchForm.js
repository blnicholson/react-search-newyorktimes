import React from "react";
import "./SearchForm"

 const SearchForm = props => (
    <div className = "container">
        <form>
            <div className="form-group">
            <label for ="topics">Topic</label>
            <input type ="topic" className="form-control" name="topic" onChange={props.handleInputChange} />
            </div>
            <br></br>
            <div className="form-group">
            <label for ="startDate">Start Date</label>
            <input type ="startDate" className="form-control" name="startDate" onChange={props.handleInputChange} />
            </div>
            <br></br>
            <div className="form-group">
            <label for ="endDate">End Date</label>
            <input type ="endDate" className="form-control" name="endDate" onChange={props.handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick= {props.handleFormSubmit}>Submit</button>
        </form>
    </div>
);
export default SearchForm;