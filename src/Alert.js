import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
        };
    }

    render() {
        return (
          <div className="Alert">
              <p style={this.getStyle()}>{this.props.text}</p>
          </div> 
        )
    }
}

//Incorrect city
class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'blue';
    }
getStyle = () => {
    return {
      color: this.color,
      //margin: '-15px',
      //padding: '0px 10px'
    };   
}
}

//Incorrect number
class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
    }
getStyle = () => {
    return {
        color: this.color,
        flex: 1,
        padding: '20px',
        margin: '87px',
        marginLeft: '420px'
    };
}
}

//No network
class NetworkAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#FFFF00';
    }
}

export { InfoAlert, ErrorAlert, NetworkAlert };