"use strict";

const express = require("express");
const morgan = require("morgan");
const PORT = 4000;
express()
  .use(morgan("tiny"))
  .use(express.json())
  .use(express.static("public"))
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
