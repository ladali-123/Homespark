import React, { useState } from "react";
import pop from "../assets/pop.png";
const ServicePopup = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3">

      {/* Popup Container */}
      <div className="relative w-full max-w-4xl bg-[#f3f3f3] rounded-2xl overflow-hidden shadow-2xl max-h-[95vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-50 bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full text-2xl"
        >
          ×
        </button>

        {/* Top Image */}
        <div className="w-full">
          <img
            src={pop}
            alt="popup-banner"
            className="w-full h-[220px] md:h-[280px] object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-4 md:p-8">

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none bg-white"
            />

            <input
              type="tel"
              placeholder="10 digit mobile number"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none bg-white"
            />

            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none bg-white"
            />

            <input
              type="text"
              placeholder="Enter Pincode"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none bg-white"
            />

            <div>
              <label className="block mb-2 font-medium">
                State *
              </label>

              <select className="w-full border border-gray-300 rounded-xl p-4 outline-none bg-white">
                <option>Select State</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>UP</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                City *
              </label>

              <select className="w-full border border-gray-300 rounded-xl p-4 outline-none bg-white">
                <option>Select City</option>
                <option>Noida</option>
                <option>Lucknow</option>
                <option>Delhi</option>
              </select>
            </div>

            <div className="md:col-span-1">
              <label className="block mb-2 font-medium">
                Category
              </label>

              <select className="w-full border border-gray-300 rounded-xl p-4 outline-none bg-white">
                <option>Select Category</option>
                <option>AC</option>
                <option>Fridge</option>
                <option>Washing Machine</option>
              </select>
            </div>
          </div>

          {/* Service Type */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-5">
              Service Type
            </h2>

            <div className="flex flex-wrap gap-6 mb-5">

              <label className="flex items-center gap-2">
                <input type="radio" name="purchase" />
                <span>Service</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="purchase" />
                <span>New Purchase</span>
              </label>
            </div>

            <div className="flex flex-wrap gap-6">

              <label className="flex items-center gap-2">
                <input type="radio" name="service" />
                <span>Repair/Service</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="service" />
                <span>Installation/Uninstallation</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="service" />
                <span>AMC</span>
              </label>
            </div>
          </div>

          {/* Address Section */}
          <div className="mt-8">

            <h2 className="text-xl font-semibold mb-5">
              Address Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="House No. / Building No."
                className="w-full border border-gray-300 rounded-xl p-4 outline-none bg-white"
              />

              <input
                type="text"
                placeholder="Road Name / Area"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none bg-white"
              />

              <input
                type="text"
                placeholder="Nearby Place / Shop / School"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none bg-white md:col-span-2"
              />
            </div>
          </div>

          {/* Button */}
          <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;