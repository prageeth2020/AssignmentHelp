import React, {Component} from 'react';
import firebase from "../../firebase/firebase";
import utils from "../../utils/utils";
import Notifications from "./Notifications";
class Oders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            TotalOrders: [],

            displayRejectedBox : false ,
            displayAcceptBox : false ,
            displayEmailBox : false ,
            displayLoadingBox : false ,


            rejectedMessageBox : '',
            itemIdDelete : '',
            acceptMessageBox1 : '',
            acceptMessageBox2 : '',
            acceptMessageBox3 : '',
            itemIdAccept : '',
            emailMessageBox : '',
            itemIdEmail : '',

        };

        this.rejectMessage = this.rejectMessage.bind(this);
        this.emailMessage = this.emailMessage.bind(this);
        this.acceptMessage = this.acceptMessage.bind(this);
        this.loading = this.loading.bind(this);

        this.reject = this.reject.bind(this);
        this.accept = this.accept.bind(this);
        this.email = this.email.bind(this);

        this.handlerejectedMessageBoxChange = this.handlerejectedMessageBoxChange.bind(this);
        this.handleacceptMessageBox1Change = this.handleacceptMessageBox1Change.bind(this);
        this.handleacceptMessageBox2Change = this.handleacceptMessageBox2Change.bind(this);
        this.handleacceptMessageBox3Change = this.handleacceptMessageBox3Change.bind(this);
        this.handleemailMessageBoxChange = this.handleemailMessageBoxChange.bind(this);

    }

    rejectMessage(item) {
        console.log(item);
        this.setState({displayRejectedBox: !this.state.displayRejectedBox , itemIdDelete : item+9});
    }
    completeMessage(item) {
        this.loading();
        var countCompleteOrders = 1;
        firebase.database().ref("CompleteOrders").once("value").then(snapshot => {
            snapshot.forEach(item => {
                countCompleteOrders = countCompleteOrders + 1;
            });
            firebase.database().ref("CompleteOrders").child(countCompleteOrders).set({
                orderID : item+9,
            }).then(function (res) {
                //window.location.reload();
            });
        });

        firebase.database().ref("MyAssignment").child(item+9).set({
            FirstName : this.state.TotalOrders[item].FirstName,
            LastName : this.state.TotalOrders[item].LastName,
            Email : this.state.TotalOrders[item].Email,
            Type : this.state.TotalOrders[item].Type,
            MobileNumber : this.state.TotalOrders[item].MobileNumber,
            Description : this.state.TotalOrders[item].Description,
            Status : "Complete",
            fileURL : this.state.TotalOrders[item].fileURL,
            Deadlines : this.state.TotalOrders[item].Deadlines
        }).then(function (res) {
            //window.location.reload();
        });

        var id = (item + 9);
        var earnP = 0;
        var profitP = 0;

        var earnR = 0;
        var profitR = 0;
        firebase.database().ref("PendingOrders").once("value").then(snapshot => {
            snapshot.forEach(result => {
                if(result.val().orderID == id){
                    earnR = result.val().Earn;
                    profitR = result.val().Profit;
                }
            });
        }).then(function () {
                firebase.database().ref("Earn").once("value").then(snapshot => {
                    snapshot.forEach(result => {
                        earnP = result.val().Earn;
                    });
                }).then(function () {
                    firebase.database().ref("Profit").once("value").then(snapshot => {
                        snapshot.forEach(result => {
                            profitP = result.val().Profit;
                        });
                    }).then(function () {
                        //alert(earnP + " " + profitP + " " + earnR + " " + profitR);
                        var TotEarn = parseInt(earnR, 10) + parseInt(earnP, 10);
                        var TotProfit = parseInt(profitP, 10) + parseInt(profitR, 10);

                        firebase.database().ref("Earn").child("1").set({
                            Earn : TotEarn,
                        }).then(function (res) {
                            firebase.database().ref("Profit").child("1").set({
                                Profit : TotProfit,
                            }).then(function (res) {
                                window.location.reload();
                            });
                        });
                    });
                });
        });


    }
    acceptMessage(item) {

        this.setState({displayAcceptBox: !this.state.displayAcceptBox , itemIdAccept : item+9});
    }
    emailMessage(item) {
        this.setState({displayEmailBox: !this.state.displayEmailBox , itemIdEmail : item+9});
    }
    loading() {
        this.setState({displayLoadingBox: !this.state.displayLoadingBox });
    }

    handlerejectedMessageBoxChange(e) {
        this.setState({ rejectedMessageBox: e.target.value });
    }
    handleacceptMessageBox1Change(e) {
        this.setState({ acceptMessageBox1: e.target.value });
    }
    handleacceptMessageBox2Change(e) {
        this.setState({ acceptMessageBox2: e.target.value });
    }
    handleacceptMessageBox3Change(e) {
        this.setState({ acceptMessageBox3: e.target.value });
    }
    handleemailMessageBoxChange(e) {
        this.setState({ emailMessageBox: e.target.value });
    }

    reject(e){
        if(e.keyCode == 13){
            this.loading();
            this. rejectMessage();
            firebase.database().ref("MyAssignment").child(this.state.itemIdDelete).set({
                FirstName : this.state.TotalOrders[this.state.itemIdDelete - 9].FirstName,
                LastName : this.state.TotalOrders[this.state.itemIdDelete - 9].LastName,
                Email : this.state.TotalOrders[this.state.itemIdDelete - 9].Email,
                Type : this.state.TotalOrders[this.state.itemIdDelete - 9].Type,
                MobileNumber : this.state.TotalOrders[this.state.itemIdDelete - 9].MobileNumber,
                Description : this.state.TotalOrders[this.state.itemIdDelete - 9].Description,
                Status : "Reject",
                fileURL : this.state.TotalOrders[this.state.itemIdDelete - 9].fileURL,
                Deadlines : this.state.TotalOrders[this.state.itemIdDelete - 9].Deadlines
            }).then(function (res) {
                window.location.reload();
            });
        }
    }
    accept(e){
        if(e.keyCode == 13){
            //alert(this.state.TotalOrders[this.state.itemIdAccept - 9].Status);
            this.loading();
            this.acceptMessage();

            var countPendingOrders = 1;
            var orderID = this.state.itemIdAccept;
            firebase.database().ref("PendingOrders").once("value").then(snapshot => {
                snapshot.forEach(item => {
                    countPendingOrders = countPendingOrders + 1;
                });
                firebase.database().ref("PendingOrders").child(countPendingOrders).set({
                    orderID : orderID,
                    Earn : this.state.acceptMessageBox1,
                    Profit : this.state.acceptMessageBox2,
                    HandOverDate : this.state.acceptMessageBox3
                }).then(function (res) {
                    //window.location.reload();
                });
            });

            firebase.database().ref("MyAssignment").child(orderID).set({
                FirstName : this.state.TotalOrders[orderID-9].FirstName,
                LastName : this.state.TotalOrders[orderID-9].LastName,
                Email : this.state.TotalOrders[orderID-9].Email,
                Type : this.state.TotalOrders[orderID-9].Type,
                MobileNumber : this.state.TotalOrders[orderID-9].MobileNumber,
                Description : this.state.TotalOrders[orderID-9].Description,
                Status : "Accept",
                fileURL : this.state.TotalOrders[orderID-9].fileURL,
                Deadlines : this.state.TotalOrders[orderID-9].Deadlines
            }).then(function (res) {
                window.location.reload();
            });




        }
    }
    email(e){
        if(e.keyCode == 13){
            // alert(this.state.rejectedMessageBox, e.target.value);
            alert(this.state.itemIdEmail + "Email");
            // put the login here
        }
    }
    componentDidMount()  {
        var TOrders = [];
        firebase.database().ref("MyAssignment").once("value").then(snapshot => {
            snapshot.forEach(item => {
                TOrders.push(item.val()) ;

            });
            TOrders = TOrders.reverse();
            this.setState({
                TotalOrders: TOrders,
            } ,()=>{
                console.log(this.state.TotalOrders);
            })
            //this.forceUpdate();
        });
    }
    lable(item) {
        if(this.state.TotalOrders[item].Status == "New"){
            return(
                <span className="badge badge-pill badge-success mx-2">New</span>
            );
        }
        if(this.state.TotalOrders[item].Status == "Accept"){
            return(
                <span className="badge badge-pill badge-warning mx-2">Accept</span>
            );
        }
        if(this.state.TotalOrders[item].Status == "Complete"){
            return(
                <span className="badge badge-pill badge-primary mx-2">Complete</span>
            );
        }
    }


    buttons(item){

        if(this.state.TotalOrders[item].Status == "New" && utils.checkLoggedInUser().type == "AdminType1") {
            return (
                <div>
                    <div className="form-check form-check-inline my-2">
                        <button className="btn btn-success" onClick={this.acceptMessage.bind(this, item)}>Accept</button>
                        <button className="btn btn-danger mx-2"  onClick={this.rejectMessage.bind(this, item)}>Reject</button>
                        {this.state.displayLoadingBox &&
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                    </div>

                    {this.state.displayRejectedBox &&
                    <div className="my-2">
                        <div className="alert alert-danger alert-dismissible fade show cntr" role="alert">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter The Reason...."
                                       onChange={this.handlerejectedMessageBoxChange}
                                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                                       onKeyDown={this.reject}/>

                            </div>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"
                                    onClick={this.rejectMessage}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>

                    }

                    {this.state.displayEmailBox &&
                    <div className="my-2">
                        <div className="alert alert-primary alert-dismissible fade show cntr" role="alert">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter You Message Here...."
                                       onChange={this.handleemailMessageBoxChange}
                                       aria-label="Recipient's username" aria-describedby="basic-addon2" onKeyDown={this.email}/>

                            </div>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"  onClick={this.emailMessage}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    }
                    {this.state.displayAcceptBox &&
                    <div className="my-2">
                        <div className="alert alert-success alert-dismissible fade show cntr" role="alert">
                            <div className="input-group">
                                <input type="text" className="form-control mx-2" placeholder="Earn"
                                       onChange={this.handleacceptMessageBox1Change}
                                       aria-label="Recipient's username" aria-describedby="basic-addon2" onKeyDown={this.accept}/>
                                <input type="text" className="form-control mx-2" placeholder="Profit"
                                onChange={this.handleacceptMessageBox2Change}
                                aria-label="Recipient's username" aria-describedby="basic-addon2" onKeyDown={this.accept}/>

                                <input type="date" className="form-control mx-2" placeholder="Enter You Message Here...."
                                onChange={this.handleacceptMessageBox3Change}
                                aria-label="Recipient's username" aria-describedby="basic-addon2" onKeyDown={this.accept}/>

                            </div>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"  onClick={this.acceptMessage}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    }
                </div>



            );
        }
        if(this.state.TotalOrders[item].Status == "Accept" && utils.checkLoggedInUser().type == "AdminType1") {
            return (
                <div>
                    <div className="form-check form-check-inline my-2">
                        <button className="btn btn-primary" onClick={this.completeMessage.bind(this, item)}>Complete</button>
                       {this.state.displayLoadingBox &&
                        <div className="spinner-border mx-2" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        }
                    </div>

                    {this.state.displayEmailBox &&
                    <div className="my-2">
                        <div className="alert alert-primary alert-dismissible fade show cntr" role="alert">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter You Message Here...."
                                       onChange={this.handleemailMessageBoxChange}
                                       aria-label="Recipient's username" aria-describedby="basic-addon2" onKeyDown={this.email}/>

                            </div>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"  onClick={this.emailMessage}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    }

                </div>
            );
        }

    }

    render() {
        return (
            <div>
                {
                    this.state.TotalOrders.map((field, key) =>

                            <div className=" mx-4">
                                <div className="shadow  mb-5 bg-white rounded">
                                    <div className="row">
                                        <div className="col-9 p-3">
                                            <div className={field.Status}>
                                                <div className="form-check form-check-inline">
                                                    <h5 className="mx-1">{field.Type}</h5>
                                                    {
                                                        this.lable(key)
                                                    }
                                                </div>
                                                <h5 className="mx-1" ></h5>
                                                <i className="fas fa-calendar-alt mx-2"></i>
                                                <label className="form-check-label" htmlFor="inlineCheckbox1">{field.Deadlines}</label>

                                            </div>
                                            <div className="my-1 mx-2">
                                                A <b>{field.Type}</b> was published by <b>{field.FirstName} {field.LastName} </b> and u can contact the client by <b>{field.MobileNumber} </b>
                                                or use the email address <b className="text-primary emailH" onClick={this.emailMessage.bind(this, field.Email)}>{field.Email} </b> to contact.
                                            </div>
                                            <div className="my-1 mx-2">
                                                {field.Description}
                                            </div>
                                            <div className="my-1 mx-2">
                                                {
                                                    this.buttons(key)
                                                }

                                            </div>
                                        </div>
                                        <div className="col-3 text-center cntr " >
                                            <div className="col text-center align-middle" >
                                                <img className="card-img-top" src={require('./pdf2.png')} style={{width: "8rem"}} alt="PDF"/>
                                                <br/> <a href={field.fileURL}>Download Now</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                    )
                }
            </div>



        );
    }
}

export default Oders;