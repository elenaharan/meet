import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import { NetworkAlert } from "./Alert";
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numOfEvents: 32,
    currentLocation: "all",
    showWelcomeScreen: undefined
  }
  

  

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ 
            events: events.slice(0, this.state.numOfEvents), 
            locations: extractLocations(events)
          });
        }
        if (!navigator.onLine) {
          this.setState({
            NetworkAlertText: 'You are not currently connected to the Internet'
            });
          } else {
            this.setState({
              NetworkAlertText: ''
            });
          };
      });
    }   
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
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
  const { NetworkAlertText } = this.state;
  if (this.state.showWelcomeScreen === undefined) return <div className = "App" />
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} updateCurrentLocation={this.updateCurrentLocation}/>
        <NumberOfEvents numOfEvents={this.state.numOfEvents} updateEventCount={this.updateEventCount} />
        <EventList events={this.state.events} />        
        <NetworkAlert text={NetworkAlertText} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
