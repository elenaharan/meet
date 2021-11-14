import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Event extends Component {
  state = {
    showDetails: false
  };

  handleOnClickButton = () => {
    if (this.state.showDetails === true) {
      this.setState({ showDetails: false });
    } else {
      this.setState({ showDetails: true });
    }
  };

  render() {
    const { event } = this.props;

    return (
      <div className="summary">
        <ul>
          <li className="event-summary"><b><i>{event.summary}</i></b></li>
          <li className="event-date">{event.start.dateTime}</li>
          <li className="event-location">{event.location}</li>
        </ul>
        {
          this.state.showDetails && (
          <ul>
            <li className="event-description"> {event.description} </li>
            <li className="event-email"><i>Contact email: </i>{event.organizer.email}</li>
          </ul>

          )
        }
        <Button className='details-btn' onClick={() => this.handleOnClickButton()}>
          {!this.state.showDetails ? 'Show Details' : 'Hide Details'}
        </Button>
        </div>
        )}
}

export default Event;
