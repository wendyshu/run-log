import React from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../actions';

class WeatherJumbotron extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchWeather(this.props.place);
  }

  title() {
    if (this.props.weather) {
      return `${this.props.weather.location.city} ${this.props.weather.location.region}`;
    } else {
      return 'Weather';
    }
  }

  weather() {
    if (this.props.weather) {
      return `${this.props.weather.item.condition.temp}${this.props.weather.units.temperature} - ${this.props.weather.item.condition.text}`;
    } else {
      return '...loading';
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>{ this.title() } <span className="glyphicon glyphicon-cloud"/></h1>
        <p>{ this.weather() }</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather.results
  };
}

export default connect(mapStateToProps, { fetchWeather })(WeatherJumbotron);
