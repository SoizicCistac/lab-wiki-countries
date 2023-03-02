import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import countries from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import './App.css';


function App() {
  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    fetch("https://ih-countries-api.herokuapp.com/countries")
    .then(raw => {
      return raw.json()
    })
    .then(res => {
      setCountries(res)
    })
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
            <div className='row'>
            <CountriesList countries={countries}/>
              <Routes>
                <Route path="/:alpha3Code" element={<CountryDetail countries={countries}/>}/>
              </Routes>
            </div>
      </div>
    </div>
  );
}

export default App;
