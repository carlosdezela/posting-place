import React, { useEffect, useState } from 'react'

import './App.css';
import Messages from './components/messages.jsx';

function App() {
  const [backendData, setBackendData] = useState();

  useEffect(() => {
    fetch('/api').then(response => response.json()).then(
      data => { setBackendData(data) }
    )
  }, []);

  return (
    <div>
      <Messages messagesData={backendData?.messages} />
    </div>
  );
}

export default App;
