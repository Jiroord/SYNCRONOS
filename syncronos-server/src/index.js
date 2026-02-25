// syncronos-server/src/index.js
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const syncRoutes = require("./routes/sync");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/sync", syncRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));