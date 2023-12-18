const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const axios = require("axios");
const e = require("express");

const app = express();
app.use(cors());
app.use(bp.json());

//health-check
app.get("/", (request, response) => {
    response.status(200).json("Yes Chef");
});