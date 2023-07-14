import React, { useState } from 'react';
import '../estilos/Receta.css';

function Receta() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const searchRecipes = () => {
    // Realiza la llamada al backend con los ingredientes en el cuerpo de la solicitud
    fetch('http://localhost:5000/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ingredients })
    })
      .then(response => response.json())
      .then(data => {
        // Manipula los datos de respuesta y establece las recetas en el estado
        setRecipes(data.recipes);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">SuperMAMA App</h1>
        <p className="home-description">Una aplicación para todo tipo de actividades de hogar</p>

        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={ingredients}
            onChange={handleInputChange}
            placeholder="Ingresa los ingredientes separados por coma"
          />
          <button className="search-button" onClick={searchRecipes}>Buscar recetas</button>
        </div>

        <h2 className="recipes-title">Recetas</h2>
        <ul className="recipes-list">
          {Array.isArray(recipes) && recipes.map((recipe, index) => (
            <li key={index} className="recipe-item">{recipe}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Receta;
