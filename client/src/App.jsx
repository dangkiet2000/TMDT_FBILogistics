import PopupLogin from "./components/PopupLogin/PopupLogin";
import "./scss/index.scss";

function App() {
  return (
    <div className="App">
      Hello
      <input type="checkbox" className="close-overplay" id="toggle" hidden />
      <label className="overplay" htmlFor="toggle"></label>
      <div className="wrapper">
        <PopupLogin />
      </div>
    </div>
  );
}

export default App;
