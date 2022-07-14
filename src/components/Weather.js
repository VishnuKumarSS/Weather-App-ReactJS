import React , { useState} from "react";
// import Location from "./Location";

function Weather() {
    var query;

      setInterval(updateTimee, 1000);
    
      const now = new Date().toLocaleTimeString();
      const [timee, setTimee] = useState(now);
      function updateTimee() {
        const newTimee = new Date().toLocaleTimeString();
        setTimee(newTimee);
      }

    // let handleLatiCallback = (latiData)=> {
    //     setLati(latiData)
    // }
    // let handleLongiCallback = (longiData) => {
    //     setLongi(longiData)
    // }
    // const [error, setError] = useState(null);
    // const [query, setQuery] = useState('');

    const [weather, setWeather] = useState({});

    // const search = evt => {
    //   // handleOnChange()
    //   // document.querySelector('.search-bar').addEventListener('change', handleOnChange)
    //   if (evt.key === "Enter"){
    //     fetch(`${process.env.REACT_APP_API_BASE}weather?q=${query}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    //     .then(res => res.json())
    //     .then(result => {
    //       setWeather(result);
    //       setQuery(''); // here we are again making that query to empty
    //       console.log(result)
    //     }
    //     );
    //   }
    // }

    const search = evt => {
        query = document.querySelector("#search-input").value        
        if (evt.key === "Enter"){
          fetch(`${process.env.REACT_APP_API_BASE}weather?q=${query}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
          .then(response => response.json())
          .then(result => {
            setWeather(result);
            console.log('query: ', query)
            query = ''; // here we are again making that query to empty
            console.log(result)
            console.log('updated query: ', query)

            document.querySelector("#search-input").value = ""
          }
          )
          if (weather.name === ''){
            console.log('Not Exist.')
          } 
          // .catch((error) => {
          //     // APIErrorHandler(error)
          //     console.log(error)
          //     if (weather.cod === '404' || weather.cod === '400' ){
          //         console.log('Not found...Error')
          //     }
          // })
          // if (weather.cod === '404' ){
          //     console.log('Not found...Error')
          // } 
        }
    }  
    const dateCreator = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
      let day = days[d.getDay()] // because the getDay will only return the number (i.e) from 0 to 6
      let date = d.getDate();
      let month = months[d.getMonth()]; // because the getMonth will only return the number (i.e) from 0 to 11
      let year = d.getFullYear();
      
      return `${day}, ${date} ${month} ${year}`
    }


    return (      
      <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16 ) ? 'app warm' : 'app cold') : 'app'}>
        <main>
            {/* <p>{lati}...{longi}</p> */}
            {/* <Location laticallback = {handleLatiCallback} longicallback = {handleLongiCallback} /> */}
            {/* <p>{lati}...new...{longi} </p> */}
          <div className='search-box'>
            <input 
              type='text'
              id = 'search-input'
              className='search-bar'
              placeholder="Enter a City Name here..."
              onKeyPress={search}
            />
          </div>
  
          {( typeof weather.main != 'undefined') ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">
                {dateCreator(new Date())}
              </div>
            </div>
  
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">
                {weather.weather[0].main}
              </div>

              <p>{timee}</p>

            </div>
          </div>
          ): ('')}
        </main>
      </div>
    );
}


export default Weather;