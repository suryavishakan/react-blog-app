import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  return <div>Contact {name}</div>;
};

export default Contact;
