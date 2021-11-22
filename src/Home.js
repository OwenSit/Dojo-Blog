import { useState, useEffect } from "react"; // we intend to use the react hook
import BlogList from "./BlogList";

let name = "Owen";
let like = 0;
const Home = ({ setTitle }) => {
  // useState variable
  const [likeNum, setLike] = useState(like);
  const [blogs, setBlog] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  // create func to handle blog post deletion
  const handleDelete = (id) => {
    // delete blog post here and store the changes in a new array
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
    alert(`the blog post has been deleted`);
  };

  // useEffect() will be triggered everytime the page is re-renderred
  useEffect(() => {
    console.log("use effect from Home.js");
  }, []);

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
      <button
        onClick={() => {
          setTitle("Owen's Blog");
        }}
      >
        Chenge title
      </button>
      {/* to display all the blogs */}
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      {/* to dosplay only Mario's blogs */}
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "yoshi")}
        title="Yoshi's blogs"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
