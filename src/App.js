import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/Input';
import Orders from './components/Orders';

function App() {
  const [data, setData] = useState([]);

  
  const fetchData = async () => {
    const response = await axios.get('/api');
    const info = response.data;
    setData(info);
  };
  
  const postData = async (data) => {
    await axios.post("/neworder", data);
  };

  useEffect(() => {
    fetchData();
  }, [data]);



  return (
    <div className="App">
      <header className="App-header">
        <Input postData={postData}/>
        <hr />
        <Orders data={data} fetchData={fetchData} />
      </header>
    </div>
  );
}

export default App;
