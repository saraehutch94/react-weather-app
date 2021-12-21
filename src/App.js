import "./App.css";
import weatherArray from "./weatherData.js";
import WeatherForecast from "./components/WeatherForecast";
import Header from "./components/Header";

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
    <>
      <Header />
      <section className="weather-app-sections">{weatherComponents}</section>
    </>
  );
}

export default App;
