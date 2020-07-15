import React, {Component} from 'react';
import firebase from "../firebase/firebase";
import utils from "../utils/utils";

class Login extends Component {
    constructor() {
        super();
        this.state = { Email: '', Password: ''  };

        this.state = {
            Email: '',
            Password: '',

        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handleEmailChange(event) {

        this.setState({
            Email: event.target.value
        }, () => {
            // console.log("Entered Username: ", this.state.username);
        });
    };
    handlePasswordChange(event) {
        this.setState({
            Password: event.target.value
        }, () => {
            // console.log("Entered Password: ", this.state.password);
        });
    };

    submitRequest = (event) => {


        var em = this.state.Email;
        var pass =  this.state.Password;
        if(em =="SuperAdmin" && pass =="SuperAdmin123") {
            var userObj = new Object();
            userObj.FirstName = "erfe";
            userObj.LastName = "rgerg";
            userObj.Email = this.state.Email;
            userObj.Password = this.state.Password;
            userObj.type = "AdminType1";

            console.log(userObj);
            localStorage.setItem("AssignmenthelpLogin", JSON.stringify(userObj));

            window.location.href = "/";

        }
        else {
            if(em =="Admin" && pass =="admin123") {
                var userObj = new Object();
                userObj.FirstName = "erfe";
                userObj.LastName = "rgerg";
                userObj.Email = this.state.Email;
                userObj.Password = this.state.Password;
                userObj.type = "AdminType2";
                console.log(userObj);
                localStorage.setItem("AssignmenthelpLogin", JSON.stringify(userObj));

                window.location.href = "/";

            }
        }


    }

    render() {
        return (
            <div>
                <div className="row loginTopMArgin mx-1">
                    <div className="col visible">

                    </div>
                    <div className="col">
                            <div className="text-center my-1  portrait" action="#!">

                                <p className="h4 mb-4">Sign in</p>
                                <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" onChange={this.handleEmailChange}
                                       placeholder="E-mail"/>

                                <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" onChange={this.handlePasswordChange}
                                       placeholder="Password"/>

                                <div className="d-flex justify-content-around">
                                    <div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="defaultLoginFormRemember"/>
                                            <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember
                                                me</label>
                                        </div>
                                    </div>
                                    <div style={{display : "none"}}>

                                        <a href="">Forgot password?</a>
                                    </div>
                                </div>
                                <button className="btn btn-info btn-block my-4" type="submit"  onClick={this.submitRequest}>Sign in</button>
                                <p style={{display : "none"}}>Not a member?
                                    <a href="">Register</a>
                                </p>

                                <p style={{display : "none"}}>or sign in with:</p>

                                <a href="#" className="mx-2" role="button" style={{display : "none"}}><i
                                    className="fab fa-facebook-f light-blue-text" style={{display : "none"}}></i></a>
                                <a href="#" className="mx-2" role="button" style={{display : "none"}}><i
                                    className="fab fa-twitter light-blue-text" style={{display : "none"}}></i></a>
                                <a href="#" className="mx-2" role="button"><i
                                    className="fab fa-linkedin-in light-blue-text" style={{display : "none"}}></i></a>
                                <a href="#" className="mx-2" role="button"><i
                                    className="fab fa-github light-blue-text" style={{display : "none"}}></i></a>

                            </div>
                    </div>
                    <div className="col visible">

                    </div>
                </div>




            </div>
        );
    }
}

export default Login;