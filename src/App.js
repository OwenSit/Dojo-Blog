import "./App.css";
import Home from "./Home";
import Create from "./Create";

function App() {
  const title = "Dojo Blog";
  let count = 50;
  const person = { name: "Owen", age: 13 };
  const link = "https://www.songwenx.xyz";

  return (
    <div className="App">
      {/* nesting the Navbar(.js) under the App(.js) */}
      <div className="content">
        <h1>{title}</h1>
        <Home />
        <span> </span>
        <Create />
        <p>you have {count} hits</p>
        <p>
          your name is {person.name} and you're {person.age} years old
        </p>
        <a href={link}>my webpage</a>
      </div>
    </div>
  );
}

export default App;
