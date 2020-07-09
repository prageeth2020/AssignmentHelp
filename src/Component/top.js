import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Top extends Component {
    render() {
        return (
            <div className=" bg-primary" >
                <div className="container text-wrap mrgn p-2  " >

                        <a href="https://www.facebook.com/assignmenthelpteam/?modal=admin_todo_tour" className=" "><i className="fab fa-facebook-f text-white "></i></a>
                        <a href="https://www.facebook.com/assignmenthelpteam/?modal=admin_todo_tour" className="mx-5"><i className="fas fa-envelope text-white"></i></a>
                        <a href="https://www.facebook.com/assignmenthelpteam/?modal=admin_todo_tour" className=""><i className="fab fa-instagram text-white"></i></a>

                        <a href="" className="login "> <i className="fas fa-user text-white "> <Link  className=" mx-2 underline text-white" to="/login">Sign in</Link></i></a>



                </div>

            </div>
        );
    }
}

export default Top;