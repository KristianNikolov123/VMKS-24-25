import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputString, setInputString] = useState('');
  const [responseString, setResponseString] = useState('');

  const handleSendRequest = async () => {
    try {
      const response = await axios.post('http://localhost:8000/echo/', {
        message: inputString,
      });
      setResponseString(response.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>React-Django Communication</h1>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter a string"
        style={styles.input}
      />
      <button onClick={handleSendRequest} style={styles.button}>Send</button>
      {responseString && <p style={styles.response}>Response: {responseString}</p>}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    width: '300px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  response: {
    marginTop: '20px',
    fontSize: '18px',
  },
};

export default App;
