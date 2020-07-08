import React, {Component} from 'react';
import Slideshow from "./slideshow";
import Articles from "./articles";
import Videos from "./videos";



class Home extends Component {
    render() {
        return (
            <div>
                <Slideshow/>
                <Articles/>
                <Videos/>
            </div>
        );
    }
}

export default Home;