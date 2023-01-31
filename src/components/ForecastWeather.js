import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./ForecastWeather.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForecastWeather = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forcastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  return (
    <div className="forecast">
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list
          //          .filter((item, index) => index % 6 === 0)
          .map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <div>
                      {" "}
                      <img
                        alt="weather"
                        className="icon-small"
                        src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                      />
                    </div>

                    <label className="day">{forcastDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.temp.min)}°C /{Math.round(item.temp.max)}
                      °C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details">
                  <div className="daily-details-item">
                    <label>Feels like:</label>
                    <label>{Math.round(item.feels_like.day)}°C</label>
                  </div>
                  <div className="daily-details-item">
                    <label>Wind speed:</label>
                    <label>{item.speed} m/s</label>
                  </div>
                  <div className="daily-details-item">
                    <label>Humidity:</label>
                    <label>{item.humidity}%</label>
                  </div>
                  <div className="daily-details-item">
                    <label>Pressure:</label>
                    <label>{item.pressure} hPa</label>
                  </div>

                  <div className="daily-details-item">
                    <label>Clouds:</label>
                    <label>{item.clouds}%</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
};

export default ForecastWeather;
