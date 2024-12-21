const http = require ("http")
const { url } = require("inspector")

const server = http.createServer(function (req,res) {
    console.log(req.url)
    if (req.url === "/" ) {
        res.end("welcome to the homepage")
    }
    else if (req.url === "/about"){
        res.end("this is the about us section")
    }
    else{
        res.end("page not found")
    }
})

server.listen(3427,function () {
    console.log("we have done it successfully")
})