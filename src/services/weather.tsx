//Funcionalidad para obtener el clima (Latitud, longitud)
export const getWeatherData = async (lat: number, lon: number) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
        );
        if (!response.ok) {
            //Caso error
            throw new Error(`Error al obtener los datos del clima: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        //Caso error
        console.error("Weather API error",error);
        throw error;
    }
};