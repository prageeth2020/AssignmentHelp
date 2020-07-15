import React, {Component} from 'react';

class OurService extends Component {
    render() {
        return (
            <div className="bg-light p-2 my-4">
                <h2 className="text-center"><b className="text-primary">Our </b> Services</h2>
                <div className="row row-cols-1 row-cols-md-4 mx-1" style={{color: "gray"}}>
                    <div className="col mb-3">
                        <div className="my-4">
                            <div className="col text-center ">
                                <i className="fas fa-code fa-5x text-primary"></i>
                                <h6>Web Development</h6>
                            </div>

                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="my-4">
                            <div className="col text-center ">
                                <i className="fab fa-android fa-5x text-success"></i>
                                <h6>Andriod Development</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="my-4">
                            <div className="col text-center ">
                                <i className="fas fa-desktop fa-5x text-dark"></i>
                                <h6>Desktop Applications</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="my-4">
                            <div className="col text-center ">
                                <i className="fas fa-file-pdf fa-5x text-secondary"></i>
                                <h6>Documentation</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="my-4">
                            <div className="col text-center ">
                                <i className="fas fa-network-wired fa-5x text-primary"></i>
                                <h6>Networking Assignment</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="my-4">
                            <div className="col text-center ">
                                <i className="fas fa-file-pdf fa-5x text-secondary"></i>
                                <h6>B.Management Documentation</h6>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        );
    }
}

export default OurService;