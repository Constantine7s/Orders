import React, { useState, useEffect } from "react";
import "./Popup.css";

export default function Popup() {
  const [popup, setPopup] = useState(false);


  
  useEffect(() => {
      setTimeout(() => {
        setPopup(true);
      }, "5000")
  }, []);

  const closePopup = () => {
    setPopup(false);
  };


  return (
    <>
       {popup && (
        <div className="popup">
          <div onClick={closePopup} className="overlay"></div>
          <div className="popup-content">
            <h2>Like this app?</h2>
            <p>
             Please consider donating <a href="https://www.ukraine.who.foundation/">here</a>!
            </p>
            <img src="https://techcrunch.com/wp-content/uploads/2011/02/jw.jpg?w=1390&crop=1" alt="It's Jimmy!"/>

            <button className="close-popup" onClick={closePopup}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}