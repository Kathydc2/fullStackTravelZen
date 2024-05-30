require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
//--------------------------------importing route modules
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const reviewsRouter = require("./routes/reviews");
const toursRouter = require("./routes/tours")


//------------------------------------------[Requirements/Middleware]
//used for the urlencoded incoming request
app.use(express.urlencoded({ extended: true }));
//cross-origin resource sharing middleware
const cors = require("cors");
//used to convert data to json
app.use(express.json());
//used to parse cookies and make the accessible via req.cookies
app.use(cookieParser());
//enables cors and allows my api to handle req from different domains
app.use(cors());
//rimports the mongoose config connection
const connectToDb = require("./config/connectToDb");
//invoke the connection
connectToDb();

//------------------------------------------[Landing Page]
app.get("/", (req, res) => {
    res.json("This is a Landing Page")
});

// -----------------------------------------[Routes]
app.use("/api/auth", authRouter );
app.use("/users", usersRouter);
app.use("/reviews", reviewsRouter);
app.use("/tours", toursRouter);


//-------------------------------------------[PORT]
//Make sure to add the proxy with "http://localhost:3000" to frontend to connect it to whatever PORT you use
app.listen(PORT, () => {
    console.log(`Express Server Listening on port ${PORT}`);
});


