//index.js
const http = require("http");
const AppData = require("./controller");
const AppDataDay = require("./controller_day");
const AppDataMysteries = require("./controller_mysteries");
const AppDataPrayers = require("./controller_prayers");
const AppData54Days = require("./controller_54_days");
const AppDataPastYear = require("./controller_past_years");
const AppDataFrench = require("./controller_french");



const PORT = process.env.PORT || 5001;

const server = http.createServer(async (req, res) => {

	/* Start General Api */

	if (req.url === "/" && req.method === "GET") {
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		res.end(JSON.stringify({
			message: "App is active!"
		}));
	}

    // /v1/list
else if (req.url === "/v1/list" && req.method === "GET") {
    // get the data.
    const DataList = await new AppDataPastYear().getAllData();
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*" });
    // send the data
    res.end(JSON.stringify(DataList));
}

	/* All the the mysteries */
	else if (req.url === "/v1/mysteries" && req.method === "GET") {
		// get the data.
		const mysteriesData = await new AppDataMysteries().getMysteriesData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(mysteriesData));
	}
	// /api/v1/Joyful : GET
	else if (req.url === "/v1/joyful" &&
		req.method === "GET") {
		// get Joyful data.
		const joyfulData = await new AppDataMysteries().getJoyfulData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(joyfulData));
	}
	// /api/v1/Sorrowful : GET
	else if (req.url === "/v1/sorrowful" &&
		req.method === "GET") {
		// get Sorrowful data.
		const sorrowfulData = await new AppDataMysteries().getSorrowfulData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(sorrowfulData));
	}
	// /api/v1/Glorious : GET
	else if (req.url === "/v1/glorious" &&
		req.method === "GET") {
		// get Glorious data.
		const gloriousData = await new AppDataMysteries().getGloriousData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(gloriousData));
	}
	// /api/v1/Luminous : GET
	else if (req.url === "/v1/luminous" &&
		req.method === "GET") {
		// get Luminous data.
		const luminousData = await new AppDataMysteries().getLuminousData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(luminousData));
	}

	/* All the 7 days */

	// /v1/Sunday : GET
	else if (req.url === "/v1/sunday" &&
		req.method === "GET") {
		// get Sunday data.
		const sundayData = await new AppDataDay().getSundayData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(sundayData));
	}
	// /v1/monday : GET
	else if (req.url === "/v1/monday" &&
		req.method === "GET") {
		// get Monday data.
		const mondayData = await new AppDataDay().getMondayData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(mondayData));
	}
	// /v1/Tuesday : GET
	else if (req.url === "/v1/tuesday" &&
		req.method === "GET") {
		// get Tuesday data.
		const tuesdayData = await new AppDataDay().getTuesdayData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(tuesdayData));
	}
	// /v1/Wednesday : GET
	else if (req.url === "/v1/wednesday" &&
		req.method === "GET") {
		// get Wednesday data.
		const wednesdayData = await new AppDataDay().getWednesdayData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(wednesdayData));
	}
	// /v1/Thursday : GET
	else if (req.url === "/v1/thursday" &&
		req.method === "GET") {
		// get Thursday data.
		const thursdayData = await new AppDataDay().getThursdayData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(thursdayData));
	}
	// /v1/Friday : GET
	else if (req.url === "/v1/friday" &&
		req.method === "GET") {
		// get Friday data.
		const fridayData = await new AppDataDay().getFridayData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(fridayData));
	}
	// /v1/Saturday : GET
	else if (req.url === "/v1/saturday" &&
		req.method === "GET") {
		// get Saturday data.
		const saturdayData = await new AppDataDay().getSaturdayData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(saturdayData));
	}
	/* End Of All the 7 days */

	/* End of General Api */

	// Get all the prayers list
	else if (req.url === "/v1/prayers" && req.method === "GET") {
		// get the data.
		const prayersData = await new AppDataPrayers().getPrayersData();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(prayersData));
	}

	// /v1/novena/54-days 
	else if (req.url === "/v1/54daynovena" && req.method === "GET") {
		// get the data.
		const novena54Data = await new AppData54Days().getDay54Data();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(novena54Data));
	}

	/* Past Years */
	// /y/y2023
	else if (req.url === "/y/y2023" && req.method === "GET") {
		// get the data.
		const year2023 = await new AppDataPastYear().get2023Year();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(year2023));
	}



	/* End of Past Years */

	/* French Section */

// /fr/list
else if (req.url === "/fr/list" && req.method === "GET") {
    // get the data.
    const frDataList = await new AppDataFrench().getAllDataFr();
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*" });
    // send the data
    res.end(JSON.stringify(frDataList));
}

	// /y/y2023
	else if (req.url === "/fr/an2023" && req.method === "GET") {
		// get the data.
		const an2023 = await new AppDataFrench().get2023Ans();
		// set the status code, and content-type
		res.writeHead(200, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		// send the data
		res.end(JSON.stringify(an2023));
	}

	/* End of French Section */

    /* Regular Date */
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


    /* End of Regular date */










	// 404 Page
	else {
		res.writeHead(404, {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*"
		});
		res.end(JSON.stringify({
			message: "Route not found"
		}));
	}

});


server.listen(PORT, () => {
	console.log(`server started on port: ${PORT}`);
});

// I will add credit or inspiration later.
// Avoid a single error from crashing the server in production.
process.on("uncaughtException", (...args) => console.error(args));
process.on("unhandledRejection", (...args) => console.error(args));