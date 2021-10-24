import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        numOfEvents: 32,
    };
    
    handleInputChange = (event) => {
        this.setState({
            numOfEvents: event,
        });
    };


   render() {
       const numOfEvents = this.state.numOfEvents;
       return (
       <div className="NumberOfEvents">
           <input type="number" className="events-number" value={numOfEvents} onChange={(event) => this.handleInputChange(event.target.value)}/>
       </div>
       );
   } 
}

export default NumberOfEvents;
