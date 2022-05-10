import { useRef } from 'react';
import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import alert from '../sounds/alert.mp3';

export default function Input({ postData }) {
  const nameRef = useRef(null);
  const drinkRef = useRef(null);
  const sizeRef = useRef(null);

  let drinks = [
    'Americano',
    'Latte',
    'Flat White',
    'Cacao Latte',
    'Cappuccino',
    'Mocha',
  ];

  let alerts = [
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'NEW ORDER',
    'TURKEY IS THE ONLY ANIMAL MORE CUNNING THAN HUMAN!',
    'THEY KILLED KENNY!',
    "YOU HAVEN'T SEEN EVERYTHING YET!",
    'TRYING IS THE FIRST STEP TOWARDS FAILURE',
  ];

  let sizes = ['Small', 'Medium', 'Large'];

  let sound = new Audio(alert);

  const handleClick = (e) => {

    sound.play();

    e.preventDefault();

    let result = {
      name: nameRef.current.value,
      size: sizeRef.current.value,
      drink: drinkRef.current.value,
    };

    toast(alerts[Math.floor(Math.random() * 20)]);

    postData(result);
  };

  let choseDrink = drinks.map((drink, key) => {
    return (
      <option key={key} value={drink}>
        {drink}
      </option>
    );
  });

  let choseSize = sizes.map((size, key) => {
    return (
      <option key={key} value={size}>
        {size}
      </option>
    );
  });

  return (
    <div className="order-form">
      <div className="container">
        <form className="form-horizontal">
          <h2>Make an Order!</h2>
          <hr />
          <div className="form-group">
            <label className="label">Your name</label>

            <div className="input-field">
              <input
                type="text"
                placeholder="Greetings traveler!"
                ref={nameRef}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="label">Drink type</label>
            <div className="selector">
              <select ref={drinkRef}>{choseDrink}</select>
            </div>
          </div>
          <div className="form-group">
            <label className="label">Size</label>
            <div className="selector">
              <select ref={sizeRef}>{choseSize}</select>
            </div>
          </div>
          <button className="btn" onClick={handleClick}>
            Make an Order!
          </button>
        </form>
      </div>
      <hr />
    </div>
  );
}
