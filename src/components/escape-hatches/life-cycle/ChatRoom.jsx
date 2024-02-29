import { useEffect } from "react";
import createConnection, { logVisit } from "../../../utils/connection";

// const serverUrl = "https://localhost:1234";

export default function ChatRoom({ roomId, serverUrl }) {
  // console.log("rendering....");
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    // console.log(`Synchronizing with server for room: ${roomId}...`);

    // return a cleanup function
    return () => {
      // console.log(`Stop synchronizing with server for room: ${roomId}...`);
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  useEffect(() => {
    logVisit(roomId);
  }, [roomId]);


  // ...
}
