import React, {Component} from 'react';

class MyAssignment extends Component {
    render() {
        return (
            <div className="height mx-5 my-5">
                <div className="card-deck">

                    <div className="card">
                            <div className="card-body">
                                <h4>Our Service </h4>

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
                            </div>
                    </div>

                    <div className="fromSize">
                        <div className="card-body">
                            <h5 className="card-title">Your Assignment ID is : AH/ST/08</h5>
                            <p className="card-text " >
                                    <div className=" my-4">
                                            <div className="row form-group">
                                                <div className="col">
                                                    <label for="exampleInputEmail1">First name</label>
                                                    <input type="text" className="form-control" id="input1" placeholder="First name" required/>
                                                </div>
                                                <div className="col">
                                                    <label for="exampleInputEmail1">Last name</label>
                                                    <input type="text" className="form-control" id="input2" placeholder="Last name"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control" id="input3" aria-describedby="emailHelp" placeholder="Enter email"/>
                                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Mobile Number</label>
                                                <div className="input-group mb-2 mr-sm-2">
                                                    <div className="input-group-prepend">
                                                    <div className="input-group-text">+94</div>
                                                    </div>
                                                    <input type="tel"  className="form-control" id="input4" placeholder="7x xxxxxxx" pattern="[0-9]{9}" maxlength="9"/>
                                                </div>
                                            </div>
                                            

                                            <div className="form-group my-4">
                                                <label for="exampleInputPassword1">Type of Assignment</label>
                                                <select className="custom-select"  id="input5">
                                                    <option value="">-Select Assignment Type-</option>
                                                    <option value="Web application">Web application</option>
                                                    <option value="Desktop application">Desktop application</option>
                                                    <option value="Android application">Android application </option>
                                                    <option value="Documentation related to IT">Documentation related to IT </option>
                                                </select>
                                            </div>
                                            <div className="form-group my-2">
                                                <label for="exampleInputPassword1">Assignment .pdf/.doc</label>
                                                <div className="custom-file mb-3">
                                                    <input type="file" className="custom-file-input" id="customFile" name="filename"/>
                                                    <label className="custom-file-label" for="customFile">Choose file</label>
                                                </div>
                                            </div>
                                            
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Special Note </label>
                                                <textarea id="w3mission" rows="5"  class="textarea" placeholder="Please type in English. Do not include emojis."></textarea>
                                            </div>
                                            <div class="form-group my-2">
                                                <button type="submit" class="btn btn-primary"   >Submit</button>
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