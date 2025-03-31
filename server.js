const express = require("express");
const cors = require("cors");

require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const contactRoutes = require("./routes/contactRoute");
app.use("/api/contacts", contactRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
