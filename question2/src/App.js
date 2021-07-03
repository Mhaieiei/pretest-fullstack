import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [subjectsInit, setInitial] = useState([]);
  const [subjects, setSubject] = useState([]);

  async function fetchData() {
    const response = await fetch("https://api.publicapis.org/categories");
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchData().then((results) => {
      setInitial(results);
      setSubject(results);
    });
  }, []);

  function filterSubject(value) {
    console.log("filter  value", value);
    const result = subjectsInit.filter((word) => word.includes(value));
    setSubject(result);
  }

  return (
    <div className="App">
      <h1>Subjects</h1>

      <input type="text" onChange={(e) => filterSubject(e.target.value)} />

      <br />
      <br />

      {subjects.map((subject) => (
        <p key={subject}>{subject}</p>
      ))}
    </div>
  );
}
