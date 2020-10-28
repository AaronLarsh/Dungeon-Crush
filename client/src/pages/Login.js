import React, { Component } from 'react';
const axios = require('axios').default;


class Login extends Component { 
    constructor(props) {
        super(props)
        this.state = {
        email: '', 
        password: ''
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
        return console.log("Please enter a username and/or password.");
        }

        this.loginUser(this.state.email, this.state.password);
            console.log(this.state.email);
            console.log(this.state.password)
        }
    loginUser(email, password) {
        axios.post('/api/login', {
            email: email,
            password: password
            })
            .then(function (res) {
                console.log(res)
            })
            .catch(function (error) {
                console.log(error);
            });
            axios.get("/members")
            .then(data => {
                console.log("of /members")
                console.log(data)
                window.location.replace(data.config.url)
                
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
                    <h2>Login Form</h2>
                    <form className="login" onSubmit={this.handleSubmit}> 
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email" value={this.state.email} onChange={this.handleEmail} name="email"/> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password" onChange={this.handlePassword} name="password"/> 
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                    </form> 

                    <br></br>
                    <p>Or sign up <a href="/">here</a></p>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default Login;
