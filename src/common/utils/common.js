export const haveBeenExpired = (validTo) => {
  let current = Date.now();
  return current > validTo;
};

export const getUrlNoCors = (url) => {
  return `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
};
