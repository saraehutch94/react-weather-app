import "./Main.css";

function Main(props) {
  return (
    <main class="main-tag">
      <div class="main-div">{props.weatherComponents}</div>
    </main>
  );
}

export default Main;
