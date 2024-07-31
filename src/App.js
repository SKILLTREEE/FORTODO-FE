import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [testBoards, setTestBoards] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/testBoard')
      .then(response => {
        setTestBoards(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
        setError('Failed to fetch data');
      });
  }, []);

  return (
    <div className="App">
      <h1>Test Boards</h1>
      {error && <p>{error}</p>}
      <ul>
        {testBoards.map(board => (
          <li key={board.id}>
            <h2>{board.title}</h2>
            <p>{board.content}</p>
            <p>{new Date(board.regDateTime).toLocaleString()}</p> {/* Formatting date */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
