const Flight=require('../models/flight_model')
const getFlights= async(req,res)=>{
    res.send('this is my flights list')
}

const addFlight=async(req,res)=>{
    console.log(req.body.Name)
    
    const flight=Flight({
        Name:req.body.Name
    })

    flight.save((error,newFlight)=>{
        if(error){
            res.status(400).send({
                'status': 'fail',
                'error':error.message
            })

        }else{
            res.status(200).send({
                'status': 'ok',
                'flight':newFlight
            })
        }

    })
}

module.exports={
    getFlights,
    addFlight
}