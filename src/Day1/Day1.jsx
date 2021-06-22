import { useEffect, useState } from "react";
import Component from "./Component";
import "./Day1.scss";

const Day1 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1"
    )
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="container">
      {users.map((data) => (
        <Component country={data.country} timeline={data.timeline} />
      ))}
    </div>
  );
};

export default Day1;
