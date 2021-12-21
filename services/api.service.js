import https from 'https';
import { getKeyValue } from './storage.service.js'

const getWeather = async(city) => {
    const token = await getKeyValue('token');
   // const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    const url = new URL(`https://api.openweathermap.org/data/2.5/weather`);
    url.searchParams.append('q', city);
    url.searchParams.append('appid', city);

    https.get();
};