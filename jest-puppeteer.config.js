module.exports = {
  launch: {
    headless: false,
    args: ["--window-size=1920,1080"],
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
  product: "chromium",
};
