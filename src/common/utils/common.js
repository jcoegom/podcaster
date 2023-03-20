export const haveBeenExpired = (validTo) => {
  let current = Date.now();
  return current > validTo;
};

export const getUrlNoCors = (url) => {
  return `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
};

export const convertMsIntoMinSec = (ms) => {
  let seconds = Math.floor(ms / 1000);

  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return `${minutes}:${seconds}`;
};

export const formatDate = (dateString) => {
  let date = new Date(dateString);

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return `${day}/${month}/${year}`;
};
