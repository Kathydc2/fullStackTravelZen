require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const reviewsRouter = require("./routes/reviews");


//------------------------------------------[Requirements/Middleware]
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
app.use(express.json());
app.use(cookieParser());
app.use(cors());
const connectToDb = require("./config/connectToDb");
connectToDb();

//------------------------------------------[Landing Page]
app.get("/", (req, res) => {
    res.json("This is a Landing Page")
});

// -----------------------------------------[Routes]
app.use("/api/auth", authRouter );
app.use("/users", usersRouter);
app.use("/reviews", reviewsRouter);


//-------------------------------------------[PORT]
app.listen(PORT, () => {
    console.log(`Express Server Listening on port ${PORT}`);
});


