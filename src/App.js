import "./App.css";
import weatherArray from "./weatherData.js";
import WeatherForecast from "./components/WeatherForecast";

const weatherComponents = weatherArray.map((object, index) => {
  return (
    <WeatherForecast
      key={index}
      img={object.img}
      conditions={object.conditions}
      time={object.time}
    />
  );
});

function App() {
  return (
    <div>
      <section className="weather-app-sections">{weatherComponents}</section>
    </div>
  );
}

export default App;
