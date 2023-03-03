import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [cards, setCards] = useState([]);
  let finalCards = [];

  const startGame = () => {
    finalCards = [];
    let numbers = [];

    while (numbers.length < 4) {
      let randomNum = Math.floor(Math.random() * 13) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }

    const shuffledArray = [...numbers, ...numbers].sort(
      () => Math.random() - 0.5
    );

    let generatedCards = [];
    let k = 0;

    shuffledArray.map((item) => {
      let newCard = {
        id: k,
        value: item,
        hidden: true,
        matched: false,
      };
      k++;
      generatedCards.push(newCard);
    });

    finalCards = generatedCards;
    setCards(finalCards);
  };

  if (cards.length < 2) {
    startGame();
  }

  const isComplete = cards.every((card) => card.matched === true);

  return (
    <Container maxWidth="xl">
      <Navbar />
      {isComplete ? (
        <div
          style={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: "4rem", color: "white" }}>Congratulations!</h1>
          <Button
            onClick={() => startGame()}
            style={{
              backgroundColor: "#3B185F",
              color: "white",
              fontSize: "1.3rem",
              padding: "1%",
              borderRadius: "10px",
            }}
          >
            New Game
          </Button>
        </div>
      ) : (
        <Cards renderedCards={cards} setCards={setCards} />
      )}
    </Container>
  );
};

export default App;
