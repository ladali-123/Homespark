// src/components/Hero.jsx
import Services from "./Services";
import {
  CalendarDays,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";

const WHATSAPP = "91XXXXXXXXXX";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2]">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,115,0,0.10),transparent_35%)]" />

        {/* animated circles */}
        <div className="absolute -top-20 -right-20 h-[320px] w-[320px] rounded-full border border-orange-200 opacity-40 animate-pulse" />

        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full border border-orange-100 opacity-30" />

        <div className="absolute bottom-[-120px] left-[-120px] h-[260px] w-[260px] rounded-full bg-orange-100 blur-3xl opacity-40 animate-pulse" />

        <div className="absolute top-[20%] left-[10%] h-24 w-24 rounded-full bg-orange-200/30 blur-2xl animate-bounce" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-6  lg:px-10">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-medium text-orange-700 shadow-sm backdrop-blur">
              <ShieldCheck size={16} />
              Patna’s trusted RO water service
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Clean water for a
              <span className="block text-orange-600">
                healthier lifestyle
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
              Expert RO installation, repair and maintenance services
              across Patna with genuine spare parts and same-day support —
              starting at just ₹199.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* Book service */}
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-700"
              >
                <CalendarDays
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-6"
                />
                Book Service
              </button>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-green-300 hover:text-green-600"
              >
                <MessageCircle
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                WhatsApp Us
              </a>
            </div>

            {/* Trust */}
            <div className="mt-10 flex flex-wrap gap-5 text-sm text-gray-500">

              {[
                "ISO Certified Parts",
                "Same Day Service",
                "All Brands Covered",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span className="text-orange-500">●</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* floating blur */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-200 blur-3xl
             opacity-40" />

            {/* main card */}
            <div className="relative rounded-[32px] border border-orange-100 bg-white/90 p-8
             shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur">

              {/* top */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div className="rounded-2xl bg-[#faf7f2] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-3xl font-semibold text-orange-600">
                    ₹199
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Starting service cost
                  </p>
                </div>

                <div className="rounded-2xl bg-[#faf7f2] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-3xl font-semibold text-orange-600">
                    500+
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Happy customers
                  </p>
                </div>
              </div>

              {/* bottom premium card */}
              <div className="relative mt-5 overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500
               to-orange-600 p-7 text-white">

                {/* glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

                <div className="relative flex items-center justify-between">

                  <div>
                    <div className="flex items-center gap-2">
                      <Star fill="white" size={22} />
                      <p className="text-4xl font-semibold">
                        5.0
                      </p>
                    </div>

                    <p className="mt-2 text-sm text-orange-100">
                      Trusted RO experts in Patna
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 
                  backdrop-blur">
                    💧
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Services/>
    </section>
    
  );
}