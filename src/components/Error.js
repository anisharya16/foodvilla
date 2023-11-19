import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;

  console.log(err);
  return (
    <div>
      <p>Oops! Something went wrong.</p>
      <p>{err.status}</p>
      <p>{err.data}</p>
      <p>{status}</p>
      <p>{statusText}</p>
    </div>
  );
};

export default Error;
