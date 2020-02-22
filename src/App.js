import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Details from "./Details";

function App() {
    return (
        <div className="App">
            <Router>

                <div className="navigation-bar">
                    <div id="navigation-container">
                        <p className="images">Logo</p>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>


                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route exact path={`/details/:id`} component={Details}/>
                </Switch>
            </Router>
        </div>
    );
}


export default App;
