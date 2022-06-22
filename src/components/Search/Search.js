import React, { useState } from "react";
import style from "./Search.module.scss";

export default function Search({ setResults }) {
  const baseUrl = "https://thiberville-paul-newsify-api.herokuapp.com";
  const [input, setInput] = useState("");
  const [from, setFrom] = useState("");

  const handleSearch = async () => {
    const params = input.split(" ").join("&");
    try {
      const response = await fetch(`${baseUrl}/${from}/${params}`);
      if (response.ok) {
        setResults(await response.json());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={style.container}>
        <select
          className={style.select}
          name="from"
          id="from-select"
          onChange={(e) => setFrom(e.target.value)}
        >
          <option value="">Select</option>
          <option value="les_echos">Les Echos</option>
          <option value="l_humanite">L'humanité</option>
          <option value="liberation">Liberation</option>
        </select>
        <input
          className={style.search}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Rechercher..."
        ></input>
      </div>
      <button onClick={() => handleSearch()} className={style.button}>
        Search
      </button>
    </>
  );
}
