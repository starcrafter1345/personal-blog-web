import express from "express";

import { router as homeRoutes } from "./routes/home.mjs";
import { router as adminRoutes } from "./routes/admin.mjs";

const app = express();

const PORT = 3000;

app.use("/", homeRoutes);
app.use("/admin", adminRoutes);

app.listen(PORT || 3000);
