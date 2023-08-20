//this http server has many urls, including a file
//but this much if else is not a proper way of building a website
//thats why we need expressjs which makes our work easier

const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html')
    if(req.url === '/') {
        res.statusCode = 200
        res.end('<h1>ASIF IQBAL is here to learn NODEJS</h1>')
    } else if(req.url === '/about') {
        res.statusCode = 200
        res.end('<h1>This is the about page</h1>')
    } else if(req.url === '/file') {
        res.statusCode = 200
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    } else {
        res.statusCode = 404
        res.end('<h1>This is the 404 page</h1>')
    }  

})

server.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`);
})