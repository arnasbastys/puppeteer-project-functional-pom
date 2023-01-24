module.exports = {
  launch: {
    headless: true,
    args: [
      "--start-maximized",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--single-process",
    ],
    defaultViewport: {
      width: 1512,
      height: 982,
    },
  },
  dumpio: true,
  product: "chromium",
};
