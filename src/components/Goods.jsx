import React from "react";
import pure1 from "../assets/pure1.jpg";
import pure2 from "../assets/pure2.jpg";
import pure3 from "../assets/pure3.jpg";
import pure4 from "../assets/pure4.jpg";
import pure5 from "../assets/pure5.jpg";
import pure6 from "../assets/pure6.jpg";
import pure7 from "../assets/pure7.jpg";
import pure8 from "../assets/pure8.jpg";
import pure9 from "../assets/pure9.jpg";
import pure10 from "../assets/pure10.jpg";

const products = [
  { id: 1, name: "Pluto RO", image: pure1 },
  { id: 2, name: "Novo Digi RO", image: pure2 },
  { id: 3, name: "Aquaguard Hot", image: pure3 },
  { id: 4, name: "Carbon Filter", image: pure4 },
  { id: 5, name: "UF Membrane", image: pure5 },
  { id: 6, name: "Sediment Filter", image: pure6 },
  { id: 7, name: "Booster Pump", image: pure7 },
  { id: 8, name: "TDS Controller", image: pure8 },
  { id: 9, name: "Storage Tank", image: pure9 },
  { id: 10, name: "RO System Kit", image: pure10 },
];

const Goods = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-10 px-6">
      
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
          Our Products
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Premium water purification solutions for a healthier life
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        
        {products.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            
            {/* Image */}
            <div className="h-72 sm:h-80 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Name overlay */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
              <p className="text-white text-base font-semibold tracking-wide">
                {item.name}
              </p>
            </div>

            {/* hover border effect */}
            <div className="absolute inset-0 ring-1 ring-orange-100 group-hover:ring-orange-300 rounded-3xl pointer-events-none"></div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Goods;