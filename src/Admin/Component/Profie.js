import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Profie extends Component {
    render() {
        return (
            <div className="my-2 mx-4">
                <i className="fas fa-caret-right text-success mx-3"></i>
                <label className="form-check-label" >Adim/Profie</label>

                <div className="form-check form-check-inline  login">
                    <i className="fas fa-user text-secondary  mx-2"></i>
                    <label className="form-check-label text-secondary login" >logout</label>
                </div>
                <hr/>

            </div>
        );
    }
}

export default Profie;