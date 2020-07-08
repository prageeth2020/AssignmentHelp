import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class NavBar extends Component {
    constructor() {
        super();


        this.state = {
            home : "nnav-item active mx-2",
            myAssignment : "nav-item  mx-2",
            requestArticle : "nav-item  mx-2"

        };


    }

    Home = () => {
        this.setState({
            home : "nnav-item active mx-2",
            myAssignment : "nav-item  mx-2",
            requestArticle : "nav-item  mx-2"
        })
    }
    MyAssignment = () => {
        this.setState({
            home : "nav-item  mx-2",
            myAssignment : "nav-item active mx-2",
            requestArticle : "nav-item  mx-2"
        })
    }
    RequestArticle = () => {
        this.setState({
            home : "nav-item  mx-2",
            myAssignment : "nav-item  mx-2",
            requestArticle : "nav-item active mx-2"
        })
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                   <div className="container">
                        <b className=" ">Assignment Help</b>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse sideSpace" id="navbarTogglerDemo01">

                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">

                            </ul>
                            <ul className="navbar-nav my-2 my-lg-0 ">
                                <li className= {this.state.home } >
                                    <Link className="nav-link link" to="/"  onClick={this.Home}>Home</Link>
                                </li>
                                <li className= {this.state.myAssignment } >
                                    <Link className="nav-link link" to="/myassignment"  onClick={this.MyAssignment}>My Assignment</Link>
                                </li>
                                <li className= {this.state.requestArticle } >
                                    <Link className="nav-link link" to="/RequestArticle" onClick={this.RequestArticle}>Request Article</Link>

                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;