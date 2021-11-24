import Home from "./Home";
import Navbar from "./Navbar";
import Content from "./Content";
import Create from "./Create";
import { useState, useEffect } from "react/cjs/react.development";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    <Router>
      <div className="App">
        {/* nesting the Navbar(.js) under the App(.js) */}
        <Navbar title={title} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home title={title} setTitle={setTitle} />
            </Route>
            <Route exact path="/content">
              <Content />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
