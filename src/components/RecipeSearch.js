import React, { useState } from 'react';
import axios from 'axios';

function RecipeSearch() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/recipes/search`, {
        params: { query }
      });
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes', error);
    }
  };

  return (
    <div className="RecipeSearch">
      <h2>Search Recipes</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchRecipes}>Search</button>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeSearch;
