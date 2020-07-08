import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from "./Component/Home";
import Consultant from "./Component/Consultant";
import Notifications from "./Component/Notifications";
import Profie from "./Component/Profie";

class Admin extends Component {
    constructor() {
        super();


        this.state = {
            home : "iconActive",
            consultant : "",
            notifications : "",
            profile : ""

        };
    }
    home = () => {
        this.setState({
            home : "iconActive",
            consultant : "",
            notifications : "",
            profile : ""
        })
    }
    consultant = () => {
        this.setState({
            home : "",
            consultant : "iconActive",
            notifications : "",
            profile : ""
        })
    }
    notifications = () => {
        this.setState({
            home : "",
            consultant : "",
            notifications : "iconActive",
            profile : ""
        })
    }
    profile = () => {
        this.setState({
            home : "",
            consultant : "",
            notifications : "",
            profile : "iconActive"
        })
    }

    render() {
        return (
            <div>
                <Router>

                    <div className="row row-cols-4 ">
                        <div className="col-1  text-center  ">
                            <div className="icon-bar height bg-dark">
                                <Link to="/" className={this.state.home} onClick={this.home} ><i className="fas fa-th-large text-white "></i></Link>
                                <Link to="/Consultant" className={this.state.consultant} onClick={this.consultant}> <i className="fas fa-chalkboard-teacher text-white"></i></Link>
                                <Link to="/Notifications" className={this.state.notifications} onClick={this.notifications}><a className="" href="#"><i className="far fa-bell text-white"></i></a></Link>
                                <Link to="/Profie" className={this.state.profile} onClick={this.profile}> <i className="far fa-user text-white"></i></Link>

                            </div>
                        </div>
                        <div className="col-11">

                                <Route exact path="/" component={Home} />
                                <Route exact path="/Consultant" component={Consultant} />
                                <Route exact path="/Notifications" component={Notifications} />
                                <Route exact path="/Profie" component={Profie} />



                        </div>

                    </div>.
                </Router>
            </div>
        );
    }
}

export default Admin;