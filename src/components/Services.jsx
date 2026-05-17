import React from "react";

const services = [
  {
    title: "Trusted Quality",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
  {
    title: "Certified Experts",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: "Genuine Parts",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Fast Service",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Smart Technology",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-[#f7f6f5] py-10 px-4 sm:px-6 lg:px-10">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#2563eb_1px,transparent_1px),
      linear-gradient(to_bottom,#2563eb_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8 text-center">

          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-orange-200
           bg-white/80 px-5 
          py-2 text-[11px] font-bold uppercase tracking-[3px] text-orange-500 shadow-sm backdrop-blur-md">
            <span className="h-[1px] w-5 bg-orange-300"></span>
            Why Choose Us
            <span className="h-[1px] w-5 bg-orange-300"></span>
          </div>

          <h2 className="mx-auto max-w-[760px] text-3xl font-extrabold leading-[1.05] tracking-[-2px]
           text-slate-900 sm:text-3xl lg:text-4xl">
            Smart Solutions For{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-600 bg-clip-text 
            text-transparent">
              Pure & Safe Water
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
            Advanced purification with trusted service, premium support &
            cutting-edge technology for healthier living.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden
                rounded-[28px]
                border border-orange-200/70
                bg-white
                p-6 text-center
                shadow-[0_8px_30px_rgba(15,23,42,0.08)]
                transition-all duration-300
                hover:-translate-y-2
                hover:border-orange-400
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.18)]
              "
            >
              {/* Premium Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-cyan-50 opacity-90"></div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-transparent to-violet-300/10 opacity-0 transition duration-300 group-hover:opacity-100"></div>

              {/* Top Border */}
              <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-orange-600
               via-orange-400 to-orange-500"></div>

              {/* Number */}
              <span className="absolute right-4 top-3 text-[10px] font-bold tracking-wider text-orange-300">
                0{index + 1}
              </span>

              {/* Icon */}
              <div
                className="
                  relative z-10 mx-auto mb-5
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl
                  border border-orange-100
                  bg-gradient-to-br from-orange-50 to-cyan-50
                  shadow-inner
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:border-orange-500
                  group-hover:from-orange-600
                  group-hover:to-orange-500
                  group-hover:shadow-[0_10px_30px_rgba(37,99,235,0.35)]
                "
              >
                <div className="h-7 w-7 stroke-orange-600 transition-all duration-300 group-hover:stroke-white">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-[15px] font-semibold leading-5 text-slate-800">
                {service.title}
              </h3>

              {/* Bottom Line */}
              <div
                className="
                  relative z-10 mx-auto mt-5
                  h-[3px] w-8 rounded-full
                  bg-gradient-to-r from-orange-600 to-orange-500
                  transition-all duration-300
                  group-hover:w-14
                "
              ></div>

              {/* Extra Border Glow */}
              <div className="absolute inset-0 rounded-[28px] ring-1 ring-orange-100/50 group-hover:ring-orange-300/60"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}