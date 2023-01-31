const API_KEY = "05793b35572ec783bc9bac1a391d6d72";
const URL = "https://api.openweathermap.org/data/2.5";

const API_KEY_FORCAST = "d94bcd435b62a031771c35633f9f310a";
const URL_FORCAST = "https://api.openweathermap.org/data/2.5/forecast/daily";

// export const coordinates = (location) => `${URL}weather?q=${location}&appid=${API_KEY}`

export const weatherForecast = (loc) =>
  `${URL_FORCAST}?q=${loc}&units=metric&cnt=7&appid=${API_KEY_FORCAST}`;
export const weatherCurrent = (loc) =>
  `${URL}/weather?q=${loc}&units=metric&appid=${API_KEY}`;
