import React, { Component } from "react";
const axios = require('axios');





//need to fix the href for /logout
class Members extends Component {
    constructor(props) {
    super(props)
    this.state = {userName: ""}
    this.componentDidMount = this.componentDidMount.bind(this)

    };
    componentDidMount() {
        axios.get("/api/user_data")
            .then(data => {
                this.setState({ username:data.data.email});
                console.log(data.data.email)
            })
            .catch(err => console.log(err));
    }
    
render() {

    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="/logout">
                        Logout
                    </a>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Welcome <span className="member-name" username={this.state.username} ></span></h2>
                    </div>
                </div>
            </div>
            <div>            

            </div>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script type="text/javascript" src="js/members.js"></script>

        </div>
    );
}
}

export default Members;


