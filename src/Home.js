let like = 0;
const Home = () => {
  // create a func that will be linked with the button
  const handleClick = (e) => {
    like += 1;
    console.log("you liked this page", e);
  };

  const handleClickAgain = (name) => {
    console.log(`hello ${name}!`);
    alert(`"hello, ${name}!`);
  };

  return (
    <div className="home">
      <h2>Welcome to Dojo Blog!</h2>
      <h4>{like} people have liked this page</h4>
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
    </div>
  );
};

export default Home;
