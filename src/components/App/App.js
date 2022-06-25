import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Search from "../Search/Search";
import "./App.module.scss";
import style from "./App.module.scss";
import logo from "../../newsify.png";
import SkeletonArticle from "../../Skeletons/SkeletonArticle";

function App() {
  const [results, setResults] = useState([]);
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(false);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
    return <SkeletonArticle key={index} />;
  });

  useEffect(() => {
    if (results === "No result") return;
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
      <Search setResults={setResults} setLoading={setLoading} />
      {loading === true && skeletons}
      {loading === false && cards}
      {loading === false && results === "No result" && "No result..."}
    </>
  );
}

export default App;
