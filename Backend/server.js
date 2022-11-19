const express = require("express")
const mongoose = require("mongoose")
const app = express();
const port = process.env.PORT || 4040;

//app.use(cors());
app.use(express.json());

// const uri = preocess.env.DB_URI;
// mongoose.connect(uri, {userUrlParser :true, useCreateIndex :true}));
// const connection = mongoose.connection;

// connection.once('open', ()=>{
// 	console.log("Mongoose reached the deb : CONNECTED..'");
// })


app.get(/, (req, res )=>{
    res.json("This is home page");
} )


app.listen(port,()=>{
	console.log("server started on port " + port)
})