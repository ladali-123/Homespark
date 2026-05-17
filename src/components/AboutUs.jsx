import about from '../assets/about.jpg';

export default function AboutSection() {
  const features = [
    "Advanced Water Purification",
    "100% Safe Drinking Water",
    "Mineral Rich Healthy Water",
    "Trusted Quality Products",
    "Long Lasting Performance",
    "Reliable Customer Support",
  ];

  return (
    <section className="sm:py-16 py-8 px-6 lg:px-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">

        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center relative w-full">

          {/* Background Blur */}
          <div className="absolute w-[500px] h-[350px] bg-orange-500/10 rounded-full blur-3xl top-10"></div>

          {/* Decorations */}
          <div className="absolute top-6 left-10 w-16 h-16 rounded-full bg-orange-200 opacity-40"></div>
          <div className="absolute bottom-6 right-10 w-24 h-24 rounded-full bg-orange-300 opacity-30"></div>

          {/* Image */}
          <div className="relative z-10 w-full max-w-[650px] aspect-[16/11] sm:aspect-[16/10] lg:h-[420px] rounded-[25px] sm:rounded-[35px] overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={about}
              alt="HomeSpark About"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">

          <p className="text-orange-600 font-bold tracking-widest uppercase text-2xl mb-5">
            About Us
          </p>

          {/* Founder */}
          <p className="text-gray-800 font-semibold text-lg mb-2">
            Founder & CEO – Amardeep Kumar Byahut
          </p>

          <p className="text-gray-600 leading-relaxed mb-8 text-lg text-justify">
            HomeSpark is a trusted provider of advanced water purification solutions,
            specializing in RO water purifiers, filters, and complete water treatment systems.
            We are committed to delivering safe, pure, and mineral-rich drinking water
            for every home and business. Along with high-quality products, we also provide
            reliable installation, maintenance, and after-sales service to ensure long-term performance and customer satisfaction.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                <p className="text-gray-700 font-medium text-sm">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <a
            href="/about"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-300"
          >
            Read More
          </a>
        </div>

      </div>
    </section>
  );
}