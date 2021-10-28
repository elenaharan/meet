import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
      numOfEvents: 32
  }

  handleNumberChanged = (event) => {
      const number = event.target.value;
      this.setState({
          numOfEvents: number
      });
      this.props.updateEventCount(event.target.value);
      }
  
  render() {
    return (
        <div className="NumberOfEvents">
            <input type="number" className="events-number" value={this.state.numOfEvents} onChange={(event) => this.handleNumberChanged(event)}
            />
        </div>
        );
  }
}
   

export default NumberOfEvents;
