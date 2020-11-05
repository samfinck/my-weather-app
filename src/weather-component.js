import React, { useState, useEffect } from 'react';

import WeatherDayComponent from './weather-day-component';



export default function WeatherComponent({ day }) {
  const [currentDay, setCurrentDay] = useState(day);
  const [currentNamedDay, setCurrentNamedDay] = useState(day);
  
  const [currentDayP, setCurrentDayP] = useState(day);
  const [currentNamedDayP, setCurrentNamedDayP] = useState(day);
  
  const [currentDay2P, setCurrentDay2P] = useState(day);
  const [currentNamedDay2P, setCurrentNamedDay2P] = useState(day);
 
  const [currentDay3P, setCurrentDay3P] = useState(day);
  const [currentNamedDay3P, setCurrentNamedDay3P] = useState(day);
  
  const [currentDay4P, setCurrentDay4P] = useState(day);
  const [currentNamedDay4P, setCurrentNamedDay4P] = useState(day);
  
  const [currentDay5P, setCurrentDay5P] = useState(day);
  const [currentNamedDay5P, setCurrentNamedDay5P] = useState(day);
  
  const [currentDay6P, setCurrentDay6P] = useState(day);
  const [currentNamedDay6P, setCurrentNamedDay6P] = useState(day);
 
  const namedDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
    
  const Rainy = 'data:image/png;base64,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'
  const Sunny = 'data:image/png;base64,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'  
  const Cloudy = 'data:image/png;base64,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'
  const Snowy = 'data:image/png;base64,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'
  
  var b;
  var c;
  var d;

  useEffect(() => {
    const D = new Date();
    const n = D.getDay();
    setCurrentDay(n);
    const c = namedDays[D.getDay()];
    setCurrentNamedDay(c);
  })
  
  useEffect(() => {
    const a = currentDay + 1;
    const nextDay = () => {
      if (a <= 6){
        d = namedDays[a];
        setCurrentDayP(a)
        setCurrentNamedDayP(d)
      }
      else {
        b = a - 6;
        c = -1 + b;
        d = namedDays[c];
        setCurrentDayP(c);
        setCurrentNamedDayP(d)
      }
      }
      nextDay();
  })

  useEffect(() => {
    const a = currentDay + 2;
    const nextDay = () => {
      if (a <= 6){
        d = namedDays[a];
        setCurrentDay2P(a)
        setCurrentNamedDay2P(d)
      }
      else {
        b = a - 6;
        c = -1 + b;
        d = namedDays[c];
        setCurrentDay2P(c);
        setCurrentNamedDay2P(d)
      }
      }
      nextDay();
  })

  useEffect(() => {
    const a = currentDay + 3;
    const nextDay = () => {
      if (a <= 6){
        d = namedDays[a];
        setCurrentDay3P(a)
        setCurrentNamedDay3P(d)
      }
      else {
        b = a - 6;
        c = -1 + b;
        d = namedDays[c];
        setCurrentDay3P(c);
        setCurrentNamedDay3P(d)
      }
      }
      nextDay();
  })

  useEffect(() => {
    const a = currentDay + 4;
    const nextDay = () => {
      if (a <= 6){
        d = namedDays[a];
        setCurrentDay4P(a)
        setCurrentNamedDay4P(d)
      }
      else {
        b = a - 6;
        c = -1 + b;
        d = namedDays[c];
        setCurrentDay4P(c);
        setCurrentNamedDay4P(d)
      }
      }
      nextDay();
  })

  useEffect(() => {
    const a = currentDay + 5;
    const nextDay = () => {
      if (a <= 6){
        d = namedDays[a];
        setCurrentDay5P(a)
        setCurrentNamedDay5P(d)
      }
      else {
        b = a - 6;
        c = -1 + b;
        d = namedDays[c];
        setCurrentDay5P(c);
        setCurrentNamedDay5P(d)
      }
      }
      nextDay();
  })

  useEffect(() => {
    const a = currentDay + 6;
    const nextDay = () => {
      if (a <= 6){
        d = namedDays[a];
        setCurrentDay6P(a)
        setCurrentNamedDay6P(d)
      }
      else {
        b = a - 6;
        c = -1 + b;
        d = namedDays[c];
        setCurrentDay6P(c);
        setCurrentNamedDay6P(d)
      }
      }
      nextDay();
  })


  return (
    <div className="Weather-App-Page" id="weatherPage">
      <div className="Weather-App">
        <WeatherDayComponent
          day= {currentNamedDay}
          dayNo= {currentDay}
          today={currentDay}
          weatherClass= 'Rainy'
          iconSource= {Rainy}
          minimumTemp= '14'
          maximumTemp= '18'
          id= '1'
        />
        <WeatherDayComponent
          day= {currentNamedDayP}
          dayNo= {currentDayP}
          today={currentDay}
          weatherClass= 'Sunny'
          iconSource= {Sunny}
          minimumTemp= '23'
          maximumTemp= '30'
          id= '2'
        /> 
        <WeatherDayComponent
          day= {currentNamedDay2P}
          dayNo= {currentDay2P}
          today= {currentDay}
          weatherClass= 'Cloudy'
          iconSource= {Cloudy}
          minimumTemp= '16'
          maximumTemp= '20'
          id= '3'
        /> 
        <WeatherDayComponent
          day= {currentNamedDay3P}
          dayNo= {currentDay3P}
          today={currentDay}
          weatherClass= 'Snowy'
          iconSource= {Snowy}
          minimumTemp= '-5'
          maximumTemp= '2'
          id= '4'
        
        /> 
        <WeatherDayComponent
          day={currentNamedDay4P}
          dayNo= {currentDay4P}
          today={currentDay}
          weatherClass= 'Rainy'
          iconSource= {Rainy}
          minimumTemp= '10'
          maximumTemp= '17'
          id= '5'
        /> 
        <WeatherDayComponent
          day= {currentNamedDay5P}
          dayNo= {currentDay5P}
          today={currentDay}
          weatherClass= 'Snowy'
          iconSource= {Snowy}
          minimumTemp= '-6'
          maximumTemp= '-1'
          id= '6'
        /> 
        <WeatherDayComponent
          day= {currentNamedDay6P}
          dayNo= {currentDay6P}
          today={currentDay}
          weatherClass= 'Snowy'
          iconSource= {Snowy}
          minimumTemp= '-8'
          maximumTemp= '2'
          id= '0'
        />   
      </div>
    </div>
  );
}
