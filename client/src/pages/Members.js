import React, { Component, Link } from "react";
import DC from "../components/dc";
const axios = require('axios');






//need to fix the href for /logout
class Members extends Component {
    constructor(props) {
    super(props)
    this.state = {
        userID: '',

    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.logout = this.logout.bind(this)

    }
    componentDidMount() {
        axios.get("/api/user_data")
            .then(data => {
                let cutString = cutAfterAt(data.data.email)
                this.setState({ userID:cutString})
                console.log(cutString)
            })
            .catch(err => console.log(err));

        axios.get("/api/user_data")
            .then(data => {
                console.log(data);
                let userID = cutAfterAt(data.data.id);
                console.log(userID);
                axios.get("/api/character"+ userID)
                .then(data => {
                    console.log("player data");
                    console.log(data);
                })
                .catch(err => console.log(err));

            })
            .catch(err => console.log(err));
        function cutAfterAt(str) {
            return str.split('@')[0];
        }

    }
    logout() {
            axios.get("/logout")
            .then(data => {
        })
        .catch(err => console.log(err));
        
    }

render() {

    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="/" onClick={this.logout}>
                        Logout
                    </a>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Welcome, <span className="member-name" >{this.state.userID}!</span></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                    {DC()}
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Members;


