import express from "express";

import { router as homeRoutes } from "./routes/home.mjs";
import { router as adminRoutes } from "./routes/admin.mjs";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const PORT = 3000;

app.use("/", homeRoutes);
app.use("/admin", adminRoutes);

app.listen(PORT || 3000);
