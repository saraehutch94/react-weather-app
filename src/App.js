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
    <div class="whole-app">
      <Header />
      <div className="flex-section">{weatherComponents}</div>
      <Footer />
    </div>
  );
}

export default App;
