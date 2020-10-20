import React from "react";


function Members() {
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
                <h2>Welcome <span className="member-name"></span></h2>
            </div>
            <div>            
                <a href="/dungeoncrush">
                start game
                </a>
                </div>

            </div>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script type="text/javascript" src="js/members.js"></script>

        </div>
    );
}

export default Members;
