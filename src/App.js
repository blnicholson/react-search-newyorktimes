import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Articles from "./pages/Articles/Articles"
import SavedArticles from "./pages/SavedArticles/SavedArticles"
import './App.css';

const App = () =>(
    <Router>
        <div>
            <Navbar/>
           
            <br></br>
            <Route exact path="/" component={Articles}/>
            <Route exact path="/articles" component={Articles}/>
            <Route exact path="/savedArticles" component={SavedArticles}/>
        </div>
    </Router>
)

export default App;
