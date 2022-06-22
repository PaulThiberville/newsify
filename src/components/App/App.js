import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Search from "../Search/Search";
import "./App.module.scss";
import style from "./App.module.scss";
import logo from "../../newsify.png";

function App() {
  const [results, setResults] = useState([]);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    let index = 0;
    setCards(
      results.map((result) => {
        index++;
        return <Card key={index} result={result} />;
      })
    );
  }, [results]);

  return (
    <>
      <img src={logo} alt="Newsify" className={style.img}></img>
      <Search setResults={setResults} />
      {cards}
    </>
  );
}

export default App;
