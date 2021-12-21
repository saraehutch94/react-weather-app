function WeatherForecast(props) {
  return (
    <div className="weather">
      <img src={props.img} />
      <p>
        <span>Conditions:</span>
        {props.conditions}
      </p>
      <p>
        <span>Time:</span>
        {props.time}
      </p>
    </div>
  );
}
