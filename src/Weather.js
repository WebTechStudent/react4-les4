import React from "react";
import axios from 'axios';
import { Audio } from 'react-loader-spinner'
;

export default function Weather(props) {
    function handleResponse(response) {
       alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`); 
    }
    let apiKey = "b9ba0314a93083136d968577c718e31d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
); 
 }