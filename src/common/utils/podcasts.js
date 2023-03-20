export const getDataFromPodcast = (podcast) => {
  let title = podcast["im:name"]?.label;
  let author = podcast["im:artist"]?.label;
  let imgSrc = podcast["im:image"]?.[0]?.label;
  let id = podcast.id?.attributes?.["im:id"];
  return { title, author, imgSrc, id };
};

export const getEpisodes = (podcastDetails) => {
  if (!podcastDetails || !podcastDetails.contents?.results) return;
  let [medataItem, ...podcastDetailsFiltered] = podcastDetails.contents.results;
  let result = podcastDetailsFiltered.map((detail) => {
    return {
      name: detail.trackName,
      date: detail.releaseDate,
      duration: detail.trackTimeMillis,
    };
  });
  return result;
};
