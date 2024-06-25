// import { useState, useEffect } from 'react';
import './App.css';
import { Profile } from './components/Profile';

function App() {
  const user = {
    name: 'John Doe',
    email: 'email@test.com',
    username: 'johndoe',
    imageurl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imagesize: 90
};
  return (
    <>
      <div>
        <Profile user={user}  />
      </div>
    </>
  );
}

export default App;
