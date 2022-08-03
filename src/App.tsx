import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Container } from "@mui/system";
import Header from "./Components/Header";
import Definitions from "./Components/Definitions/Definitions";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const DictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meanings);
  useEffect(() => {
    DictionaryApi();
  }, [word]);
  return (
    <div className="App">
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <Header word={word} setWord={setWord} />
        {meanings && <Definitions word={word} meanings={meanings} />}
      </Container>
    </div>
  );
}

export default App;
