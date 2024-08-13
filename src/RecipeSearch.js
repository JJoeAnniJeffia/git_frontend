// src/components/RecipeSearch.js
import React, { useState } from 'react';
import axios from 'axios';

function RecipeSearch() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/recipes?search=${search}`);
      setRecipes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeSearch;
