import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Schedule from './pages/Schedule';
import Staff from './pages/Staff';
import fetch from './helpers/apiMocked.js';
import { connect } from 'react-redux';
class U_App extends Component {
  renderStaff = () => <Staff />;

  renderSchedule = () => <Schedule />;

  componentDidMount() {
    // call the mocked api => function import from apiMocked.js
    let apiUrl = 'https://chrono.com/api/doctors)';
    return fetch(`${apiUrl}/tasks`)
      .then(staffResponse => staffResponse.json())
      .then(staffData => {
        this.props.dispatch({
          type: 'set-employees',
          employees: staffData
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="global-container">
          <MainMenu />
          <Route exact={true} path="/schedule" render={this.renderSchedule}></Route>
          <Route exact={true} path="/staff" render={this.renderStaff}></Route>
          <Redirect to="/schedule" />
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = state => {
  return {
    staff: state.employees
  };
};

let App = connect(mapStateToProps)(U_App);
export default App;
