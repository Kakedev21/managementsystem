const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 5000;
const connectDb = require("./config/db");
const colors = require("colors");
const errorHandler = require("./middleware/errorMiddleware");

connectDb();

const app = express();

app.use(morgan("dev"));
app.use(cors());
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/admin", require("./routes/announcementRoute"));
app.use("/user", require("./routes/userRoute"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
