import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const SingleCard = (props) => {
  const isMatched = props.card.find(
    (item) => item.id === props.item.id
  ).matched;

  const [matched, setMatched] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log("Match Changed");
      if (isMatched) {
        setMatched(true);
      }
    }, 500);
  }, [isMatched]);

  console.log(matched);

  return (
    <Grid
      item
      xs={3}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          backgroundColor: "#3B185F",
          color: "white",
          visibility: matched ? "hidden" : "visible",
          height: "95%",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
        }}
        onClick={() => props.cardClick(props.item.id, props.item.value)}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {props.item.hidden ? "Hidden" : props.item.value}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleCard;
