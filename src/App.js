import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Country from './Components/Countries/Country';

function App() {

 const [countries,setCountries] = useState([]);
 useEffect(() =>{
  fetch(`https://restcountries.com/v3.1/all`)
  .then(rest => rest.json())
  .then(data => setCountries(data))
  .catch(error => console.log(error))
 },[]);


const [addCountry, setAddCountry] = useState([]);
 const handleAddedCountry = country => {
   const newAdded = [...addCountry,country];
   setAddCountry(newAdded);
 }
  return (

    <div className="App">
    <h1>Total Countries: {countries.length}</h1>
    <Cart addCountry={addCountry}></Cart>
      {
        countries.map(country => <Country handleAddedCountry={handleAddedCountry} country={country} key={country.cca3}></Country>)
      }
    </div>
  );
}

export default App;
