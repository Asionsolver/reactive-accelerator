import { useEffect } from 'react';
import { Chat } from './Chat';


export default function ChatRoom() {
  useEffect(() => {
    const connection = Chat();
    connection.connect();

    // Clean up the connection when the component is unmounted
    return () => {
      connection.disconnect();
    };
  }, []);
  return <h1>Welcome to the chat!</h1>;
}