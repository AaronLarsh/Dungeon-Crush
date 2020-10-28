import React, { Component } from 'react';
const axios = require('axios').default;



class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
        email: '', 
        password: '',
        }
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleEmail(e) {
        this.setState({
        email: e.target.value
        })
    }
    handlePassword(e) {
        this.setState({
        password: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.email || !this.state.password) {
        return;
        }

        this.signUpUser(this.state.email, this.state.password);
            console.log(this.state.email);
            console.log(this.state.password)
        }
    signUpUser(email, password) {
        axios.post('/api/signup', {
            email: email,
            password: password
            })
            .then(function () {
                let userID;
                console.log("of res")
                axios.get("/api/user_data")
                .then(data => {
                    console.log(data)
                    userID = data.data.id;
                    console.log(userID)

                    let name = data.data.email;
                    console.log(name)

                    axios.post("/api/character", {
                        highScore: 0,
                        userID: userID,
                        })
                        .then(function (res) {
                            console.log(res)
                            window.location.replace("/members")
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        }

    render (){
    return (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                </div>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Sign Up Form</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email" value={this.state.email} onChange={this.handleEmail} name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password" value={this.state.password} onChange={this.handlePassword} name="password" />
                        </div>
                        <div style={{display: 'none'}} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg"></span>
                        </div>
                        <input type="submit" value="Submit" />
                    </form>

                    <br></br>
                    <p>Have an account already? log in <a href="/login">here</a></p>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default Signup;