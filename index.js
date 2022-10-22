//index.js
const http = require("http");
const AppData = require("./controller");
const { getReqData } = require("./utils");

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
    // /api/v1 : GET
    if (req.url === "/api/v1/all" && req.method === "GET") {
        // get the data.
        const allData = await new AppData().getAllData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json" });
        // send the data
        res.end(JSON.stringify(allData));
    }

    // /api/v1/random : GET
    else if (req.url === "/api/v1/random" &&
  req.method === "GET") {
         // get random data.
        const randomData = await new AppData().getRandomData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json" });
        // send the data
        res.end(JSON.stringify(randomData));
    }
    //
      // /api/v1/today : GET
    else if (req.url === "/api/v1/today" &&
  req.method === "GET") {
         // get today data.
        const todayData = await new AppData().getTodayData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json" });
        // send the data
        res.end(JSON.stringify(todayData));
    }
    // /api/v1/:id : GET
    else if (req.url.match(/\/api\/v1\/([0-9]+)/) &&
  req.method === "GET") {
        try {
            // get id from url
            const id = req.url.split("/")[3];
            // get a single data
            const singleData = await new AppData().getSingleData(id);
            // set the status code and content-type
            res.writeHead(200, { "Content-Type": "application/json" });
            // send the data
            res.end(JSON.stringify(singleData));
        } catch (error) {
            // set the status code and content-type
            res.writeHead(404, { "Content-Type": "application/json" });
            // send the error
            res.end(JSON.stringify({ message: error }));
        }
    }

    // No route present
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});


server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});

// I will add credit or inspiration later.
// Avoid a single error from crashing the server in production.
process.on("uncaughtException", (...args) => console.error(args));
process.on("unhandledRejection", (...args) => console.error(args));