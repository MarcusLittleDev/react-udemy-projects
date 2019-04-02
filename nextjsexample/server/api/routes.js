const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/projects", (req, res) => {
  axios
    .get("https://portfolio-website-377fd.firebaseio.com/projects.json")
    .then(response => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(error => {
      res.status(parseInt(error.response.status)).json();
    });
});

module.exports = router;
