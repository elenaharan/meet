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


  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      const eventsToShow = locationEvents.slice(0, this.state.numOfEvents);
      if (this.mounted) {
        this.setState({
          events: eventsToShow,
          currentLocation: location,
        });
      }
        
    });
  }


  updateEventCount = async (event) => {
    const newVal = event.target.value ? event.target.value : '32';
    await this.setState({
      numOfEvents: newVal
    });
    this.updateEvents(this.state.currentLocation, this.state.numOfEvents);
  };

  

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
   
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numOfEvents={this.state.numOfEvents} updateEventCount={this.updateEventCount} />
        <EventList events={this.state.events} />        
      </div>
    );
  }
}

export default App;
