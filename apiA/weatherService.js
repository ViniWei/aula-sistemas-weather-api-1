const weatherRoute = "http://localhost:4000/weather/";

const getweather = async(city) => {
   const response = await fetch(weatherRoute + city);
    
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.temp;
}

export default {
    getweather
}
