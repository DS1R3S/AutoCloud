import React, { Component } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import UserRegistration from "./Pages/UserRegistration/UserRegistration";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CarProfile from "./Pages/CarProfile/CarProfile";
//import UserLogin from "./Pages/UserLogin/UserLogin";
//import CarProfile from "./Pages/CarProfile/CarProfile";


class App extends Component {
  onSubmit = fields => {
    console.log(fields);
  };
  submitCarForm = fields => {
    console.log(fields);
  };

  render() {
    return (
      <React.Fragment>
          {/* <CarProfile /> */}
          {/* <Dashboard /> */}
          {/* <UserRegistration onSubmit={fields => this.onSubmit(fields)} /> */}
        
        
         
          <CarProfile/>
          

      </React.Fragment>
    );
  }
}

export default App;
