import React from "react";
import HomeCard from "../card/HomeCard";
import { getDataFromPodcast } from "../../../common/utils/podcasts";

import "./CardsContainer.css";
const CardsContainer = React.memo(({ show = true, cards = [], children }) => {
  return (
    <>{show ? <div className="cardscontainer-main">{children}</div> : null}</>
  );
});

export default CardsContainer;
