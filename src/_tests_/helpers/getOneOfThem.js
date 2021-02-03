export default (variants) => {
  const index = Math.floor(Math.random() * Math.floor(variants.length));

  return variants[index];
};
