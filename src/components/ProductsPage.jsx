import pure from '../assets/pure.png';
import filter from '../assets/filter.png';
import accessory from '../assets/accesory.png';

import Goods from "./Goods";


export default function ProductsPage() {
  const categories = [
    {
      title: "Water Purifiers",
      image: pure,
    },
    {
      title: "Filters",
      image: filter,
    },
    {
      title: "Accessories",
      image: accessory,
    },
  ];

  return (
    <div>
      {/* Categories */}
      <section className="py-8 px-6 lg:px-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-6">
            <p className="text-orange-600 uppercase tracking-[4px] font-semibold mb-3">
              Explore Products
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our Top Categories
            </h2>

            <div className="w-28 h-1 bg-orange-600 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* CATEGORY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-orange-100"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden h-[320px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-orange-100/10 to-transparent"></div>

                  {/* TOP BADGE */}
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow text-sm font-semibold text-orange-600">
                    Premium Quality
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Discover high-performance solutions designed for purity,
                    durability, and modern lifestyle needs.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Goods/>
    </div>
  );
}
