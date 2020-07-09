import React, { Component } from 'react'

export default class utils extends Component {

    static checkLoggedInUser() {
        var retrievedObject = localStorage.getItem('Assignmenthelp');
        if (retrievedObject != null) {
            var k = JSON.parse(retrievedObject);
            console.log("" + k.type);
            return k;
        } else {
            console.log("User not logged");
            return null;
        }
    }

    static isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
