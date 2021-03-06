import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
      numOfEvents: 32,
      infoText: ''
  }

  handleNumberChanged = (event) => {
      const number = event.target.value;
      if (number <= 0 || number > 32) {
        return this.setState({
          numOfEvents: number,
          infoText: "Please enter a number between 1 and 32"
        });
      } else {
            this.setState({
                    numOfEvents: number,
                    infoText: ''
                });
            this.props.updateEventCount(event.target.value);
            }
        };    
    
  
  render() {
    return (
        <div>
            <ErrorAlert text={this.state.infoText} />
            <h4>Limit your search results</h4>
            <input type="number" className="events-number" value={this.state.numOfEvents} onChange={(e) => this.handleNumberChanged(e)}
            />
        </div>
        );
  }
}
   

export default NumberOfEvents;
