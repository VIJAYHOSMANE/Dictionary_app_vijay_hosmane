import React from "react";
import "./Definitions.css";

const Definitions = ({ meanings, word }: any) => {
  return (
    <div className="meanings">
      {meanings[0] && word && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        ></audio>
      )}

      {word === "" ? (
        <span className="subTitle">
          Search the word by typing in the search box
        </span>
      ) : (
        meanings.map((mean: any) =>
          mean.meanings.map((item: any) =>
            item.definitions.map((def: any) => (
              <div className="singleMean">
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s: any) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
