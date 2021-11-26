import { useState } from "react"; // we intend to use the react hook.
import BlogList from "./BlogList";
import useFetch from "./useFetch";

// let name = "Owen";
let like = 0;
const Home = ({ title, setTitle }) => {
  const [likeNum, setLike] = useState(like);
  const { data, isPending, error } = useFetch(`http://localhost:8000/blogs`);

  // create func to handle blog post deletion
  // const handleDelete = (id) => {
  //   // delete blog post here and store the changes in a new array
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlog(newBlogs);
  //   alert(`the blog post has been deleted`);
  // };

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
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <h2>Welcome to {title}!</h2>
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
        Change title
      </button>
      {/* to display all the blogs */}
      {/* we make sure blogs is available before it's being displayed */}
      {data && (
        <BlogList
          blogs={data}
          title="All Blogs!"
          // handleDelete={handleDelete}
        />
      )}
      {/* to dosplay only Mario's blogs */}
      {data && (
        <BlogList
          blogs={data.filter((blog) => blog.author === "mario")}
          title="Mario's Blogs"
          // handleDelete={handleDelete}
        />
      )}
      {data && (
        <BlogList
          blogs={data.filter((blog) => blog.author === "yoshi")}
          title="Yoshi's blogs"
          // handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
