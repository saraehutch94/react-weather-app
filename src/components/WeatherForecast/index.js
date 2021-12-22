import "./WeatherForecast.css";

function WeatherForecast(props) {
  return (
    <div className="weather">
      <img src={props.img} />
      <div>
        <div>Conditions</div>
        {props.conditions}
      </div>
      <div>
        <div>Time</div>
        {props.time}
      </div>
    </div>
  );
}

export default WeatherForecast;
