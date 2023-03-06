const redirectToAPageAfterFiveSeconds = (navigate, url) => {
  setTimeout(() => {
    navigate(url);
  }, 5000);
};

export { redirectToAPageAfterFiveSeconds };
