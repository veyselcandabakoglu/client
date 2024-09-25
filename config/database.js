const mongoose = require("mongoose")

const database = () => {
    mongoose.connect("mongodb+srv://veyselCan:Veysel77.@cluster1.0qgey.mongodb.net/", {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    }).then(() => {
        console.log("mongodb conected!!")
    }).catch(error => {
        console.log('error', error) 
    })
    
}

module.exports = database