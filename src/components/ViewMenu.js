// src/MenuPage.js

import React, { useEffect, useState } from 'react';

const MenuPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setCategories(data.categories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Meal Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.idCategory} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4 text-center">{category.strCategory}</h2>
            <p className="text-center mt-2">{category.strCategoryDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
