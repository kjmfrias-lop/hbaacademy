
import  { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ user, signOut }) {
  const navigate = useNavigate();

  // Redirect to /learn after login
  useEffect(() => {
    navigate('/learn');
  }, [navigate]);

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default Home;