const redirectToAPageAfterFiveSeconds = (navigate, url) => {
  setTimeout(() => {
    navigate(url);
  }, 5000);
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const delayedActionBetweenOneAndFiveSeconds = (action) => {
  const randomInt = randomIntFromInterval(1, 5);
  setTimeout(() => {
    action();
  }, `${randomInt}000`);
};

export {
  redirectToAPageAfterFiveSeconds,
  randomIntFromInterval,
  delayedActionBetweenOneAndFiveSeconds,
};
