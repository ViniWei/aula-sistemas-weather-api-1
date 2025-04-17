import { createClient } from "redis";
const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));
await client.connect();


const weatherRoute = "http://localhost:4000/weather/";

const getweather = async(city) => {
    if (!await client.get(city)) {
        const response = await fetch(weatherRoute + city);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        await client.setEx(city, 10, JSON.stringify(json));

        console.log("sem", json.temp)
        return json.temp;
    }

    return JSON.parse(await client.get(city)).temp
}

export default {
    getweather
}
