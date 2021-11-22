import Home from "./Home";
import Navbar from "./Navbar";
import Content from "./Content";

function App() {
  let count = 50;
  const person = { name: "Owen", age: 13 };
  const link = "https://www.songwenx.xyz";

  return (
    <div className="App">
      {/* nesting the Navbar(.js) under the App(.js) */}
      <Navbar />
      <div className="content">
        <Home />
        <Content />
      </div>
    </div>
  );
}

export default App;
