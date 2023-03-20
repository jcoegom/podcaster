import { useContext, useEffect } from "react";
import MainBar from "../components/mainbar/MainBar";
import Spinner from "../components/spinner/Spinner";
import Error from "../components/error/Error";
import useQueryData from "../common/hooks/UseQueryData";
import configApi from "../common/config/configApi.json";
import { StoreContext } from "../common/providers/StoreProvider";
import { haveBeenExpired, getUrlNoCors } from "../common/utils/common";
import { getDataFromPodcast, getEpisodes } from "../common/utils/podcasts";

import "../App.css";

const PodcastDetails = ({ podcastId }) => {
  const [store, actionCreators] = useContext(StoreContext);
  const [loading, error, result] = useQueryData(
    getUrlNoCors(
      `${configApi.urlPodcastDetails}?id=${podcastId}&entity=podcastEpisode`
    ),
    haveBeenExpired(store.podcastsDetails[podcastId]?.podcastValidTo ?? 0)
  );

  useEffect(() => {
    if (!result) return;
    actionCreators.setPodcastDetails({
      podcast: { ...result, contents: JSON.parse(result.contents) },
      podcastValidTo: Date.now() + configApi.validDetailsTime,
      podcastId,
    });
  }, [result]);

  console.log("store", store);
  console.log(
    "getEpisodes",
    getEpisodes(store.podcastsDetails[parseInt(podcastId)])
  );

  return (
    <div className="layout">
      <MainBar title={"Podcaster"} actions={<Spinner show={loading} />} />
      PodcastDetails
    </div>
  );
};

export default PodcastDetails;
