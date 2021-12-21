import "./App.css";
import weatherArray from "./weatherData.js";
import WeatherForecast from "./components/WeatherForecast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

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
      <Main weatherComponents={weatherComponents} />
      <Footer />
    </>
  );
}

export default App;
