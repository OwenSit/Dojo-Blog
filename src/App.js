import Home from "./Home";
import Navbar from "./Navbar";
import Content from "./Content";
import { useState, useEffect } from "react/cjs/react.development";

function App() {
  let count = 50;
  const person = { name: "Owen", age: 13 };
  const link = "https://www.songwenx.xyz";

  // create useState for the page title
  const [title, setTitle] = useState("Dojo Blog");

  // useEffect to keep track of the title chages
  // useEffect can only detect the changes of other pages' useState(limited to its own page)
  // add useEffce dependencies
  useEffect(() => {
    console.log("useEffect from App.js");
  }, [title]);
  return (
    <div className="App">
      {/* nesting the Navbar(.js) under the App(.js) */}
      <Navbar title={title} />
      <div className="content">
        <Home setTitle={setTitle} />
        <Content />
      </div>
    </div>
  );
}

export default App;
