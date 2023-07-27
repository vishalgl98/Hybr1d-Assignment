const express = require("express");
const userRoutes = require("./routes/userRoutes");
const buyerRoutes = require("./routes/buyerRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const app = express();

app.use("/api/auth", userRoutes);
app.use("/api/buyer", buyerRoutes);
app.use("/api/seller", sellerRoutes);

app.get("/", (req, res) => {
    res.send("Hey");
});

app.listen(5000, () => {
    console.log(' serving server');
});