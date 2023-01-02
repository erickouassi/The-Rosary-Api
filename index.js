//index.js
const http = require("http");
const AppData = require("./controller");

const PORT = process.env.PORT || 5001;

const server = http.createServer(async (req, res) => {
    
    if (req.url === "/" && req.method === "GET") {
    // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
       "Access-Control-Allow-Origin": "*" });
       res.end(JSON.stringify({ message: "App is active!" }));
   }
    
    // /api/v1 : GET
    else if (req.url === "/v1/rosaries" && req.method === "GET") {
        // get the data.
        const allData = await new AppData().getAllData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(allData));
    }
    //
        // /api/v1 : GET
        else if (req.url === "/v1/rosaires" && req.method === "GET") {
            // get the data.
            const allData = await new AppData().getAllDataFr();
            // set the status code, and content-type
            res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*" });
            // send the data
            res.end(JSON.stringify(allData));
        }
        //
    // /v1/ : GET
    else if (req.url === "/v1/mysteries" && req.method === "GET") {
        // get the data.
        const mysteriesData = await new AppData().getMysteriesData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(mysteriesData));
    }
    //
	
	
	 // /v1 : GET
     else if (req.url === "/v1/prayers" && req.method === "GET") {
        // get the data.
        const prayersData = await new AppData().getPrayersData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(prayersData));
    }
    //
    // /api/v1/novena : GET
    else if (req.url === "/v1/novena" &&
  req.method === "GET") {
         // get novena data.
        const novenaData = await new AppData().getNovenaData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
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
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
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
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(todayData));
    }
    //
          // /api/v1/dujour : GET
    else if (req.url === "/v1/dujour" &&
  req.method === "GET") {
         // get today data.
        const jourData = await new AppData().getLeJourData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(jourData));
    }
    //
    // /api/v1/yesterday : GET
    else if (req.url === "/v1/yesterday" &&
  req.method === "GET") {
         // get yesterday data.
        const yesterdayData = await new AppData().getYesterdayData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
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
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(tomorrowData));
    }
    //
    // /api/v1/Joyful : GET
    else if (req.url === "/v1/joyful" &&
  req.method === "GET") {
         // get Joyful data.
        const joyfulData = await new AppData().getJoyfulData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(joyfulData));
    }
    //
	 // /api/v1/Sorrowful : GET
    else if (req.url === "/v1/sorrowful" &&
  req.method === "GET") {
         // get Sorrowful data.
        const sorrowfulData = await new AppData().getSorrowfulData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(sorrowfulData));
    }
    //
	 // /api/v1/Glorious : GET
    else if (req.url === "/v1/glorious" &&
  req.method === "GET") {
         // get Glorious data.
        const gloriousData = await new AppData().getGloriousData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(gloriousData));
    }
    //
	 // /api/v1/Luminous : GET
    else if (req.url === "/v1/luminous" &&
  req.method === "GET") {
         // get Luminous data.
        const luminousData = await new AppData().getLuminousData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(luminousData));
    }
    //
    // /v1/date/:MDYYYY : GET
    else if (req.url.match(/\/v1\/date\/([0-9]+)/) &&
  req.method === "GET") {
        try {
            // get date 10272022 from url
            const X = req.url.split("/")[3];
            // get a single data
            const singleData = await new AppData().getSingleData(X);
            // set the status code and content-type
            res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*"  });
            // send the data
            res.end(JSON.stringify(singleData));
        } catch (error) {
            // set the status code and content-type
            res.writeHead(404, { "Content-Type": "application/json; charset=utf-8",
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
            res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*"  });
            // send the data
            res.end(JSON.stringify(novenaData));
        } catch (error) {
            // set the status code and content-type
            res.writeHead(404, { "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*"  });
            // send the error
            res.end(JSON.stringify({ message: error }));
        }
    }
// Add below
 // /api/v1/Sunday : GET
 else if (req.url === "/v1/sunday" &&
 req.method === "GET") {
        // get Sunday data.
       const sundayData = await new AppData().getSundayData();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(sundayData));
   }
   //
    // /api/v1/monday : GET
   else if (req.url === "/v1/monday" &&
 req.method === "GET") {
        // get Monday data.
       const mondayData = await new AppData().getMondayData();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(mondayData));
   }
   //
    // /api/v1/Tuesday : GET
   else if (req.url === "/v1/tuesday" &&
 req.method === "GET") {
        // get Tuesday data.
       const tuesdayData = await new AppData().getTuesdayData();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(tuesdayData));
   }
   //
    // /api/v1/Wednesday : GET
   else if (req.url === "/v1/wednesday" &&
 req.method === "GET") {
        // get Wednesday data.
       const wednesdayData = await new AppData().getWednesdayData();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(wednesdayData));
   }
   //
    // /api/v1/Thursday : GET
   else if (req.url === "/v1/thursday" &&
 req.method === "GET") {
        // get Thursday data.
       const thursdayData = await new AppData().getThursdayData();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(thursdayData));
   }
   //
    // /api/v1/Friday : GET
   else if (req.url === "/v1/friday" &&
 req.method === "GET") {
        // get Friday data.
       const fridayData = await new AppData().getFridayData();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(fridayData));
   }
   //
    // /api/v1/Saturday : GET
   else if (req.url === "/v1/saturday" &&
 req.method === "GET") {
        // get Saturday data.
       const saturdayData = await new AppData().getSaturdayData();
       // set the status code, and content-type
       res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
       "Access-Control-Allow-Origin": "*"  });
       // send the data
       res.end(JSON.stringify(saturdayData));
   }
   //
   // /v1/novena/54-days : GET
   else if (req.url === "/v1/54daynovena" && req.method === "GET") {
    // get the data.
    const novena54Data = await new AppData().getDay54Data();
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*" });
    // send the data
    res.end(JSON.stringify(novena54Data));
}
//
// FRENCH VERSION
//
	// /api/v1/jour-j : GET
    else if (req.url === "/v1/jour-j" &&
  req.method === "GET") {
         // get today data.
        const jour_jData = await new AppData().getJourData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"  });
        // send the data
        res.end(JSON.stringify(jour_jData));
    }
    //
// Add above

    // No route present
    else {
        res.writeHead(404, { "Content-Type": "application/json; charset=utf-8",
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