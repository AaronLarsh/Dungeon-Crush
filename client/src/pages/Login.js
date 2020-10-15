import React from "react";


function Login() {
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

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript" src="js/login.js"></script>

    </div>
        );
}

export default Login;
