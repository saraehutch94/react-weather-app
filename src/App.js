import "./App.css";
import weatherArray from "./weatherData.js";
import WeatherForecast from "./components/WeatherForecast";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <div className="flex-section">
        <div className="weather-app-sections">{weatherComponents}</div>
      </div>
      <Footer />
    </>
  );
}

export default App;
