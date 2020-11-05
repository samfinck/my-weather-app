import React, { useState, useEffect } from 'react';

export default function HourlyComponent({ day }){

    const [currentHour, setCurrentHour] = useState(day)
    const [currentHourP, setCurrentHourP] = useState(day)
    const [currentHour2P, setCurrentHour2P] = useState(day)
    const [currentHour3P, setCurrentHour3P] = useState(day)
    const [currentHour4P, setCurrentHour4P] = useState(day)
    const [currentHour5P, setCurrentHour5P] = useState(day)
    const [currentHour6P, setCurrentHour6P] = useState(day)
    const [currentHour7P, setCurrentHour7P] = useState(day)
    const [currentHour8P, setCurrentHour8P] = useState(day)
    const [currentHour9P, setCurrentHour9P] = useState(day)
    const [currentHour10P, setCurrentHour10P] = useState(day)
    const [currentHour11P, setCurrentHour11P] = useState(day)
    const [currentHour12P, setCurrentHour12P] = useState(day)

    var b;

    useEffect(() => {
        const D = new Date();
        const n = D.getHours();
        setCurrentHour(n);
    })

    useEffect(() => {
        const a = currentHour + 1;
        if (a < 24){
            setCurrentHourP(a)
        }
        else {
            b = a - 24;
            setCurrentHourP(b);
        }
    })

    useEffect(() => {
        const a = currentHour + 2;
        if (a < 24){
            setCurrentHour2P(a)
        }
        else {
            b = a - 24;
            setCurrentHour2P(b);
        }
    })

    useEffect(() => {
        const a = currentHour + 3;
        if (a < 24){
            setCurrentHour3P(a)
        }
        else {
            b = a - 24;
            setCurrentHour3P(b);
        }
    })

    useEffect(() => {
        const a = currentHour + 4;
        if (a < 24){
            setCurrentHour4P(a)
        }
        else {
            b = a - 24;
            setCurrentHour4P(b);
        }
    })

    useEffect(() => {
        const a = currentHour + 5;
        if (a < 24){
            setCurrentHour5P(a)
        }
        else {
            b = a - 24;
            setCurrentHour5P(b);
        }
    })

    useEffect(() => {
        const a = currentHour + 6;
        if (a < 24){
            setCurrentHour6P(a)
        }
        else {
            b = a - 24;
            setCurrentHour6P(b);
        }
    })

    useEffect(() => {
        const a = currentHour + 7;
        if (a < 24){
            setCurrentHour7P(a)
        }
        else {
            b = a - 24;
            setCurrentHour7P(b);
        }
    })

    useEffect(() => {
        const a = currentHour + 8;
        if (a < 24){
            setCurrentHour8P(a)
        }
        else {
            b = a - 24;
            setCurrentHour8P(b);
        }
    })

    useEffect(() => {
        const a = currentHour + 9;
        if (a < 24){
            setCurrentHour9P(a)
        }
        else {
            b = a - 24;
            setCurrentHour9P(b);
        }
    })

    useEffect(() => {
        const a = currentHour + 10;
        if (a < 24){
            setCurrentHour10P(a)
        }
        else {
            b = a - 24;
            setCurrentHour10P(b);
        }
    })

    useEffect(() => {
        const a = currentHour + 11;
        if (a < 24){
            setCurrentHour11P(a)
        }
        else {
            b = a - 24;
            setCurrentHour11P(b);
        }
    })

    useEffect(() => {
        const a = currentHour + 12;
        if (a < 24){
            setCurrentHour12P(a)
        }
        else {
            b = a - 24;
            setCurrentHour12P(b);
        }
    })

    return(
        <div>
            <h2>Hourly Forecast</h2>
            <div className="daily-hourly-div">
                <div className="hourly-div">
                    <li className="hourly-list">
                        <h6>{currentHour}:00 - {currentHourP}:00</h6>
                        <h6> Min </h6>
                        <h6> Max </h6>
                    </li>
                </div>
                <div className="hourly-div">
                    <li className="hourly-list">
                        <h6>{currentHourP}:00 - {currentHour2P}:00</h6>
                        <h6> Min </h6>
                        <h6> Max </h6>
                    </li>
                </div>
                <div className="hourly-div">
                    <li className="hourly-list">
                        <h6>{currentHour2P}:00 - {currentHour3P}:00</h6>
                        <h6> Min </h6>
                        <h6> Max </h6>
                    </li>
                </div>
                <div className="hourly-div">
                    <li className="hourly-list">
                        <h6>{currentHour3P}:00 - {currentHour4P}:00</h6>
                        <h6> Min </h6>
                        <h6> Max </h6>
                    </li>
                </div>
                <div className="hourly-div">
                    <li className="hourly-list">
                        <h6>{currentHour4P}:00 - {currentHour5P}:00</h6>
                        <h6> Min </h6>
                        <h6> Max </h6>
                    </li>
                </div>
                <div className="hourly-div">
                    <li className="hourly-list">
                        <h6>{currentHour5P}:00 - {currentHour6P}:00</h6>
                        <h6> Min </h6>
                        <h6> Max </h6>
                    </li>
                </div>
                <div className="hourly-div">
                    <li className="hourly-list">
                        <h6>{currentHour6P}:00 - {currentHour7P}:00</h6>
                        <h6> Min </h6>
                        <h6> Max </h6>
                    </li>
                </div>
                <div className="hourly-div">
                    <li className="hourly-list">
                        <h6>{currentHour7P}:00 - {currentHour8P}:00</h6>
                        <h6> Min </h6>
                        <h6> Max </h6>
                    </li>
                </div>
                <div className="hourly-div">
                    <li className="hourly-list">
                        <h6>{currentHour8P}:00 - {currentHour9P}:00</h6>
                        <h6> Min </h6>
                        <h6> Max </h6>
                    </li>
                </div>
                <div className="hourly-div">
                    <li className="hourly-list">
                        <h6>{currentHour9P}:00 - {currentHour10P}:00</h6>
                        <h6> Min </h6>
                        <h6> Max </h6>
                    </li>
                </div>
                <div className="hourly-div">
                    <li className="hourly-list">
                        <h6>{currentHour10P}:00 - {currentHour11P}:00</h6>
                        <h6> Min </h6>
                        <h6> Max </h6>
                    </li>
                </div>
                <div className="hourly-div">
                    <li className="hourly-list">
                        <h6>{currentHour11P}:00 - {currentHour12P}:00</h6>
                        <h6> Min </h6>
                        <h6> Max </h6>
                    </li>
                </div>
            </div>
        </div>
    )
}