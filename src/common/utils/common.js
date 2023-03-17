export const haveBeenExpired = (validTo) => {
  let current = Date.now();
  return current > validTo;
};
