import React, { Component } from 'react';
import Calendar from 'react-calendar';

class Schedule extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div className="schedule">
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}
export default Schedule;
