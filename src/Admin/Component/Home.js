import React, {Component} from 'react';
import Summary from "./summary";
import Oders from "./oders";
import firebase from "../../firebase/firebase";
class Home extends Component {
    constructor() {
        super();
        this.state = {
            TotalOrders: [],
        };
    }


    render() {
        return (
            <div>
                <Summary/>

                <Oders/>

            </div>
        );
    }
}

export default Home;