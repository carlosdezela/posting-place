import React, { useEffect, useState } from 'react'

import './App.css';

function App() {
  const [backendData, setBackendData] = useState()

  useEffect(() => {
    fetch('/api').then(response => response.json()).then(
      data => { setBackendData(data) }
    )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">
          User List:
        </h1>

        {backendData?.users?.map((user, i) => (
          <p key={i}>{user}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
