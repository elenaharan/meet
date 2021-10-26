import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Event extends Component {
    state = {
        collapsed: true
    };

    handleOnClickShowMore = () => {
        this.setState({
            collapsed: false
        });
    };

    handleOnClickShowLess = () => {
        this.setState({
            collapsed: true
        });
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
              <Button className="showMore" onClick={this.handleOnClickShowMore}>Show details</Button>
              {this.state.collapsed === false && (
              <p className="event-description">{event.description}</p>
              )}
              {this.state.collapsed === false && (
              <Button className="showLess" onlick={() => this.handleOnClickShowLess()}>Hide details</Button>
              )}
            </div>  
          
        )
    }
}

export default Event;