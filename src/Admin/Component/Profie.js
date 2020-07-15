import React, {Component} from 'react';
import {Link} from "react-router-dom";
import utils from "../../utils/utils";

class Profie extends Component {
    addUser(){

        if( utils.checkLoggedInUser().type == "AdminType1") {
            return (
                <div className="row">
                    <div className="col">
                        1 of 2
                    </div>
                    <div className="col">
                        2 of 2
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="row">
                    <div className="col">
                        1 of 2
                    </div>

                </div>
            );
        }

    }
    submitRequest = (event) => {
        localStorage.removeItem("AssignmenthelpLogin");
        window.location.href = ("/");
    }
    render() {
        return (
            <div className="my-2 mx-4">
                <i className="fas fa-caret-right text-success mx-3"></i>
                <label className="form-check-label" >Adim/Profie</label>

                <div className="form-check form-check-inline  login">
                    <i className="fas fa-user text-secondary  mx-2"></i>
                    <label className="form-check-label text-secondary login" onClick={this.submitRequest}>logout</label>
                </div>
                <hr/>

                {
                    this.addUser()
                }
            </div>
        );
    }
}

export default Profie;