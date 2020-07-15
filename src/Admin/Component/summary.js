import React, {Component} from 'react';
import firebase from "../../firebase/firebase";

class Summary extends Component {
    constructor() {
        super();
        this.state = {
            NewOrders: [],
            TotalOrders: [],
            PendingOrders : [],
            CompleteOrders : [],
            Earn : '',
            Profit : ''
        };
    }

    componentDidMount() {

        var NOrders = [];
        var TOrders = [];
        var POrders = [];
        var COrders = [];
        var earn = 0;
        var profit = 0;

        firebase.database().ref("MyAssignment").once("value").then(snapshot => {
            snapshot.forEach(item => {
                TOrders.push(item.val()) ;
                if((item.val().Status) == "New") {
                    NOrders.push(item.val()) ;
                }
                if((item.val().Status) == "Accept") {
                    POrders.push(item.val()) ;
                }
                if((item.val().Status) == "Complete") {
                    COrders.push(item.val()) ;
                }

            });
            this.setState({
                NewOrders : NOrders,
                TotalOrders: TOrders,
                PendingOrders : POrders,
                CompleteOrders : COrders
            } ,()=>{
                console.log(this.state.NewOrders);
                console.log(this.state.TotalOrders);
                console.log(this.state.PendingOrders);
                console.log(this.state.CompleteOrders);
            })
            //this.forceUpdate();
        });



        firebase.database().ref("Earn").once("value").then(snapshot => {
            snapshot.forEach(item => {
                earn = (item.val().Earn) ;
            });
            this.setState({
                Earn : earn
            } ,()=>{
                console.log(this.state.Earn);

            })
            //this.forceUpdate();
        });

        firebase.database().ref("Profit").once("value").then(snapshot => {
            snapshot.forEach(item => {
                profit = (item.val().Profit) ;
            });
            this.setState({
                Profit : profit
            } ,()=>{
                console.log(this.state.Profit);

            })
            //this.forceUpdate();
        });


    }



    submitRequest = (event) => {
        localStorage.removeItem("AssignmenthelpLogin");
        window.location.reload();
    }
    render() {
        return (
            <div>
                <div className="my-2 mx-4">
                    <i className="fas fa-caret-right text-success mx-3"></i>
                    <label className="form-check-label" >Admin/dashboard</label>

                    <div className="form-check form-check-inline  loginAdmin">
                        <i className="fas fa-user text-secondary  mx-2"></i>
                        <label className="form-check-label text-secondary "  onClick={this.submitRequest}>logout</label>
                    </div>
                    <hr/>
                    <div className="row my-4 ">
                        <div className="col-sm-6">
                            <div className="card mb-3 img" >
                                <div className="row no-gutters ">
                                    <div className="col-md-4 text-center  bg1">
                                        <table className="verticle ">
                                            <tbody>
                                            <tr>
                                                <td className="align-middle ">
                                                    <h1>{this.state.NewOrders.length}</h1>
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
                        <div className="col-sm-6">
                            <div className="card mb-3 img" >
                                <div className="row no-gutters ">
                                    <div className="col-md-4 text-center bg2 ">
                                        <table className="verticle ">
                                            <tbody>
                                            <tr>
                                                <td className="align-middle ">
                                                    <h1>{this.state.TotalOrders.length}</h1>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Total Orders</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-sm-6">
                            <div className="card mb-3 img" >
                                <div className="row no-gutters ">
                                    <div className="col-md-4 text-center  bg3">
                                        <table className="verticle ">
                                            <tbody>
                                            <tr>
                                                <td className="align-middle ">
                                                    <h1>{this.state.PendingOrders.length}</h1>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Pending Orders</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card mb-3 img" >
                                <div className="row no-gutters ">
                                    <div className="col-md-4 text-center  bg4">
                                        <table className="verticle ">
                                            <tbody>
                                            <tr>
                                                <td className="align-middle ">
                                                    <h1>{this.state.CompleteOrders.length}</h1>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Complete Orders</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4 ">
                        <div className="col-sm-6">
                            <div className="card mb-3 img" >
                                <div className="row no-gutters ">
                                    <div className="col-md-4 text-center  bg5">
                                        <table className="verticle ">
                                            <tbody>
                                            <tr>
                                                <td className="align-middle ">
                                                    <h1>Rs.{this.state.Earn}</h1>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Total Earn</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card mb-3 img" >
                                <div className="row no-gutters ">
                                    <div className="col-md-4 text-center bg6 ">
                                        <table className="verticle ">
                                            <tbody>
                                            <tr>
                                                <td className="align-middle ">
                                                    <h1>Rs.{this.state.Profit}</h1>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Total Profit</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;