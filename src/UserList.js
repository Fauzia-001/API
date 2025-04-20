// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data); // Set data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs once when component mounts

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
