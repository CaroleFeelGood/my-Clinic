import React, { Component } from 'react';
import { Menu, Input, Label } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class U_MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //menu by default
      activeItem: 'schedule',
      countEmployees: 0
    };
  }

  handleQuery = evt => {
    this.props.dispatch({
      type: 'query',
      search: evt.target.value
    });
  };

  render() {
    return (
      <Menu pointing vertical className="mainMenu">
        <Menu.Item as={NavLink} to="/schedule" name="schedule" activeClassName="active" className="firstMenu">
          Schedule
        </Menu.Item>
        <Menu.Item as={NavLink} to="/staff" name="staff" activeClassName="active">
          <Label>{this.props.staff.length}</Label>
          Staff
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" onChange={this.handleQuery} value={this.props.query} />
        </Menu.Item>
      </Menu>
    );
  }
}

let mapStateToProps = state => {
  return {
    staff: state.employees,
    query: state.searchQuery
  };
};

let MainMenu = connect(mapStateToProps)(withRouter(U_MainMenu));
export default MainMenu;
