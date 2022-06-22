import React, { useState } from "react";

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
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <select
        name="from"
        id="from-select"
        onChange={(e) => setFrom(e.target.value)}
      >
        <option value="">Selectionnez une source</option>
        <option value="les_echos">Les Echos</option>
        <option value="l_humanite">L'humanité</option>
        <option value="liberation">Liberation</option>
      </select>
      <button onClick={() => handleSearch()}>Search</button>
    </div>
  );
}
