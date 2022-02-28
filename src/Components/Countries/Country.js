import React from 'react';
import './Country.css';
const Country = props => {
const {name,flags,population,region} = props.country;
    const flagStyle = {
        width:'200px',
        height:'100px',
    }

    const handleAddedCountry = props.handleAddedCountry;
    return (
        <div className='Country-area'>
            <h4>Country Name: {name.common}</h4>
            <img style={flagStyle} src={flags.svg} alt="" srcset="" />
            <p><small>Population: {population}</small></p>
            <p><small>Region: {region}</small></p>
            <button onClick={()=>handleAddedCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;