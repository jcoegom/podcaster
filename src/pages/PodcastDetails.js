import { useContext, useEffect } from "react";
import MainBar from "../components/mainbar/MainBar";
import Spinner from "../components/spinner/Spinner";
import Error from "../components/error/Error";
import useQueryData from "../common/hooks/UseQueryData";
import configApi from "../common/config/configApi.json";
import { StoreContext } from "../common/providers/StoreProvider";
import { haveBeenExpired } from "../common/utils/common";
import { getDataFromPodcast } from "../common/utils/podcasts";

import "../App.css";

const PodcastDetails = ({ podcastId }) => {
  const [store, actionCreators] = useContext(StoreContext);
  const [loading, error, result] = useQueryData(
    `${configApi.urlPodcastDetails}?id=${podcastId}`,
    haveBeenExpired(store.podcastsDetails[podcastId]?.podcastValidTo ?? 0)
  );

  useEffect(() => {
    if (!result) return;
    actionCreators.setPodcastDetails({
      podcasts: result,
      podcastsValidTo: Date.now() + configApi.podcastValidTo,
      podcastId,
    });
  }, [result]);

  return (
    <div className="layout">
      <MainBar title={"Podcaster"} actions={<Spinner show={loading} />} />
      PodcastDetails
    </div>
  );
};

export default PodcastDetails;
