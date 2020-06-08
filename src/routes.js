const { Router: Routes } = require("express");
const repo = require("./controller/repo");

const router = Routes();

router.get("/", (req, res) => res.send(""));
router.get("/v1", (req, res) => res.send(""));
router.get("/v1/repo/popular", repo.listPopular);

module.exports = router;
