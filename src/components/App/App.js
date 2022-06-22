import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Search from "../Search/Search";
import "./App.module.scss";

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
    <div className="App">
      <div>Newsify</div>
      <div>
        <Search setResults={setResults} />
        {cards}
      </div>
    </div>
  );
}

export default App;
