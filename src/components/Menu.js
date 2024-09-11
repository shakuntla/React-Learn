import React from 'react'

function Menu() {
  return (
    <>
    {/* Menu Section */}
    <section id="menu" className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">Dish 1</h3>
          <p className="text-gray-600">A delicious starter to begin your meal.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">Dish 2</h3>
          <p className="text-gray-600">The perfect main course for any occasion.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-xl font-bold mb-2">Dish 3</h3>
          <p className="text-gray-600">A sweet dessert to end your meal perfectly.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Menu
