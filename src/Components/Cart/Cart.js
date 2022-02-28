import React from 'react';
import './Cart.css'
const Cart = props => {
    const addCountry = props.addCountry;
    const totalPopulation = addCountry.reduce((total,country) => total + country.population,0)
    return (
        <div className='addedCart'>
        <h1>Added Country Cart</h1>
            <h2>Added Country: {addCountry.length}</h2>
            <p><small>Total Population:{totalPopulation}</small></p>
        </div>
    );
};

export default Cart;