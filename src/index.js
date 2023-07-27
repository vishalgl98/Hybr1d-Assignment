const express = require("express");
const userRoutes = require("./routes/userRoutes");
const buyerRoutes = require("./routes/buyerRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://root:root@cluster0.mwczlh4.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    app.listen(5000, () => {
        console.log(' serving server');
    });
})
.catch((error) => {
    console.log(error);
})

app.use("/api/auth", userRoutes);
app.use("/api/buyer", buyerRoutes);
app.use("/api/seller", sellerRoutes);

app.get("/", (req, res) => {
    res.send("Hey");
});