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
          <label htmlFor="select-user" className='select-user'>Select Your User To Login </label>
          <select id="select-user" className='select-user'onChange={handleUserChange}>
            <option value={"Select User"} key={"Select User"}>
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
          <p>Username: {currentUsers.username}</p>
          <p>Name: {currentUsers.name}</p>
          <img className="user-img-homepage" src={currentUsers.avatar_url} />
        </div>
      </div>
        </div>
    );
};

export default HomePage;

