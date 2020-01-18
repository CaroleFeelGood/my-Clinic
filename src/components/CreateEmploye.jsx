import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Dropdown } from 'semantic-ui-react';

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
      return this.props.staff[this.props.staff.length - 1].id + 10;
    };
    let newEmploye = {
      id: newid(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      group: this.state.group
    };

    this.props.dispatch({
      type: 'add-employe',
      employe: newEmploye
    });
  };

  inputChange = (e, value) => {
    console.log('value', value);
    let stateUpdate = {};
    if (!value) stateUpdate[e.target.name] = e.target.value;
    else stateUpdate[value.name] = value.value;
    this.setState(stateUpdate);
  };

  getGroup = () => {
    let groups = this.props.staff.map(employe => {
      return employe.group;
    });
    let newSet = [...new Set(groups)].sort();
    return newSet;
  };

  render() {
    let listGroup = this.getGroup();
    const stateOptions = listGroup.map((group, index) => ({
      key: listGroup[index],
      text: group,
      value: group
    }));

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
          <Dropdown placeholder="Group" name="group" value={this.state.group} selection options={stateOptions} onChange={this.inputChange} />
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
