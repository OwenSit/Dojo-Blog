import { useState } from "react";

// for the Create page of the navigation bar
const Create = () => {
  const [title, setTitle] = useState("Default Title");
  const [body, setBody] = useState("Default Body");
  const [author, setAuthor] = useState("mario");

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
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
        <button>Add Blog</button>
      </form>
      <p>{`Title: ${title}`}</p>
      <p>{`Body: ${body}`}</p>
      <p>{`Author: ${author}`}</p>
    </div>
  );
};

export default Create;
