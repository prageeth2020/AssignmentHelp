import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Top from "./Component/top";
import NavBar from "./Component/navBar"
import Home from "./Component/Home"
import Footer from "./Component/footer"
import MyAssignment from "./Component/MyAssignment";
import Footer2 from "./Component/footer2";
import Login from "./Component/login";
import RequestArticle from "./Component/RequestArticle"
import './App.css';
import Admin from "./Admin/admin";
function App() {
    return (
        <div >
            <Router>
                <Top/>
                <NavBar/>
                <Route exact path="/" component={Home} />
                <Route exact path="/myassignment" component={MyAssignment} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/RequestArticle" component={RequestArticle} />
                <Footer/>
             
            </Router>
        </div>
    );
}

export default App;
