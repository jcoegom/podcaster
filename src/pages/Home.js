import { useContext, useEffect, useState } from "react";
import HomeCard from "../components/home/card/HomeCard";
import MainBar from "../components/mainbar/MainBar";
import Spinner from "../components/spinner/Spinner";
import HomeHeader from "../components/home/header/HomeHeader";
import CardsContainer from "../components/home/cardsContainer/CardsContainer";
import Error from "../components/error/Error";
import useQueryData from "../common/hooks/UseQueryData";
import configApi from "../common/config/configApi.json";
import { StoreContext } from "../common/providers/StoreProvider";
import { haveBeenExpired } from "../common/utils/common";
import { getDataFromPodcast } from "../common/utils/podcasts";
import "./Home.css";
import "../App.css";

const Home = () => {
  const [store, actionCreators] = useContext(StoreContext);
  const [podcastsToDisplay, setPodcastsToDisplay] = useState(store.podcasts);
  const [textToSearch, setTextToSearch] = useState("");
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
    setPodcastsToDisplay(result.feed?.entry);
  }, [result]);

  useEffect(() => {
    if (!store?.podcasts || store.podcasts.length === 0) return;
    if (!textToSearch) {
      setPodcastsToDisplay(store.podcasts);
    }

    let filteredPodcasts = store.podcasts?.filter((podcast) => {
      let { title, author } = getDataFromPodcast(podcast);
      return (title + " " + author)
        .toLowerCase()
        .includes(textToSearch.toLowerCase());
    });
    if (filteredPodcasts) setPodcastsToDisplay(filteredPodcasts);
  }, [textToSearch]);

  console.log(store.podcasts);
  return (
    <div className="home-main layout">
      <MainBar title={"Podcaster"} actions={<Spinner show={loading} />} />
      <HomeHeader
        text={podcastsToDisplay?.length > 0 ? podcastsToDisplay?.length : "-"}
        value={textToSearch}
        onChange={(value) => setTextToSearch(value)}
      />
      <br />
      <br />
      <CardsContainer show={!error} cards={podcastsToDisplay} />
      <Error
        show={!!error}
        message={"An error has ocurred!! Please reload page."}
      />
    </div>
  );
};

export default Home;
