import React, { useState } from "react";
import pop from "../assets/pop.png";

const ServicePopup = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 overflow-y-auto">

      {/* Main Wrapper */}
      <div className="min-h-screen flex items-start md:items-center justify-center p-2 md:p-5">

        {/* Popup Container */}
        <div className="relative w-full max-w-3xl bg-[#f5f5f5] rounded-2xl shadow-2xl overflow-hidden my-3 md:my-4">

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 md:top-3 md:right-3 z-50 bg-red-500 hover:bg-red-600 text-white w-9 h-9 md:w-10 md:h-10 rounded-full text-xl md:text-2xl flex items-center justify-center"
          >
            ×
          </button>

          {/* Banner Image */}
          <div className="w-full overflow-hidden">
            <img
              src={pop}
              alt="popup-banner"
              className="w-full object-cover h-[140px] sm:h-[180px] md:h-[260px]"
            />
          </div>

          {/* Form Section */}
          <div className="p-3 sm:p-4 md:p-7">

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm md:text-base bg-white outline-none"
              />

              <input
                type="tel"
                placeholder="10 digit mobile number"
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm md:text-base bg-white outline-none"
              />

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm md:text-base bg-white outline-none"
              />

              <input
                type="text"
                placeholder="Enter Pincode"
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm md:text-base bg-white outline-none"
              />

              <input
                type="text"
                placeholder="Enter State"
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm md:text-base bg-white outline-none"
              />

              <input
                type="text"
                placeholder="Enter City"
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm md:text-base bg-white outline-none"
              />

              <input
                type="text"
                placeholder="Enter Category"
                className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm md:text-base bg-white outline-none md:col-span-2"
              />
            </div>

            {/* Service Type */}
            <div className="mt-6 md:mt-8">

              <h2 className="text-base md:text-xl font-semibold mb-4 md:mb-5">
                Service Type
              </h2>

              <div className="flex flex-wrap gap-4 md:gap-6 mb-4 md:mb-5">

                <label className="flex items-center gap-2">
                  <input type="radio" name="purchase" />
                  <span className="text-sm md:text-base">
                    Service
                  </span>
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="purchase" />
                  <span className="text-sm md:text-base">
                    New Purchase
                  </span>
                </label>
              </div>

              <div className="flex flex-wrap gap-4 md:gap-6">

                <label className="flex items-center gap-2">
                  <input type="radio" name="service" />
                  <span className="text-sm md:text-base">
                    Repair/Service
                  </span>
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="service" />
                  <span className="text-sm md:text-base">
                    Installation/Uninstallation
                  </span>
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="service" />
                  <span className="text-sm md:text-base">
                    AMC
                  </span>
                </label>
              </div>
            </div>

            {/* Address Section */}
            <div className="mt-6 md:mt-8">

              <h2 className="text-base md:text-xl font-semibold mb-4 md:mb-5">
                Address Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

                <input
                  type="text"
                  placeholder="House No. / Building No."
                  className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm md:text-base bg-white outline-none"
                />

                <input
                  type="text"
                  placeholder="Road Name / Area"
                  className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm md:text-base bg-white outline-none"
                />

                <input
                  type="text"
                  placeholder="Nearby Place / Shop / School"
                  className="w-full border border-gray-300 rounded-xl p-3 md:p-4 text-sm md:text-base bg-white outline-none md:col-span-2"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="w-full mt-6 md:mt-8 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 md:py-4 text-sm md:text-base rounded-xl transition"
            >
              Submit
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;