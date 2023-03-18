import React from "react";
import HomeCard from "../card/HomeCard";
import { getDataFromPodcast } from "../../../common/utils/podcasts";

import "./CardsContainer.css";
const CardsContainer = React.memo(({ show = true, cards = [] }) => {
  return (
    <>
      {show ? (
        <div className="cardscontainer-main">
          {cards &&
            cards.map((card) => {
              let { title, author, imgSrc } = getDataFromPodcast(card);
              return <HomeCard title={title} author={author} imgSrc={imgSrc} />;
            })}
        </div>
      ) : null}
    </>
  );
});

export default CardsContainer;
