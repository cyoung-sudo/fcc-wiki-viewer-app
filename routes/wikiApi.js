const express = require("express");
const axios = require("axios");

const wikiRoutes = express.Router();

wikiRoutes.route("/wikiApi")
  .get((req, res) => {
    let searchInput = req.query.searchInput;
    let apiEndpoint = "https://en.wikipedia.org/w/api.php";
    let params = `?action=query&list=search&srsearch=${searchInput}&utf8=&format=json`;

    // Request articles from API
    axios.get(apiEndpoint + params)
      .then(res1 => {
        console.log("Successfully retrieved articles");
        res.json(res1.data)
      })
      .catch(err => console.log(err));
  });

module.exports = wikiRoutes;