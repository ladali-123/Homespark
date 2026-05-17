import cont from "../assets/cont.jpg";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-6 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
            Get In Touch With Us
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - FORM */}
          <div>
            <h3 className="text-2xl font-semibold text-[#1c1c1c] mb-8">
              Fill the form to get connected
            </h3>

            <form className="space-y-6">

              {/* ROW 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-[#0A2E73] outline-none py-3 text-gray-700 placeholder:text-[#6b7ba5]"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-[#0A2E73] outline-none py-3 text-gray-700 placeholder:text-[#6b7ba5]"
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Phone */}
                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full bg-transparent border-b border-[#0A2E73] outline-none py-3 text-gray-700 placeholder:text-[#6b7ba5]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-transparent border-b border-[#0A2E73] outline-none py-3 text-gray-700 placeholder:text-[#6b7ba5]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-[#0A2E73] outline-none py-3 resize-none text-gray-700 placeholder:text-[#6b7ba5]"
                ></textarea>
              </div>

              {/* Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">
            <img
              src={cont}
              alt="Contact Illustration"
              className="w-full max-w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}