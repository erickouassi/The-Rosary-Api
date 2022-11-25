//index.js
const http = require("http");
const AppData = require("./controller");
//const { getReqData } = require("./utils");
//var jstz = require('jstz');

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
    // /api/v1 : GET
    if (req.url === "/v1/list" && req.method === "GET") {
        // get the data.
        const allData = await new AppData().getAllData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(allData));
    }
    //
    // /api/v1/novena : GET
    else if (req.url === "/v1/novena" &&
  req.method === "GET") {
         // get novena data.
        const novenaData = await new AppData().getNovenaData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(novenaData));
    }
    //

    // /api/v1/random : GET
    else if (req.url === "/v1/random" &&
  req.method === "GET") {
         // get random data.
        const randomData = await new AppData().getRandomData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(randomData));
    }
    //
      // /api/v1/today : GET
    else if (req.url === "/v1/today" &&
  req.method === "GET") {
         // get today data.
        const todayData = await new AppData().getTodayData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(todayData));
    }
    //
    // /api/v1/yesterday : GET
    else if (req.url === "/v1/yesterday" &&
  req.method === "GET") {
         // get yesterday data.
        const yesterdayData = await new AppData().getYesterdayData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(yesterdayData));
    }
    //
    // /api/v1/tomorrow : GET
    else if (req.url === "/v1/tomorrow" &&
  req.method === "GET") {
         // get tomorrow data.
        const tomorrowData = await new AppData().getTomorrowData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(tomorrowData));
    }
    // /v1/date/:MDYYYY : GET
    else if (req.url.match(/\/v1\/date\/([0-9]+)/) &&
  req.method === "GET") {
        try {
            // get date 10272022 from url
            const X = req.url.split("/")[3];
            // get a single data
            const singleData = await new AppData().getSingleData(X);
            // set the status code and content-type
            res.writeHead(200, { "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"  });
            // send the data
            res.end(JSON.stringify(singleData));
        } catch (error) {
            // set the status code and content-type
            res.writeHead(404, { "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"  });
            // send the error
            res.end(JSON.stringify({ message: error }));
        }
    }
    // /v1/novena/:MDYYYY : GET
    else if (req.url.match(/\/v1\/novena\/([0-9]+)/) &&
  req.method === "GET") {
        try {
            // get date 10272022 from url
            const N = req.url.split("/")[3];
            // get a single data
            const novenaData = await new AppData().getDataNovena(N);
            // set the status code and content-type
            res.writeHead(200, { "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"  });
            // send the data
            res.end(JSON.stringify(novenaData));
        } catch (error) {
            // set the status code and content-type
            res.writeHead(404, { "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"  });
            // send the error
            res.end(JSON.stringify({ message: error }));
        }
    }


    // No route present
    else {
        res.writeHead(404, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
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