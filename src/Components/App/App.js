import React, { useState, useEffect } from "react";
import Winner from "../Winner/Winner";
import "./App.scss";
import Contestants from "../Contestants/Contestants";
import fetchData from "../../Service/request";

function App() {
  const [contentants, setContentants] = useState(null);
  const [hero, setHero] = useState(null);
  const [villain, setVillain] = useState(null);
  useEffect(() => {
    if (!contentants)
      fetchData()
        .then(res => setContentants(res))
        .catch(() => {});
  });
  return (
    <>
      <header> super-heros</header>
      <main>
        <Contestants
          {...{ contentants, type: "hero", setContestent: setHero }}
        />
        <Contestants
          {...{ contentants, type: "villain", setContestent: setVillain }}
        />
        <Winner {...{ hero, villain }} />
      </main>
      <footer>&copy; </footer>
    </>
  );
}

export default App;
