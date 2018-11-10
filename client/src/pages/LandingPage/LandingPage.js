import React, { Component } from "react";
import "./LandingPage.css"
import {Link} from "react-router-dom";


class LandingPage extends Component {
    render(){
        return(
            <div>
             <div className = "container">
               <div className = "jumbotron">
                  <h1>Welcome to the New York Times!</h1>
               </div>
                <Link to ="/articles">
                <button id = "enter" className="btn btn-outline-warning">
                  Enter
                </button>
                </Link>
             
             </div>
                
            </div>
        )
    }
}
export default LandingPage;