// src/components/Menu.js

import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (err) {
        setError('Failed to fetch meals.');
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Meal Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{meal.strMeal}</h2>
              <p className="text-gray-600">{meal.strArea} Cuisine</p>
              <a
                href={meal.strSource || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-indigo-500 hover:text-indigo-700"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
