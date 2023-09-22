const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB__URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database Connected")
});

// Models
require("./Category");