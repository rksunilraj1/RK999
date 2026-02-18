import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// __dirname = .../src/config
// Root folder = 2 level up
const ROOT = path.join(__dirname, "..", "..");

const configViewEngine = (app) => {
  // Static files (css/js/images) — root se serve
  app.use(express.static(ROOT));

  // EJS
  app.set("view engine", "ejs");

  // Tumhari .ejs files root me hain, so views = ROOT
  app.set("views", ROOT);
};

export default configViewEngine;
