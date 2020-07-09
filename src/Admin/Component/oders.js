import React, {Component} from 'react';

class Oders extends Component {
    render() {
        return (
            <div className="my-2 mx-4">
                <div className="col-sm-12">
                    <div className="card mb-3 img" >
                        <div className="row no-gutters ">
                            <div className="col-md-4 text-center  bg1">
                                <table className="verticle ">
                                    <tbody>
                                    <tr>
                                        <td className="align-middle ">
                                            <h1>20</h1>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">New Orders</h5>
                                    <p className="card-text">This section will show you that how many new orders are there
                                        in the system now. Please accept or decline new requests.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Oders;