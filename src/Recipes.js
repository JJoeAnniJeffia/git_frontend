import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/api/recipes')
      .then(res => setRecipes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <h2>{recipe.name}</h2>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
