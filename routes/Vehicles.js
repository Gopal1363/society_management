const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const app = express();
const vehicle = express.Router()

// mongoose.connect('mongodb://localhost:27017/Meanlogin', { useNewUrlParser: true });

// app.use(body_parser.json());
// app.use(body_parser.urlencoded({ extended: true })); 

const Vehicle = require("../models/Vehicle")


//ADD VEHICLE

vehicle.post('/addvehicle', function (req, res) {
 
    const user_obj = new Vehicle(req.body);
      user_obj.save(function(err) {
      if (err)  
      {       
        res.status(500).send({error: "Error in Add Vehicle"})
      }
      else
      {
        res.status(200).send({message:"Vehicle Added Successfully"})
      }
    });
 
 });

 //List Vehicle

 vehicle.get('/listallvehicle', function (req, res) {
 
  Vehicle.find({}, function(err, data) {
       
      var return_arr={};

      if (err)  
      {       
          return_arr.status=0;
          return_arr.message=err.message;
      }
      else
      {
        return_arr.status=1;
          return_arr.customers=data;
      
      }
      res.json(return_arr);
      });
});


//Edit Vehicle

vehicle.put('/editvehicle/:id', function (req, res) {

    Vehicle.findByIdAndUpdate(req.params.id,req.body,function(err,updated) {
      if (err)  
      {       
       res.status(500).send({error:"Error in update !!"});
      }
    else
    {
       res.status(200).send({message:"Success Update"});
    }    
});

});

//Delete Vehicle

app.delete('/deletevehicle/:id', function (req, res) {
 
  Vehicle.findByIdAndRemove(req.params.id,function(err,deleted) {
    if (err)  
    {       
      res.status(500).send({error:"Error in Delete !!"});
        
    }
    else
    {
      res.status(200).send({message:"Success Delete"});
     
    }    
});


});


//Server

// const server = app.listen(8080, function () {

//     console.log("Server Started: 8080");
  
//   });

module.exports = vehicle
