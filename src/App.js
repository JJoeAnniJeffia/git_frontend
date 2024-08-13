import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import Login from './Login';
import AddRecipe from './AddRecipe';
import RecipeSearch from './RecipeSearch';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <RecipeSearch />
          <AddRecipe />
        </>
      )}
    </div>
  );
}

export default App;
