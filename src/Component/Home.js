import React, {Component} from 'react';
import Slideshow from "./slideshow";
import Articles from "./articles";
import Videos from "./videos";
import OurService from "./ourService";


class Home extends Component {
    render() {
        return (
            <div>
                <Slideshow/>
                <Articles/>
                <OurService/>
                <Videos/>
            </div>
        );
    }
}

export default Home;