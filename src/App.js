//import React, { useState } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [coats, setCoats] = useState('');  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=13dcda70b743eba485c3e8231e3c7990`;

  const searchLocation = (event) => {
    event.preventDefault();
      axios.get(url).then((response) => {
        setData(response.data);
        searchDatabase(response.data.main.temp.toFixed());
        console.log(response.data);
      });
      setLocation('');
  }

   const searchDatabase = (temp) => {
     fetch(`http://localhost:4000/coats?temperature=${temp}`)
          //fetch(`https://ts813.brighton.domains/ci609/api/trousers?temperature=${temp}`)
       .then(response => response.json())
       .then(data => {
         console.log(data);
         data.map((item) => {
          console.log(item.itemName);
         })
         setCoats(data[0].itemName);
       })
      
      }

  // every time the page or data changes, this will run
  return (
    <div className="app">
      <h1 className="title">To wear or not to wear?</h1>
      <h2>That is the question!</h2>
      <form onSubmit={searchLocation}>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter location"
          type="text"/>
      </div>
      <button className='JB' type='submit'>Search</button>
      </form>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}&deg;C</h1> : null}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

          <div className="coats">
            {coats ? <p>{coats}</p> : null}
          </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like.toFixed()}°c</p> : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  </div>
  );
}

export default App;


/*°c*/