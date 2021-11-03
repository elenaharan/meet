import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import './nprogress.css';


class App extends Component {
  state = {
    events: [],
    locations: [],
    numOfEvents: 32,
    currentLocation: "all"
  }
  

  

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.numOfEvents), 
          locations: extractLocations(events)
        });
      }      
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    console.log("testing!!");
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      const { numOfEvents } = this.state;
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, numOfEvents)
        });
      }    
    });
  }


  updateEventCount = (eventCount) => {
    const { currentLocation} = this.state;
    console.log("current location", currentLocation);
    this.setState({
      numOfEvents: eventCount
    });
    this.updateEvents(currentLocation, eventCount);
  };

  updateCurrentLocation = (location) => {
    this.setState({
      currentLocation: location
    })
  }

  

  

  render() {

   
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} updateCurrentLocation={this.updateCurrentLocation}/>
        <NumberOfEvents numOfEvents={this.state.numOfEvents} updateEventCount={this.updateEventCount} />
        <EventList events={this.state.events} />        
      </div>
    );
  }
}

export default App;
