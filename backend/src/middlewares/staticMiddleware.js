// staticMiddleware.js

import express from "express";

const staticMiddleware = express.static("dist");

export default staticMiddleware;
