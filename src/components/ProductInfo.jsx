export default function ProductInfoSection() {
  const products = [
    {
      title: "ALKALINE",
      description:
        "Utilizes ionization to increase water pH levels, neutralizing acidity and providing antioxidant properties for improved hydration and metabolic balance.",
    },
    {
      title: "ZINC",
      description:
        "Incorporates zinc infusion technology, essential for enzymatic reactions, immune function, and cellular repair mechanisms in the human body.",
    },
    {
      title: "COPPER",
      description:
        "Infuses water with copper ions, leveraging its oligodynamic effect to inhibit microbial growth and deliver antioxidative health benefits.",
    },
    {
      title: "UF",
      description:
        "Employs a membrane with pore sizes typically 0.01 microns to filter bacteria, cysts, and particulate matter while retaining dissolved minerals.",
    },
    {
      title: "UV",
      description:
        "Integrates ultraviolet radiation at wavelengths around 254 nm to deactivate bacteria and viruses without altering water chemistry.",
    },
    {
      title: "TDS",
      description:
        "Regulates and optimizes dissolved solids such as calcium, magnesium, and salts to achieve an ideal mineral balance.",
    },
  ];

  return (
    <section className="bg-[#e9ecf0] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Product Informations
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base leading-7">
            Advanced purification technologies designed to deliver healthier,
            cleaner, and mineral-balanced drinking water for everyday use.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md border border-slate-200 overflow-hidden transition-all
               duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top Blue Bar */}
              <div className="h-[6px] bg-[#0A2E73] w-full"></div>

              <div className="p-7">
                {/* Title */}
                <h3 className="text-[34px] font-bold uppercase text-[#7A004F] mb-3 leading-none tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-[15px] leading-8">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 w-12 h-[2px] bg-[#0A2E73]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


