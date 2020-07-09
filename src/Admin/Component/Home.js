import React, {Component} from 'react';
import Summary from "./summary";
import Oders from "./oders";
class Home extends Component {
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