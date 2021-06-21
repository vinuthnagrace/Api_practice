import { useEffect, useState } from "react";
import "./App.css";
import Component from "./Component.jsx";

function App() {
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
    <div className="App">
      <h1>Hello World</h1>
      {users.map((data) => (
        <h3>
          <Component country={data.country} timeline={data.timeline} />
        </h3>
      ))}
    </div>
  );
}

export default App;
