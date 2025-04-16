import express from "express";
const app = express();
const port = 4000;

const data = [
    { 
        "city": "sao-paulo",
        "temp": 25,
        "unit": "Celsius" 
    },
    { 
        "city": "curitiba",
        "temp": -10,
        "unit": "Celsius" 
    },
    { 
        "city": "natal",
        "temp": 50,
        "unit": "Celsius" 
    },
]

app.get('/weather/:city', (req, res) => {
    const cityInfo = data.find((c) => c.city == req.params.city);
    res.json(cityInfo);
});

app.listen(port, () => { console.log("Listening on port:", port)})
