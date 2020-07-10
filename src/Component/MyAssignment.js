import React, {Component} from 'react';
import firebase from "../firebase/firebase";

class MyAssignment extends Component {
    constructor() {
        super();
        this.state = { FirstName: '', LastName: '' , Email : '' , Description : '' , file: null, fileURL: '', };

        this.state = {
            FirstName: '',
            LastName: '',
            Email : '',
            MobileNumber : '',
            Type : '',
            Description : '',
            AssignmentID : '',
            file: null,
            fileURL: '',
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMobileNumberChange = this.handleMobileNumberChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);

    }

    componentDidMount() {
        var Assignmentcount = 8;
        firebase.database().ref("MyAssignment").once("value").then(snapshot => {
            snapshot.forEach(item => {
                Assignmentcount = Assignmentcount + 1 ;

            });
            Assignmentcount = Assignmentcount + 1 ;
            this.state.AssignmentID = Assignmentcount;
            console.log(this.state.AssignmentID);
            this.forceUpdate();
        });
        console.log(this.state.AssignmentID);
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
    handleMobileNumberChange(event) {
        this.setState({
            MobileNumber: event.target.value
        }, () => {
            // console.log("Entered Username: ", this.state.username);
        });
    };
    handleTypeChange(event) {
        this.setState({
            Type: event.target.value
        }, () => {
            // console.log("Entered Password: ", this.state.password);
        });
    };
    handleDescriptionChange(event) {
        this.setState({
            Description: event.target.value
        }, () => {
            // console.log("Entered Password: ", this.state.password);
        });
    };

    handleFileChange = (files) => {
        this.setState({
            file: files[0]
        })
    }

    submitRequest = (event) => {
        console.log(this.state);
        var obj = this.state;

        let bucketName = 'Assignments'
        let file = this.state.file
        if (!file) {
            toastr.error('Hi! I am error message.');
        } else {
            let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
            storageRef.put(file).then(function () {
                    storageRef.getDownloadURL().then(function (result) {
                        console.log(this.state.fileM)
                        this.setState({
                            imageURL_main: result
                        })
                        console.log("*");
                        console.log(this.state.imageURL_main);
                    }.bind(this));
                }.bind(this)
            );

        }

        firebase.database().ref("MyAssignment").child(this.state.AssignmentID).set({
            FirstName : obj.FirstName,
            LastName : obj.LastName,
            Email : obj.Email,
            Type : obj.Type,
            MobileNumber : obj.MobileNumber,
            Description : obj.Description,
            Status : "New"
        }).then(function () {

        });


        var AssignmentCount = 8;
        firebase.database().ref("MyAssignment").once("value").then(snapshot => {
            snapshot.forEach(item => {
                AssignmentCount = AssignmentCount + 1 ;

            });
            AssignmentCount = AssignmentCount + 1 ;
            this.state.AssignmentID = AssignmentCount;
            console.log(this.state.AssignmentID);
            this.forceUpdate();
        });

        this.setState({
            FirstName: '',
            LastName: '',
            Email : '',
            MobileNumber : '',
            Type : '',
            Description : '',
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
                            <h5 className="card-title">Your Assignment ID : ST/AH/2020/{this.state.AssignmentID}</h5>
                            <p className="card-text">
                                <div className=" my-4">
                                    <div className="row form-group">
                                        <div className="col">
                                            <label htmlFor="exampleInputEmail1">First name</label>
                                            <input type="text" className="form-control" id="input1"
                                                   placeholder="First name" onChange={this.handleFirstNameChange}
                                                   required/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="exampleInputEmail1">Last name</label>
                                            <input type="text" className="form-control" id="input2"
                                                   placeholder="Last name" onChange={this.handleLastNameChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="input3"
                                               aria-describedby="emailHelp" placeholder="Enter email"
                                               onChange={this.handleEmailChange}/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your
                                            email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Mobile Number</label>
                                        <div className="input-group mb-2 mr-sm-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">+94</div>
                                            </div>
                                            <input type="tel" className="form-control" id="input4"
                                                   placeholder="7x xxxxxxx" pattern="[0-9]{9}" maxLength="9"
                                                   onChange={this.handleMobileNumberChange}/>
                                        </div>
                                    </div>


                                    <div className="form-group my-4">
                                        <label htmlFor="exampleInputPassword1">Type of Assignment</label>
                                        <select className="custom-select" id="input5" onChange={this.handleTypeChange}>
                                            <option value="">-Select Assignment Type-</option>
                                            <option value="Web application">Web application</option>
                                            <option value="Desktop application">Desktop application</option>
                                            <option value="Android application">Android application</option>
                                            <option value="Documentation related to IT">Documentation related to IT
                                            </option>
                                        </select>
                                    </div>
                                    <div className="form-group my-2">
                                        <label htmlFor="exampleInputPassword1">Assignment .pdf/.doc</label>
                                        <div className="custom-file mb-3">
                                            <input type="file" className="custom-file-input" id="customFile" onChange={(e) => { this.handleFileChange(e.target.files) }}
                                                   name="filename"/>
                                            <label className="custom-file-label" htmlFor="customFile">Choose
                                                file</label>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Special Note </label>
                                        <textarea id="w3mission" rows="5" className="textarea"
                                                  placeholder="Please type in English. Do not include emojis."
                                                  onChange={this.handleDescriptionChange}></textarea>
                                    </div>
                                    <div className="form-group my-2">
                                        <button type="submit" className="btn btn-primary"
                                                onClick={this.submitRequest}>Submit
                                        </button>
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

export default MyAssignment;