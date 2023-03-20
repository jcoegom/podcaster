import { useContext, useEffect } from "react";
import MainBar from "../components/mainbar/MainBar";
import Spinner from "../components/spinner/Spinner";
import Error from "../components/error/Error";
import useQueryData from "../common/hooks/UseQueryData";
import configApi from "../common/config/configApi.json";
import { StoreContext } from "../common/providers/StoreProvider";
import { haveBeenExpired, getUrlNoCors } from "../common/utils/common";
import { getDataFromPodcast, getEpisodes } from "../common/utils/podcasts";
import HeaderPodcastDetails from "../components/home/podcastdetails/headerpodcastdetails/HeaderPodcastDetails";

import "../App.css";
import LayoutPodcastDetails from "../components/home/podcastdetails/layoutpodcastdetails/LayoutPodcastDetails";
import TableEpisodes from "../components/home/podcastdetails/tableepisodes/TableEpisodes";
import { navigate } from "@reach/router";

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
      podcast: getEpisodes({
        ...result,
        contents: JSON.parse(result.contents),
      }), //{ ...result, contents: JSON.parse(result.contents) },
      podcastValidTo: Date.now() + configApi.validDetailsTime,
      podcastId,
    });
  }, [result]);

  const handleClickEpisode = ({ podcastId, episodeId }) => {
    navigate(`/podcast/${podcastId}/episode/${episodeId}`);
  };

  console.log("result", JSON.parse(result?.contents ?? "{}"));

  return (
    <div className="layout">
      <MainBar title={"Podcaster"} actions={<Spinner show={loading} />} />
      <br />
      <LayoutPodcastDetails>
        <div />
        <div>
          <HeaderPodcastDetails
            title={`Episodes: ${
              store.podcastsDetails[podcastId]?.podcast?.length ?? "-"
            }`}
          />
          <br />
          <TableEpisodes
            episodes={store.podcastsDetails[podcastId]?.podcast ?? []}
            onClick={({ podcastId, episodeId }) =>
              handleClickEpisode({ podcastId, episodeId })
            }
          />
        </div>
      </LayoutPodcastDetails>
    </div>
  );
};

export default PodcastDetails;
