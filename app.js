const bodyParser = require('body-parser')
const cors = require("cors")
const createError = require("http-errors");

const express = require('express')
const app = express()
require('dotenv').config();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())

const apiV1Router =express.Router()

require('./db')();
const UserRoute = require('./Route/User.Route')

apiV1Router.use('/auth',UserRoute)



apiV1Router.use((req, res, next) => {
    next(createError(404, "Not Found"));
})

//error hadler
apiV1Router.use((err,res,next)=>{
    res.status(err.status || 500);
    res.send({
        erros:{
            status:err.status || 500,
            message:err.message
        }
    })
})
const PORT =process.env.PORT || 8096
app.use("/api/v1",apiV1Router)

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}...`)
})