import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleOnClickButton = () => {
    this.setState((prevState) => ({ collapsed: !prevState.collapsed }));
  };

  render() {
    const { event } = this.props;

    return (
      <div className="summary">
        <ul>
          <li className="event-summary">{event.summary}</li>
          <li className="event-date">{event.start.dateTime}</li>
          <li className="event-location">{event.location}</li>
        </ul>
        <Button className="showMore" onClick={this.handleOnClickButton}>
          Show details
        </Button>
        {this.state.collapsed === false && (
          <p className="event-description">{event.description}</p>
        )}
        {this.state.collapsed === false && (
          <Button
            className="showLess"
            onClick={() => this.handleOnClickButton()}
          >
            Hide details
          </Button>
        )}
      </div>
    );
  }
}

export default Event;
