const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

if(process.argv.length>=3){
    console.log()
    const place = process.argv.slice(2).join(' ')
    geocode(place,(error,{lat,long,location}= {})=>{
        if(error){
            console.log(error)
            return
        }
        forecast(lat,long,(err,res)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(location,'Weather:')
            console.log(res)
            console.log()
        })
    })   
}  