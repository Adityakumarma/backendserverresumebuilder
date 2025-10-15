// import json server
const JSONServer = require("json-server")

// create server for running json file
const rBuilder = JSONServer.create()

// create middleware
const middleware = JSONServer.defaults()

// import db.json file
const router = JSONServer.router("db.json")

// define port to run server
const PORT = 3000 || process.env.PORT

// use middleware
rBuilder.use(middleware)

// use router
rBuilder.use(router)

// Listen for client requests
rBuilder.listen(PORT,()=>{
    console.log(`Resume Builder Started at Port number ${PORT}`);
    
})