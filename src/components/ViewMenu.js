import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Reddit API
  useEffect(() => {
    axios
      .get('https://www.reddit.com/r/foodphotography.json')
      .then((response) => {
        const posts = response.data.data.children.map((post) => ({
          title: post.data.title,
          image: post.data.thumbnail,
          url: post.data.url,
        }));
        setMenuItems(posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Food Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Post
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
