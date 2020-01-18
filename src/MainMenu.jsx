import React, { Component } from 'react';
import { Menu, Input, Label } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import fetch from './apiMocked.js';

class U_MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //menu by default
      activeItem: 'schedule',
      countEmployees: 0
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    //for navigation
    this.props.history.push('/' + name);
  };

  handleQuery = evt => {
    // if (evt.target.value !== '')
    this.props.dispatch({
      type: 'query',
      search: evt.target.value
    });
  };

  componentDidUpdate = prevProps => {
    //try to force the rerender afet the props is changed
    // this.forceUpdate();
    if (this.props.staff.length !== prevProps.staff.length) {
      this.setState({ countEmployees: this.props.staff.length });
    }
  };

  render = () => {
    let activeItem = this.state;
    //in order to activ staffMenu when the oage is restarted in /staff link
    if (this.props.location.pathname.replace('/', '') === 'staff') activeItem = 'staff';
    return (
      <Menu pointing vertical className="mainMenu">
        <Menu.Item name="schedule" active={activeItem === 'schedule'} className="firstMenu" onClick={this.handleItemClick}>
          Schedule
        </Menu.Item>
        <Menu.Item name="staff" active={activeItem === 'staff'} onClick={this.handleItemClick}>
          <Label>{this.props.staff.length}</Label>
          Staff
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" onChange={this.handleQuery} value={this.props.query} />
        </Menu.Item>
      </Menu>
    );
  };
}

let mapStateToProps = state => {
  return {
    staff: state.employees,
    query: state.searchQuery
  };
};

let MainMenu = connect(mapStateToProps)(withRouter(U_MainMenu));
export default MainMenu;
