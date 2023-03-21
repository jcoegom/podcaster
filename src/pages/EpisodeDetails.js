import "../App.css";
import { useContext, useState } from "react";
import MainBar from "../components/mainbar/MainBar";
import Spinner from "../components/spinner/Spinner";
import LayoutPodcastDetails from "../components/home/podcastdetails/layoutpodcastdetails/LayoutPodcastDetails";
import DetailsCard from "../components/home/card/details/DetailsCard";
import { StoreContext } from "../common/providers/StoreProvider";
import useDetailsCardData from "../components/home/hooks/UseDetailsCardData";
import { handleErrors } from "../common/utils/errors";
import CardEpisode from "../components/home/episodedetails/episodecard/CardEpisode";

const EpisodeDetails = ({ podcastId, episodeId }) => {
  const [store, actionCreators] = useContext(StoreContext);
  const [cardData] = useDetailsCardData(store);
  const [episode, setEpisode] = useState({});
  const [loading, setLoading] = useState(false);

  useState(() => {
    setLoading(true);
    let episodeFromStore = store.podcastsDetails[podcastId]?.podcast?.find(
      (ep) => {
        return ep.episodeId?.toString() === episodeId;
      }
    );
    if (!episode) {
      handleErrors({});
      return;
    }
    setEpisode(episodeFromStore);

    setLoading(false);
  }, []);

  console.log("StoreDestailsEpisode//episode", store);
  console.log("episode(episodeDetails)", episode);
  return (
    <div className="layout">
      <MainBar title={"Podcaster"} actions={<Spinner show={loading} />} />
      <br />
      <LayoutPodcastDetails>
        <DetailsCard
          imgSrc={cardData?.imgSrc}
          title={cardData?.title}
          subtitle={cardData?.subtitle}
          description={cardData?.description}
        />
        <div>
          <CardEpisode
            title={episode.name}
            description={episode.description}
            url={episode.url}
          />
        </div>
      </LayoutPodcastDetails>
    </div>
  );
};

export default EpisodeDetails;
