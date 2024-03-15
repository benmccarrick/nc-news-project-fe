import React, { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../Contexts/UsersContext';
import { getUsers } from '../utils';

const HomePage = () => {
    const { currentUsers, setCurrentUsers } = useContext(UsersContext);
    const [currUsers, setCurrUsers] = useState([]);

    useEffect(() => {
        getUsers().then((usersArray) => {
          setCurrUsers(usersArray);
        });
      }, []);

    const handleUserChange = (event) => {
        event.preventDefault();
        setCurrentUsers(JSON.parse(event.target.value));
    };  

    return (
        <div className='home-page'>
            <h1 className='welcome-message'>Welcome to NC News</h1>
            <div id="select-user-form">
        <form>
          <label htmlFor="select-user" className='select-user'>Select Your User To Login: </label>
          <br></br>
          <select id="select-user" className='select-user'onChange={handleUserChange}>
            <option value={""}>
              Select User
            </option>
            {currUsers.map((user) => {
              return (
                <option value={JSON.stringify(user)} key={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>
        </form>
        <div>
          <br></br>
          <p>Username: {currentUsers.username}</p>
          <br></br>
          <p>Name: {currentUsers.name}</p>
          <img className="user-img-homepage" src={currentUsers.avatar_url} alt='an avatar picked by a specific user'/>
          <br></br>
        </div>
      </div>
        </div>
    );
};

export default HomePage;

