import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="fooerBack1 p-3 text-white">
                <footer class="page-footer font-small blue pt-4">

                    <div class="container-fluid text-center text-md-left">

                        <div class="row">

                            <div class="col-md-6 mt-md-0 mt-3">

                                <h5 class="text-uppercase">ABOUT US</h5>
                                <p className="text-justify">When you exhausted with your assignments projects, don't kick it off. We are here to help you. Check it out our services.

                                    Web developing, android applications, documentations and etc.

                                    There are plenty of smart developers we hired. Don't be afraid, handover your assignments to us and we are here to do it in a considerable price.


                                </p>

                            </div>

                            <hr class="clearfix w-100 d-md-none pb-3"/>

                                <div class="col-md-3 mb-md-0 mb-3">


                                    <h5 class="text-uppercase">CONTACT US</h5>

                                    <ul class="list-unstyled">
                                        <li>
                                            <div className="form-check form-check-inline my-2">
                                                <i className="fab fa-facebook-f mx-2"></i>
                                                <label className="form-check-label" htmlFor="inlineCheckbox1">www.facebook.com/assignmenthelp/</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check form-check-inline my-2">
                                                <i className="fab fa-facebook-f mx-2"></i>
                                                <label className="form-check-label" htmlFor="inlineCheckbox1">www.facebook.com/assignmenthelp/</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check form-check-inline my-2">
                                                <i className="fab fa-facebook-f mx-2"></i>
                                                <label className="form-check-label" htmlFor="inlineCheckbox1">www.facebook.com/assignmenthelp/</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check form-check-inline my-2 text-light">
                                                <i className="fab fa-facebook-f mx-2"></i>
                                                <label className="form-check-label " htmlFor="inlineCheckbox1">www.facebook.com/assignmenthelp/</label>
                                            </div>
                                        </li>
                                    </ul>

                                </div>



                                <div class="col-md-3 mb-md-0 mb-3">

                                    <h5 class="text-uppercase">Links</h5>

                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="#!">Home</a>
                                        </li>
                                        <li>
                                            <a href="#!">My Assignment</a>
                                        </li>
                                        <li>
                                            <a href="#!">Request Article</a>
                                        </li>

                                    </ul>

                                </div>


                        </div>


                    </div>




                </footer>


            </div>
        );
    }
}

export default Footer;