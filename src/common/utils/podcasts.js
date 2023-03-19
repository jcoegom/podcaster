export const getDataFromPodcast = (podcast) => {
  let title = podcast["im:name"]?.label;
  let author = podcast["im:artist"]?.label;
  let imgSrc = podcast["im:image"]?.[0]?.label;
  let id = podcast.id?.attributes?.["im:id"];
  return { title, author, imgSrc, id };
};
