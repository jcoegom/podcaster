import { useEffect, useState } from "react";
import { getDataFromPodcast } from "../../../common/utils/podcasts";

const defaultDetailsData = {
  imgSrc: "",
  title: "",
  subtitle: "",
  description: "",
};

const useDetailsCardData = (store) => {
  const [detailsData, setDetailsData] = useState(defaultDetailsData);
  useEffect(() => {
    let { title, author, imgSrc, description } = store.selectedPodcast ?? {};
    setDetailsData({ imgSrc, title, subtitle: author, description });
  }, []);
  return [detailsData];
};

export default useDetailsCardData;
