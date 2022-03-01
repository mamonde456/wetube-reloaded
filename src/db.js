import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✔ Connection to DB");
const handleErorr = (error) => console.log("❌ DB Error", error);

db.on("error", handleErorr);
db.once("open", handleOpen);
