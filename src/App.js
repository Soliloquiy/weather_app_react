import './App.css';
import { useState } from 'react';
import SearchBar from './components/searchbar/SearchBar';
import { weatherForecast } from './API';
import Loader from './components/loader/Loader';
import axios from 'axios';
import Today from './components/today/Today';
import Weekly from './components/weekly/Weekly';


function App() {
  const [state, setState] = useState({
    searchValue: '',
    current: {},
    weekly: [],
    loading: false,
    error: false
  })

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      searchValue: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    setState({
      ...state,
      loading: true
    })
    axios.get(weatherForecast(state.searchValue))
    .then((response) => {
    const data = response.data;

    const current = {
      city: data.city.name,
      country: data.city.country,
      avgTemp: data.list[0].temp.day,
      description: data.list[0].weather[0].description,
      high: data.list[0].temp.max,
      low: data.list[0].temp.min,
      morning: data.list[0].temp.morn,
      evening: data.list[0].temp.eve,
      night: data.list[0].temp.night,
    }

    const weekly = data.list.map((data, index) => {
      return {
        key:index,
        avgTemp: data.weather[0].main,
        day: new Date(data.dt * 1000).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).split(",")[0],
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        high: data.temp.max,
        low: data.temp.min,
      }
    })

    setState({
      ...state,
      current: current,
      weekly: weekly,
      loading: false,
      error: false
    })
  })
  .catch((error) => {

    setState({
      ...state,
      current: {},
      weekly: [],
      loading: false,
      error: true
    })
  })
  }


  
  return (
    <div className="App">
      <SearchBar change={handleChange} submit={handleSubmit} value={state.searchValue} />
      {state.loading === true ?
      <Loader /> :
      state.current.country !== undefined ? 
      <div>
        <Today current={state.current} />
        <Weekly weekly={state.weekly}/>
      </div> :
      state.error && 
      <div className='error' >Sorry, location not found </div>
      }
      
    </div>
  );
}

export default App;
