export const onGetRandomColor = () => {
  const randomColor = Math.floor(Math.random() * (999999 - 100000) + 100000);
  return "#" + randomColor;
};
