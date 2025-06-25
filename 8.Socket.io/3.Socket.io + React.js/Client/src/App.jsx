import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3000');

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [userId] = useState(() => Math.random().toString(36).substring(7));

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    socket.emit('send_message', { message, userId });
    setMessage('');
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setChat(prev => [...prev, { message: data.message, self: data.userId === userId }]);
    });

    return () => socket.off('receive_message');
  }, [userId]);

  return (
    <div className="chat-container">
      <h2>💬 React Chat</h2>
      <div className="chat-box">
        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.self ? 'self' : 'other'}`}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
