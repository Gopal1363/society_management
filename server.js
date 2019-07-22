var express = require("express")
var cors = require("cors")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 3000


app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({ extended: false })
)

const mongoURI = 'mongodb://localhost:27017/Meanlogin'

mongoose.connect(mongoURI, { useNewUrlParser: true })
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))

var Users = require("./routes/Users")
app.use("/users", Users)

var vehicle = require("./routes/Vehicles")
app.use("/vehicle", vehicle)




app.listen(port, function() {
    console.log("Server is running on Port: " + port)
})