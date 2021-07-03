const axios = require("axios");
const cheerio = require("cheerio");
const getNavValue = async () => {
  try {
    const input = process.argv.slice(2)[0];
    const { data } = await axios.get("https://codequiz.azurewebsites.net/", {
      headers: {
        Cookie: "hasCookie=true",
        contentType: "text/html; charset=utf-8",
      },
    });
    const $ = cheerio.load(data);
    const result = $(`td:contains(${input})`).next().text();
    console.log("NAV:", result);
  } catch (err) {
    console.log("something went wrong", err);
  }
};

getNavValue();
