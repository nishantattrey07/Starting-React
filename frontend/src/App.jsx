// import { useState, useEffect } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Profile } from './components/Profile';
import { Rendering } from './components/Rendering';


function App() {
  const user = {
    name: 'John Doe',
    email: 'email@test.com',
    username: 'johndoe',
    imageurl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imagesize: 90
  };
  const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
  return (
    <>
      <div>
        <Profile user={user}  />
      </div>
      <div>
        <Rendering products={products} />
      </div>
      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
