import React from "react";
import { useState, useEffect } from "react";

export default function Artists() {

    const style = {
        paddingTop: "20px",
        letterSpacing: "30px",
        color: "#1EAEDB",
        fontSize: "40px"
    };

    const styleOverflow = {
        overflowX: "hidden",
        width: "500px",
        height: "500px"
      };

    const [genres, setgenres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Artists")
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
    <li className="genreList" key={genre.id}><a href={genre.id}>{genre.name}<img alt='cover' src={genre.photo} /></a></li>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={style}>Artistes</h1>
        <div className="Full-List" style={styleOverflow}>
          {/* {genreImage} */}
          <ul>{genreList}</ul>
        </div>
      </header>
    </div>
  );

}

