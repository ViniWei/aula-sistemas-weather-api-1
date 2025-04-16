import express from "express";
import weatherService from "./weatherService.js";

const app = express();
const port = 4242;

app.get("/recommendation/:city", async(req, res) => {
    const cityTemp = await weatherService.getweather(req.params.city);

    let recommendation = "";

    if (cityTemp > 30) {
       recommendation = "Hidratação e protetor solar"; 
    } else if (cityTemp > 15) {
        recommendation = "Clima está agradável";
    } else {
        recommendation = "Recomendado usar um casaco";
    }

    res.send(recommendation);
})

app.listen(port, console.log("listening on port:", port));
