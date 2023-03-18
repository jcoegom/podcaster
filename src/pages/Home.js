import { useContext, useEffect } from "react";
import HomeCard from "../components/home/card/HomeCard";
import MainBar from "../components/mainbar/MainBar";
import Spinner from "../components/spinner/Spinner";
import HomeHeader from "../components/home/header/HomeHeader";
import CardsContainer from "../components/home/cardsContainer/CardsContainer";
import useQueryData from "../common/hooks/UseQueryData";
import configApi from "../common/config/configApi.json";
import { StoreContext } from "../common/providers/StoreProvider";
import { haveBeenExpired } from "../common/utils/common";
import "./Home.css";
import "../App.css";

const Home = () => {
  const [store, actionCreators] = useContext(StoreContext);
  const [loading, error, result] = useQueryData(
    configApi.urlMain,
    haveBeenExpired(store.podcastsValidTo)
  );

  useEffect(() => {
    if (!result) return;
    actionCreators.setPodcasts({
      podcasts: result.feed?.entry,
      podcastsValidTo: Date.now() + configApi.validTime,
    });
  }, [result]);

  console.log(store.podcasts);
  return (
    <div className="home-main layout">
      <MainBar title={"Podcaster"} actions={<Spinner show={loading} />} />
      <HomeHeader />
      <br />
      <CardsContainer cards={store.podcasts} />
      <HomeCard />
    </div>
  );
};

export default Home;
