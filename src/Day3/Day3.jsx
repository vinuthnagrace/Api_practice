import { useState, useEffect } from "react";
import Component from "./Component";

require("es6-promise").polyfill();
require("isomorphic-fetch");

const Day3 = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState(["title", "body"]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts ")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);

  function search(rows) {
    return rows.filter((row) => row.title.toLowerCase().indexOf(q) > -1);
  }
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
      <div>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
        {columns &&
          columns.map((column) => (
            <label>
              <input
                type="checkbox"
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column]
                  );
                }}
              />

              {column}
            </label>
          ))}
      </div>
      <div>
        <Component data={search(data)} />
      </div>
    </div>
  );
};

export default Day3;
