import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SingleCard from "./Card/SingleCard";

const Cards = (props) => {
  const [selectedCard, setSelectedCard] = useState([]);

  const updateHidden = (id) => {
    const newArray = [...props.renderedCards];
    const index = newArray.findIndex((obj) => obj.id === id);
    if (index >= 0) {
      newArray[index] = { ...newArray[index], hidden: false };
      props.setCards(newArray);
    }
  };

  const resetHidden = () => {
    const updatedCards = props.renderedCards.map((card) => ({
      ...card,
      hidden: true,
    }));
    props.setCards(updatedCards);
  };

  const matched = (value) => {
    const updatedCards = props.renderedCards.map((card) => {
      if (card.value == value) {
        return { ...card, matched: true };
      }
      return card;
    });
    props.setCards(updatedCards);
    setSelectedCard([]);
  };

  useEffect(() => {
    if (selectedCard.length == 2) {
      if (selectedCard[0] === selectedCard[1]) {
        matched(selectedCard[0]);
      } else {
        setSelectedCard([]);
        setTimeout(() => {
          resetHidden();
        }, 500);
      }
    }
  }, [selectedCard]);

  const cardClick = (id, value) => {
    if (selectedCard.length < 2) {
      if (id !== selectedCard[0]) {
        updateHidden(id);
        setSelectedCard([...selectedCard, value]);
      }
    }
  };

  return (
    <Grid
      container
      rowSpacing={2}
      spacing={2}
      justifyContent="center"
      style={{ height: "80vh", marginTop: "2%" }}
    >
      {props.renderedCards.map((item) => (
        <SingleCard
          key={item.id}
          item={item}
          card={props.renderedCards}
          cardClick={cardClick}
          hidden={item.matched}
        />
      ))}
    </Grid>
  );
};

export default Cards;
