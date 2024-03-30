import React, { useEffect, useState } from 'react'

import './App.css';
import Messages from './components/messages.jsx';
import FormMessage from './components/form-message.jsx';
import Refresh from './components/refresh.jsx'

function App() {
  const [backendData, setBackendData] = useState();

  async function fetchData() {
    let data = await fetch('/api');
    let dataJson = await data.json();
    setBackendData(dataJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Refresh onRefresh={fetchData} />
      <FormMessage onFormSubmit={fetchData} />
      <Messages messagesData={backendData?.messages} />
    </div>
  );
}

export default App;
