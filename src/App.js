import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/Input';
import Orders from './components/Orders';
import Popup from './components/Popup';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import alert from './sounds/alert.mp3';


function App() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState(0);

  
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
  let sound = new Audio(alert);

  const fetchData = async () => {
    const response = await axios.get('/api');
    const info = response.data;
    setData(info);
  };

  const postData = async (data) => {
    await axios.post('/neworder', data);
  };

  useEffect(() => {
    toast(alerts[Math.floor(Math.random() * 20)]);
    sound.play();

  }, [order]);




  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <Input postData={postData} setOrder={setOrder} order={order} />
        <Orders data={data} fetchData={fetchData} />
        <ToastContainer />
        <Popup />
      </header>
    </div>
  );
}

export default App;
