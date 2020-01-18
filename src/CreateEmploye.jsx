import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';

class U_CreateEmploye extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      group: ''
    };
  }

  submit = () => {
    let newid = () => {
      this.props.staff.sort();
      return this.props.staff[this.props.staff.length - 1] + 10;
    };
    let newEmploye = {
      id: newid(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      group: this.state.group
    };

    let newtStaffData = this.props.staff;
    newtStaffData.push(newEmploye);
    this.props.dispatch({
      type: 'add-employees',
      employees: newtStaffData,
      open: false
    });
  };

  inputChange = e => {
    let stateUpdate = {};
    stateUpdate[e.target.name] = e.target.value;
    this.setState(stateUpdate);
  };

  render() {
    return (
      <Form onSubmit={this.submit}>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.inputChange} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.inputChange} />
        </Form.Field>
        <Form.Field>
          <label>Group</label>
          <input placeholder="Group" name="group" value={this.state.group} onChange={this.inputChange} />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

let mapStateToProps = state => {
  return {
    staff: state.employees,
    open: state.open
  };
};

let CreateEmploye = connect(mapStateToProps)(U_CreateEmploye);
export default CreateEmploye;
