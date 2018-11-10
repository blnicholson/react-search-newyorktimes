import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage"
import Articles from "./pages/Articles/Articles"

import SavedArticles from "./pages/SavedArticles/SavedArticles"
import './App.css';

const App = () =>(
    <Router>
        <div>
           
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/articles" component={Articles}/>
            <Route exact path="/savedArticles" component={SavedArticles}/>
        </div>
    </Router>
)

export default App;
