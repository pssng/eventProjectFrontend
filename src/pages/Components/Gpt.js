import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css'; Importa il file CSS per lo stile dell'app

const generals = JSON.parse(localStorage.getItem("userGenerals"));
const role_ = localStorage.getItem("userRole");




const endpoint = 'ws://localhost:8000/Gpt'; // URL del WebSocket

function Gpt() {
  const [chatKey, setChatKey] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [connected, setConnected] = useState(false);
  const [ws, setWs] = useState(null);
  const role=role_ ==="ROLE_ADMIN"?"1":"0";
  useEffect(() => {
    // Connessione WebSocket
    setChatKey(generals?.fiscalCode);
    const newWs = new WebSocket(endpoint);
    setWs(newWs);

    newWs.onopen = () => {
      console.log('WebSocket aperto');
    };

    newWs.onmessage = (event) => {
      const messageFromServer = event.data;
      console.log('Ricevuto messaggio:', messageFromServer);
      setMessages((prevMessages) => [...prevMessages, messageFromServer]);
    };

    newWs.onclose = () => {
      console.log('WebSocket chiuso');
    };

    return () => {
      newWs.close();
    };
  }, []);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleConnect = async () => {
    try {
      if (!ws) {
        console.error('WebSocket non connesso');
        return;
      }
      ws.send(`/${chatKey}$$${role}`);
      await axios.get(`http://localhost:8000/chat/${chatKey}`).then((response) => {
        setMessages(response.data.list);
        setConnected(true);
      });

      console.log('Connesso con successo');
    } catch (error) {
      console.error('Errore durante la connessione:', error);
    }
  };

  const handleSend =async () => {
    try {
      if (!ws) {
        console.error('WebSocket non connesso');
        return;
      }

      ws.send(message);
      await axios.get(`http://localhost:8000/chat/${chatKey}`).then((response) => {
        setMessages(response.data.list);
        setConnected(true);
      });

      console.log('Inviato messaggio:', message);
    } catch (error) {
      console.error('Errore durante l\'invio del messaggio:', error);
    }
  };

  return (generals===null?"Non sei loggato, per chattare con il supporto per favore logga.":
    <div className="chatme">
      <h1 className="title"><i>Just Art Support Chat</i></h1>

      <div className="container">
 
<div className="messages">
            <h3 >Messages</h3>
            <ul >
              {messages.map((msg, index) => (msg.sender!==chatKey?
                <li key={index} align="left"><div style={{ marginRight:"1rem",border: " 1px solid #000a52" ,borderRadius:"30px",padding:"1rem",backgroundColor:"#000a52",color:"white"}}><h4>{msg.sender}</h4><p>{msg.message}</p></div></li>:<li key={index} align={"right"}><div style={{ borderRadius:"30px",padding:"1rem",backgroundColor:"#f4f4f4",color:"black",marginLeft:"1rem"}}><h4 >{msg.sender}</h4><p>{msg.message}</p></div></li>
              ))}
            </ul>
          </div>
        <div >
          <input
            type="text"
            className="input"
            placeholder="Inserisci il messaggio"
            disabled={chatKey&&connected?false:true}
            value={message}
            onChange={handleChange}
          />
          <button disabled={chatKey&&connected?false:true} style={chatKey&&connected?{backgroundColor: "#000a52"}:{backgroundColor: "grey"}} className="button" onClick={handleSend}>Invia</button>
        </div>
      </div>
    </div>
  );
}

export default Gpt;
