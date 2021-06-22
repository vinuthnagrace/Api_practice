import { useEffect, useState } from "react";
import Component from "./Component";

import "./Day2.scss";

const Day2 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="container">
      {users.map((data) => (
        <Component id={data.id} title={data.title} body={data.body} />
      ))}
    </div>
  );
};

export default Day2;
