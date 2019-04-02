const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/projects", (req, res) => {
  axios
    .get("https://portfolio-website-377fd.firebaseio.com/projects.json")
    .then(response => {
      let projects = { projects: [] };
      Object.keys(response.data).map(project => {
        projects.projects.push(response.data[project]);
      });
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(parseInt(error.response.status)).json();
    });
});

module.exports = router;
