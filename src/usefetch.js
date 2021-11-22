import { useState, useEffect } from "react";

const useFetch = (url) => {
  // useState variable
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // useEffect() will be triggered everytime the page is re-renderred
  // we use it to fetch the blog data (once)
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error(`could not fetch the data`);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
          console.log(err.message);
        });
    }, 1000);
    // console.log("use effect from Home.js");
  }, []);
  return { data, isPending, error };
};

export default useFetch;
