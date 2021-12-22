import "./WeatherForecast.css";

function WeatherForecast(props) {
  return (
    <div className="weather">
      <img src={props.img} />
      <div className="weather-flex">
        <div className="weather-titles">Conditions</div>
        {props.conditions}
      </div>
      <hr />
      <div className="weather-flex">
        <div className="weather-titles">Time</div>
        {props.time}
      </div>
    </div>
  );
}

export default WeatherForecast;
