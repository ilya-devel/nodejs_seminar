const http = require('http');
let countHome = 0, countAbout = 0;

const server = http.createServer((req, res) => {
    console.log(`Get request ${req.url}`);

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type':'text/html; charset=UTF-8',
        });
        countHome++;
        res.end(`<h1>Welcome to my site!</h1><p>Count: ${countHome}</p><a href="/about">About</a>`);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type':'text/html; charset=UTF-8',
        });
        countAbout++;
        res.end(`<h1>About</h1><p>Count: ${countAbout}</p><a href="/">Home page</a>`);
    } else {
        res.writeHead(404, {
            'Content-Type':'text/html; charset=UTF-8',
        });
        res.end('<h1>Forbidden page</h1>');
    }


});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}: http://localhost:3000`);
});