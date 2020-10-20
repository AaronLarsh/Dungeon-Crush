import React, { Component } from "react";
const axios = require('axios').default;


function Login() {


            // Getting references to our form and inputs
            const loginForm = document.querySelector(".form-group");
            const emailInput = document.querySelector("input#email-input");
            const passwordInput = document.querySelector("input#password-input");
        
            // When the form is submitted, we validate there's an email and password entered
            handleFormSubmit = event => {
                event.preventDefault();
                API.getDogsOfBreed(this.state.search)
                    .then(res => {
                        if (res.data.status === "error") {
                        throw new Error(res.data.message);
                        }
                        this.setState({ results: res.data.message, error: "" });
                    })
                    .catch(err => this.setState({ error: err.message }));
                };

            loginForm.addEventListener("submit", event => {
            event.preventDefault();
            const userData = {
                email: emailInput.val().trim(),
                password: passwordInput.val().trim()
            };
            
            if (!userData.email || !userData.password) {
                return;
            };

            // If we have an email and password we run the loginUser function and clear the form
            loginUser(userData.email, userData.password);
            emailInput.val("");
            passwordInput.val("");
            });
        
            // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
            function loginUser(email, password) {
                axios.post('/api/login', {
                    email: email,
                    password: password
                    })
                    .then(function () {
                        window.location.replace("/members");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }


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
                    <form className="login">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email"></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password"></input>
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

export default Login;
