import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3] = useState(0);

  // Check ProfileClass component for Class component equivalent code implementation
  // Obj: If we want to make an api call which would depend on every count and count2 states change.
  useEffect(() => {
    // API Call
    // console.log("useEffect");
  }, [count, count2]);

  // If we want to make another api call which depends of another state
  useEffect(() => {
    // API Call
    // console.log("useEffect");

    const timer = setInterval(() => {
      console.log("Funtional Component");
    }, 1000);

    return () => {
      console.log("useEffect Return");
      clearInterval(timer);
    };
  }, [count3]);

  return (
    <div className="border border-sky-500 bg-slate-100 my-2 p-2 rounded-lg">
      <p>Name: {props.name}</p>
      <h2>Profile component</h2>
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <button
        className="bg-cyan-200 hover:bg-cyan-300 p-1 rounded-lg my-2"
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Profile;
