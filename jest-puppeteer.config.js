module.exports = {
  launch: {
    headless: true,
    args: ["--start-maximized", "--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: {
      width: 1512,
      height: 982,
    },
  },
  product: "chromium",
};
