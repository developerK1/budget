const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const transactionRoutes = require('./routes/transaction.route');
const port = process.env.PORT || 4040;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const uri = process.env.DB_URI;
mongoose.connect("mongodb+srv://maobakg:pWResSro3qdalaGq@cluster0.uidjjph.mongodb.net/FinancialLog");
//mongoose.connect('mongodb://127.0.0.1:27017/FinancialLog');
const connection = mongoose.connection;

connection.once('open', ()=>{
	console.log("MongoDB database connection established successfully");
})

app.use('/transaction', transactionRoutes);


app.listen(port,()=>{
	console.log("server started on port " + port)
})