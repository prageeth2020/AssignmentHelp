import React, {Component} from 'react';
import firebase from "../firebase/firebase";

class RequestArticle extends Component {
    constructor() {
        super();
        this.state = { FirstName: '', LastName: '' , Email : '' , Description : '' , requestID : '0' };

        this.state = {
            FirstName: '',
            LastName: '',
            Email : '',
            Description : '',
            requestID : ''
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    }

    componentDidMount() {
        var requestID = 0;
        firebase.database().ref("RequestArticle").once("value").then(snapshot => {
            snapshot.forEach(item => {
                requestID = requestID + 1 ;

            });
            requestID = requestID + 1 ;
            this.state.requestID = requestID;
            console.log(this.state.requestID);
            this.forceUpdate();
        });

    }

    handleFirstNameChange(event) {
        this.setState({
            FirstName: event.target.value
        }, () => {
            // console.log("Entered Username: ", this.state.username);
        });
    };
    handleLastNameChange(event) {
        this.setState({
            LastName: event.target.value
        }, () => {
            // console.log("Entered Password: ", this.state.password);
        });
    };
    handleEmailChange(event) {
        this.setState({
            Email: event.target.value
        }, () => {
            // console.log("Entered Username: ", this.state.username);
        });
    };
    handleDescriptionChange(event) {
        this.setState({
            Description: event.target.value
        }, () => {
            // console.log("Entered Password: ", this.state.password);
        });
    };

    submitRequest = (event) => {
        console.log(this.state);
        var obj = this.state;
        //var count = this.state.requestID.length;

        firebase.database().ref("RequestArticle").child(this.state.requestID).set({
            FirstName : obj.FirstName,
            LastName : obj.LastName,
            Email : obj.Email,
            Description : obj.Description
        });


        var count = 0;
        firebase.database().ref("RequestArticle").once("value").then(snapshot => {
            snapshot.forEach(item => {
                count = count + 1 ;

            });
            count = count + 1 ;
            this.state.requestID = count;
            console.log(this.state.requestID)
            this.forceUpdate();
        });

        this.setState({
            FirstName: '',
            LastName: '',
            Email : '',
            Description : ''
        })
        window.location.reload();
    }
    render() {
        return (
            <div className="row mx-1 my-2">
                <div className="col-sm-4 my-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Our Service</h5>
                            <p className="card-text">
                                <div className="form-check form-check-inline my-3">
                                    <i className="fas fa-caret-right text-success mx-3"></i>
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">24 *7 Support From Our Team</label>
                                </div><br/>

                                <div className="form-check form-check-inline my-3">
                                    <i className="fas fa-caret-right text-success mx-3"></i>
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Deadline Guaranteed</label>
                                </div><br/>

                                <div className="form-check form-check-inline my-3">
                                    <i className="fas fa-caret-right text-success mx-3"></i>
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">No Plagiarism</label>
                                </div><br/>

                                <div className="form-check form-check-inline my-3">
                                    <i className="fas fa-caret-right text-success mx-3"></i>
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Privacy Guaranteed</label>
                                </div><br/>
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-8 my-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Your Request ID : {this.state.requestID}</h5>
                            <p className="card-text">
                                <div className=" my-4">
                                    <div className=" my-4">
                                        <div className="row form-group">
                                            <div className="col">
                                                <label htmlFor="exampleInputEmail1">First name</label>
                                                <input type="text" className="form-control" id="input1" onChange={this.handleFirstNameChange}
                                                       placeholder="First name" defaultValue="" required/>
                                            </div>
                                            <div className="col">
                                                <label htmlFor="exampleInputEmail1">Last name</label>
                                                <input type="text" className="form-control" id="input2" onChange={this.handleLastNameChange}
                                                       placeholder="Last name"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="input3" onChange={this.handleEmailChange}
                                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                                            <small id="emailHelp" className="form-text text-muted">We'll never share
                                                your email with anyone else.</small>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Description </label>
                                            <textarea id="w3mission" rows="5" className="textarea"
                                                      placeholder="Please type in English. Do not include emojis." onChange={this.handleDescriptionChange}
                                            ></textarea>
                                        </div>
                                        <div className="form-group my-2">
                                            <button type="submit" className="btn btn-primary" onClick={this.submitRequest} >Submit</button>
                                        </div>
                                    </div>


                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestArticle;