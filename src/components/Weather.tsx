"use client";
import { useEffect, useState } from "react";
import { getWeatherData } from "../services/weather";

//Interfaz del clima
interface WeatherProps {
    lat: number;
    lon: number;
}

export default function Weather({ lat, lon }: WeatherProps) {
    //Estados (hooks)
    const [weatherData, setWeatherData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        //Obtener datos del clima
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const data = await getWeatherData(lat, lon);
                if (!data) throw new Error("No weather data available");
                setWeatherData(data);
            } catch (err) {
                setError("Error fetching weather data. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [lat, lon]);

    if (loading) return <div>Loading weather data...</div>;
    if (error) return <div>{error}</div>;

    //HTML
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{weatherData.name}</h2>
            <p className="text-lg">Temperatura: {weatherData.main.temp}°C</p>
            <p className="text-lg">Clima: {weatherData.weather[0].description}</p>
            <p className="text-lg">Viento: {weatherData.wind.speed} m/s</p>
            <p className="text-lg">Latitud: {lat}</p>
            <p className="text-lg">Longitud: {lon}</p>
        </div>
    );
}