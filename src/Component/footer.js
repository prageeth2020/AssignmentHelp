import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="backgroundColor ">

                <footer className="page-footer font-small unique-color-dark footerbackground">

                    <div className="container text-center text-md-left mt-5 ">


                        <div className="row mt-3">


                            <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">

                                <h6 className="text-uppercase font-weight-bold footer">Assignment Help</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60px;"}}/>
                                <p>
                                    We are the best company in sri lanka who are giving the suppot to students for their assignments
                                    and projects. There are 100+ educational articles and 50+ youtube videos. You can get some knowledge from that.
                                </p>

                            </div>




                            <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4">


                                <h6 className="text-uppercase font-weight-bold footer">Useful links</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60px;"}}/>
                                <p>
                                    <Link to="/">Home</Link>
                                </p>
                                <p>
                                    <Link to="/myassignment">My Assignment</Link>
                                </p>
                                <p>
                                    <Link to="/">Request Articles</Link>
                                </p>


                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4">


                                <h6 className="text-uppercase font-weight-bold footer">Contact</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60px;"}}/>
                                <p className="pfooter">
                                    <i className="fas fa-home mr-3"></i>102/B,Temple Road,Homagama</p>
                                <p className="pfooter">
                                    <i className="fas fa-envelope mr-3"></i> assignmenthelp.soft@gmail.com</p>
                                <p className="pfooter">
                                    <i className="fas fa-phone mr-3"></i> +94 77 149 8471</p>


                            </div>


                        </div>


                    </div>

                    <div className="footer-copyright text-center py-3 bg-dark text-white">
                        © 2020 Copyright:SoftTechPLC
                    </div>


                </footer>

            </div>
        );
    }
}

export default Footer;