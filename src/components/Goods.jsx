import React from "react";

const products = [
  { id: 1, name: "Pluto RO", image: "/pure1.jpg" },
  { id: 2, name: "Novo Digi RO", image: "/pure2.jpg" },
  { id: 3, name: "Aquaguard Hot", image: "/pure3.jpg" },
  { id: 4, name: "Carbon Filter", image: "/pure4.jpg" },
  { id: 5, name: "UF Membrane", image: "/pure5.jpg" },
  { id: 6, name: "Sediment Filter", image: "/pure6.jpg" },
  { id: 7, name: "Booster Pump", image: "/pure7.jpg" },
  { id: 8, name: "TDS Controller", image: "/pure8.jpg" },
  { id: 9, name: "Storage Tank", image: "/pure9.jpg" },
  { id: 10, name: "RO System Kit", image: "/pure10.jpg" },
];

const Goods = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-14 px-5">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
          Our Products
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Pure water solutions for your healthy life
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-xl shadow-md bg-white"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-36 sm:h-40 object-cover group-hover:scale-105 transition duration-300"
            />

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-600/80 to-transparent p-2">
              <p className="text-white text-xs font-semibold">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Goods;