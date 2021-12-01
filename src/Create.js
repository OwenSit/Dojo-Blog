import { useState } from "react";

// for the Create page of the navigation bar
const Create = () => {
  const [title, setTitle] = useState("Default Title");
  const [body, setBody] = useState("Default Body");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    console.log(blog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log(`new blog added`);
      setTimeout(() => {
        setIsPending(false);
      }, 1000);
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>Blog author:</label>
        <select
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog now...</button>}
        {console.log(isPending)}
      </form>
      <p>{`Title: ${title}`}</p>
      <p>{`Body: ${body}`}</p>
      <p>{`Author: ${author}`}</p>
    </div>
  );
};

export default Create;
