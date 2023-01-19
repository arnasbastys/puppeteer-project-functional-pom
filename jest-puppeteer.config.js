module.exports = {
  launch: {
    headless: false,
    args: ["--window-size=1920,1080"],
    executablePath: "/opt/hostedtoolcache/chromium/latest/x64/chrome",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
  product: "chromium",
};
