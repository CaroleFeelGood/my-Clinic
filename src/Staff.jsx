import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Modal } from 'semantic-ui-react';
import CreateEmploye from './CreateEmploye';
class U_Staff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  openModal = () => {
    this.props.dispatch({
      type: 'open-modal',
      open: true
    });
    this.setState({ open: true });
  };

  render() {
    let resultStaff = this.props.staff.filter(employe => {
      if (employe.firstName.includes(this.props.query) || employe.lastName.includes(this.props.query) || employe.group.includes(this.props.query)) {
        return employe;
      }
    });
    return (
      <div className="staff">
        <Modal trigger={<Button onClick={this.openModal}>Create</Button>} open={this.props.open}>
          <Modal.Header>Create a new employe</Modal.Header>
          <Modal.Content>
            <CreateEmploye />
          </Modal.Content>
        </Modal>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Group</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {resultStaff.map((employe, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{employe.firstName + ' ' + employe.lastName}</Table.Cell>
                  <Table.Cell>{employe.group}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    staff: state.employees,
    open: state.open,
    query: state.searchQuery
  };
};

let Staff = connect(mapStateToProps)(U_Staff);
export default Staff;
