import { fetchWeatherApi } from "openmeteo";

export default async function Weather() {
  const params = {
    latitude: 64.14,
    longitude: -21.94,
    current: ["temperature_2m", "is_day", "weather_code"],
    timezone: "GMT",
    forecast_days: 1,
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      isDay: current.variables(1)!.value(),
      weatherCode: current.variables(2)!.value(),
    },
  };
  console.log(weatherData);
  return (
    <div>
      <h1>Weather</h1>
      <h2>Current weather {weatherData.current.temperature2m}</h2>
      {weatherData.current.temperature2m > 0 ? (
        <p>Það er ekki frost 😔</p>
      ) : (
        <p>Það er frost vúhú! 🥳⛷️🧊</p>
      )}
    </div>
  );
}
