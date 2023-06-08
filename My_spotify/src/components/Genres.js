import React from "react";
import { useState, useEffect } from "react";

export default function Genres() {

  const style = {
    paddingTop: "20px",
    letterSpacing: "30px",
    color: "#1EAEDB",
    fontSize: "40px"
  };

  const [genres, setgenres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Genres")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((data) => {
        setgenres(data);
      })
      .catch((error) => {
        console.error("FETCH ERROR:", error);
      });
  }, []);

  const genreList = genres.map((genre) => (
    <li className="genreList" key={genre.id}><a href={genre.id}>{genre.name}<img alt='cover' src={genre.cover} /></a></li>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={style}>Genres</h1>
        <div className="Full-List">
          {/* {genreImage} */}
          <ul>{genreList}</ul>
        </div>
      </header>
    </div>
  );
}