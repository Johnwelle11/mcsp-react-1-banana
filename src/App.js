import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h2>My List</h2>
      <MyList todos={["Milk", "Jerky", "Maybe sleep"]} />
    </div>
  );
}

var MyList = (props) => {
  var onListItemClick = (event) => {
    console.log("I got clicked");
  };

  return (
    <ul>
      <li onClick={onListItemClick}>{props.todos[0]}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  );
};

export default App;
