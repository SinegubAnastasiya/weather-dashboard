import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './app.module.css'

function App() {
  const key = '8d165bffa133ae36abcfbc06e6b92c93'
  const [weather, setWeather] = useState('')
  const [city, setCity] = useState('')

  const getWeather = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    setWeather(response.data);
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <>
      <div className={style.app}>
        <div className={style.container}>
          <div className={style.top}>
            <div className={style.location}>
              <p>Minsk</p>
            </div>
            <div className={style.temp}>
              <p>60°F</p>
            </div>
            <div className={style.description}>
              <p>Clouds</p>
            </div>
          </div>
          <div className={style.bottom}></div>
        </div>
      </div>
    </>
  )
}

export default App