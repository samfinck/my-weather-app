import './App.css';
import React from 'react';
import WeatherComponent from './weather-component'
import { useState } from 'react'

export default function App() {
  
  return (
    <div className="App">
      <WeatherComponent
        day={null}
      />
    </div>
  );
}
