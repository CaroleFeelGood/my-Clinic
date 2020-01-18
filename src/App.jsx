import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MainMenu from './MainMenu';
import Schedule from './Schedule';
import Staff from './Staff';
import fetch from './apiMocked.js';
import { connect } from 'react-redux';
class U_App extends Component {
  constructor(props) {
    super(props);
  }
  renderStaff = () => {
    return <Staff />;
  };

  renderSchedule = () => {
    return <Schedule />;
  };

  componentDidMount() {
    // call the mocked api => function import from apiMocked.js
    let apiUrl = 'https://chrono.com/api/doctors)';
    return fetch(`${apiUrl}/tasks`)
      .then(staffResponse => staffResponse.json())
      .then(staffData => {
        this.props.dispatch({
          type: 'get-employees',
          employees: staffData
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render = () => {
    return (
      <BrowserRouter>
        <div className="global-container">
          <MainMenu />
          <Route exact={true} path="/" render={this.renderSchedule}></Route>
          <Route exact={true} path="/schedule" render={this.renderSchedule}></Route>
          <Route exact={true} path="/staff" render={this.renderStaff}></Route>
        </div>
      </BrowserRouter>
    );
  };
}

let mapStateToProps = state => {
  return {
    staff: state.employees
  };
};

let App = connect(mapStateToProps)(U_App);
export default App;
