import React, { Component } from 'react';

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

        return (
        <div className="summary">
          <ul>
            <li className="event-summary">Event summary</li>
            <li className="event-date"></li>
          </ul>
          <button className="showMore" onClick={this.handleOnClickShowMore}>Show details</button>
          {this.state.collapsed === false && (
              <p className="event-description"></p>
          )}
          {this.state.collapsed === false && (
              <button className="showLess" onlick={() => this.handleOnClickShowLess()}>Hide details</button>
          )}
        </div>
        )
    }
}

export default Event;