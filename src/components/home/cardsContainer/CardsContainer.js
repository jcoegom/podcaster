import React from "react";
import HomeCard from "../card/HomeCard";

import "./CardsContainer.css";
const CardsContainer = React.memo(({ cards = [] }) => {
  console.log("****cards", cards);
  return (
    <div className="cardscontainer-main">
      {cards &&
        cards.map((card) => (
          <HomeCard
            title={card["im:name"]?.label}
            author={card["im:artist"]?.label}
            imgSrc={card["im:image"]?.[0]?.label}
          />
        ))}
    </div>
  );
});

export default CardsContainer;
