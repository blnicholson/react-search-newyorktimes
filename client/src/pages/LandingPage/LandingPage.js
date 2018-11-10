import React, { Component } from "react";
import "./LandingPage.css"


class LandingPage extends Component {
    render(){
        return(
            <div>
             <div className = "container">
               <div className = "jumbotron">
                  <h1>Welcome to the New York Times!</h1>
               </div>
                <button id = "enter" className="btn btn-outline-warning">
                <a href="/articles">Enter New York Times</a>
                </button>
             
             </div>
                
            </div>
        )
    }
}
export default LandingPage;