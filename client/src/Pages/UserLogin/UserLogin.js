import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './UserLogin.css';

/* global gapi */

class UserLogin extends Component {
	
  state = {
    userEmail: sessionStorage.getItem("email"),
    redirect: false
  }

  componentDidMount() {
    if(this.state.userEmail){
      this.setRedirect()
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/register" />;
    }
  };

  /*
  change = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  */
  

  //Added to remove cookies from browser
 removeCookies = () => {
  var res = document.cookie;
  var multiple = res.split(";");
  for (var i = 0; i < multiple.length; i++) {
    var key = multiple[i].split("=");
    document.cookie = key[0] + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
  }
 };	 
	 
  signOut = () => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("User signed out.");
    });
    this.removeCookies();
    sessionStorage.removeItem("email");
  };  

render() {
  return (
    <div id="registrationPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3>Welcome to </h3>
            <h1>Auto Cloud</h1>
            <div 
              onClick={this.setRedirect}
              className="g-signin2"
              id="google-btn"
              data-onsuccess="onSignIn"
            />
            {this.renderRedirect()}
            <br/>
            {/*Added signout button for testing purposes*/}
            <a href="/" onClick={this.signOut}>
              Sign out
							</a>
            {/* <p>Log in</p> */}
            {/*
              <form>
                <div className="form-group">
                  <input
                    name="username"
                    value={this.state.username}
                    onChange={e => this.change(e)}
                    type="email"
                    className="form-control"
                    placeholder="Username"
                    id="username"
                  />
                </div>

                <div className="form-group">
                  <input
                    name="password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                  />
                </div>

                <button
                  onClick={e => this.onSubmit(e)}
                  type="submit"
                  className="btn"
                >
                  Log In
                </button>
                <div class="g-signin2" data-onsuccess="onSignIn"></div>
              </form>
              <a href="/register">Register</a>
              */}
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default UserLogin;
