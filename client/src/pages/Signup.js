import React from "react";


function Signup() {
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
                        <form className="signup">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="email-input" placeholder="Email"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="password-input" placeholder="Password"></input>
                            </div>
                            <div style={{display: 'none'}} id="alert" className="alert alert-danger" role="alert">
                                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                <span className="sr-only">Error:</span> <span className="msg"></span>
                            </div>
                            <button type="submit" className="btn btn-default">Sign Up</button>
                        </form>
                        <br></br>
                        <p>Or log in <a href="/login">here</a></p>
                    </div>
                </div>
            </div>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script type="text/javascript" src="js/signup.js"></script>

        </div>
    );
}

export default Signup;
