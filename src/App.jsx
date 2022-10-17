import './App.css';
import React, { useState } from 'react';
import Login from './components/componentHijo/Login';

const App = () => {
 
const [users, setUser] = useState([])

  return (
    <div className="App">
      <div className = 'container'>
      <Login users = {users} setUsers= {setUser}/>
      {users.length > 0 && users.map((user, index)=>(
        <h1 key={index}>{user.nombre}</h1>

      ))}

      </div>
    </div>
  );
}

export default App;
