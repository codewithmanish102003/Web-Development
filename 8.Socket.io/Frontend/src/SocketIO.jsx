import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

export default function Tracker() {
  useEffect(() => {
    socket.on('locationUpdate', (data) => {
      console.log('Updated location:', data);
    });
  }, []);

  return <h1>Live Tracker</h1>;
}
