import { ThemeProvider } from "@emotion/react";
import { createTheme, MenuItem, TextField } from "@mui/material";
import React from "react";
import "./Header.css";
function Header({ word, setWord }: any) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
    <div className="header">
      <span className="title" style={{ color: "white" }}>
        Dictionary
      </span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="standard-basic"
            label="Search a word"
            variant="standard"
            value={word}
            onChange={(e: any) => setWord(e.target.value)}
          />
          {/* <TextField
            id="outlined-select-currency"
            select
            label="Select"
            helperText="Please select your currency"
          >
            <MenuItem>English</MenuItem>
          </TextField> */}
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
