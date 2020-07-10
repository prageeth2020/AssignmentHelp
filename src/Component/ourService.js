import React, {Component} from 'react';

class OurService extends Component {
    render() {
        return (
            <div className="bg-light p-2 my-4">

                    <div className="row">
                        <div className="col text-center ">
                            <i className="fas fa-code fa-5x text-primary"></i>
                            <h4>Web Development</h4>
                        </div>
                        <div className="col text-center ">
                            <i className="fab fa-android fa-5x text-success"></i>
                            <h4>Andriod Development</h4>
                        </div>
                        <div className="col text-center ">
                            <i className="fas fa-desktop fa-5x text-dark"></i>
                            <h4>Desktop Applications</h4>
                        </div>
                        <div className="col text-center ">
                            <i className="fas fa-file-pdf fa-5x text-secondary"></i>
                            <h4>Documentation</h4>
                        </div>
                        <div className="col text-center ">
                            <i className="fas fa-network-wired fa-5x text-primary"></i>
                            <h4>Networking Assignment</h4>
                        </div>

                    </div>

            </div>
        );
    }
}

export default OurService;