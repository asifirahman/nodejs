//simple http server
//learn nodejs as https://nodejs.dev/en/learn/

const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>ASIF IQBAL is here to learn NODEJS</h1>')
})

server.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`);
})