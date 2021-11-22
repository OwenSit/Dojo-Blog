import { useState } from "react"; // we intend to use the react hook

let name = "Owen";
let like = 0;
const Home = () => {
  // useState variable
  const [likeNum, setLike] = useState(like);
  const [blog, setBlog] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  // create a func that will be linked with the button
  const handleClick = () => {
    like += 1;
    setLike(like);
    console.log(`${likeNum} people have liked this page`);
  };

  const handleClickAgain = (name) => {
    console.log(`hello ${name}!`);
    alert(`hello, ${name}!`);
  };

  return (
    <div className="home">
      <h2>Welcome to Dojo Blog!</h2>
      <h4>{likeNum} people have liked this page</h4>
      <button onClick={handleClick}>Like!</button>
      <button
        onClick={(e) => {
          // e stands for the event log
          console.log("Hello, you've click the 2nd button.", e);
          handleClickAgain("Owen");
        }}
      >
        Click me again!
      </button>
      <h5>Blogs:</h5>
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
