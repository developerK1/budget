preventing const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const transactionRoutes = require('./routes/transaction.route');
const port = process.env.PORT || 4040;


const corsOptions = {
  origin: 'https://budget-app.herokuapp.com/transaction',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable cookies and HTTP authentication
  optionsSuccessStatus: 204, // Respond to preflight requests with 204 No Content
  allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const uri = process.env.DB_URI;
//mongoose.connect("mongodb+srv://maobakg:pWResSro3qdalaGq@cluster0.uidjjph.mongodb.net/FinancialLog");
mongoose.connect(uri);
const connection = mongoose.connection;


connection.once('open', ()=>{
	console.log("MongoDB database connection established successfully ");
})

// Allow requests from all domains
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/transaction', transactionRoutes);


app.listen(port,()=>{
	console.log("server started on port " + port)
})
