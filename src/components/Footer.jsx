import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-[#973610] text-white pt-14 pb-6 px-4">

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* LEFT SECTION */}
                <div>

                    {/* LOGO + NAME (FIXED) */}
                    <div className="flex items-center gap-2 mb-2">

                        <img
                            src={logo}
                            alt="Logo"
                            className="md:w-[90px] w-[80px]"
                        />

                        <h2
                            className="text-2xl md:text-3xl font-bold bg-gradient-to-r
        from-blue-950 via-blue-900 to-blue-800 bg-clip-text text-transparent"
                        >
                            HomeSpark
                        </h2>

                    </div>

                    <p className="text-gray-200 text-[15px] leading-7 text-justify">
                        We provide premium RO water purifiers with advanced
                        technology, stylish designs, and trusted purification
                        solutions for homes and offices.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex items-center gap-4 mt-5">

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/homesparkpatna"
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#973610] transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0114 6h2v3h-2a1 1 0 00-1 1V12h3l-.5 3H13v7A10 10 0 0022 12z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/_homespark/"
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#973610] transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM12 7a5 5 0 110 10 5 5 0 010-10z" />
                            </svg>
                        </a>

                        {/* YouTube */}
                        <a
                            href="https://youtube.com/@homespark-s1y?si=7EyJAqu0dHxxm3iP"
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#973610] transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M23 12s0-3.5-.4-5.1a3 3 0 00-2.1-2.1C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.5.3A3 3 0 001.4 6.9C1 8.5 1 12 1 12s0 3.5.4 5.1a3 3 0 002.1 2.1c1.6.3 8.5.3 8.5.3s6.9 0 8.5-.3a3 3 0 002.1-2.1C23 15.5 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z" />
                            </svg>
                        </a>

                    </div>
                </div>

                {/* QUICK LINKS */}
                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-2xl font-semibold relative inline-block">
                        Quick Links
                        <span className="absolute left-0 -bottom-2 w-16 h-[2px] bg-white"></span>
                    </h3>

                    <ul className="space-y-3 text-gray-200 mt-8">

                        <li>
                            <Link
                                to="/"
                                className="hover:underline cursor-pointer inline-block"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="hover:underline cursor-pointer inline-block"
                            >
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/productspage"
                                className="hover:underline cursor-pointer inline-block"
                            >
                                Products
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/blog"
                                className="hover:underline cursor-pointer inline-block"
                            >
                                Blogs
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="hover:underline cursor-pointer inline-block"
                            >
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>
                {/* CATEGORIES */}
                <div>
                    <h3 className="text-2xl font-semibold relative inline-block">
                        Contact Us
                        <span className="absolute left-0 -bottom-2 w-16 h-[2px] bg-white"></span>
                    </h3>

                  <div className="mt-8 space-y-5 text-gray-200">

    {/* Phone */}
    <div className="flex items-start gap-3">

        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-5 h-5 mt-1 shrink-0"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.5 1.5 0 00-1.465.417l-.97.97a12.035 12.035 0 01-5.516-5.516l.97-.97a1.5 1.5 0 00.417-1.465L8.056 3.602A1.5 1.5 0 006.966 2.75H5.25a1.5 1.5 0 00-1.5 1.5v2.5z"
            />
        </svg>

        <div>
           
            <a
                href="tel:+919876543210"
                className="text-gray-200 hover:underline"
            >
                +91 98765 43210
            </a>
        </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-3">

        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-5 h-5 mt-1 shrink-0"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.876 1.782l-7.5 5.625a2.25 2.25 0 01-2.748 0l-7.5-5.625A2.25 2.25 0 012.25 6.993V6.75"
            />
        </svg>

        <div>
          

            <a
                href="mailto:homesparco@gmail.com"
                className="text-gray-200 hover:underline break-all"
            >
                homesparco@gmail.com
            </a>
        </div>
    </div>

    {/* Location */}
    <div className="flex items-start gap-3">

        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-5 h-5 mt-1 shrink-0"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
        </svg>

        <div>
            

            <a
                href="https://www.google.com/maps/search/?api=1&query=Shiv+Nagar+Beur+Patna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:underline leading-6"
            >
                Shiv Nagar, Central Jail, Road No. 8,
                behind Of Shivam Vihar Colony,
                Beur, Patna, Bihar 800002
            </a>
        </div>
    </div>

</div>
                </div>

                {/* FIND US + MAP */}
                <div>

                    <h3 className="text-2xl font-semibold relative inline-block">
                        Find Us
                        <span className="absolute left-0 -bottom-2 w-16 h-[2px] bg-white"></span>
                    </h3>

                    {/* MAP */}
                    <div className="mt-6">

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Shiv+Nagar,+Central+Jail,+Road+No.+8,+Beur,+Patna"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-xl overflow-hidden border border-white/30 hover:scale-[1.02] transition"
                        >

                            <div className="w-full h-40">
                                <iframe
                                    title="Location Map"
                                    src="https://www.google.com/maps?q=Shiv%20Nagar%20Beur%20Patna&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <div className="p-3 bg-white/10 backdrop-blur-md text-xs text-gray-200 leading-4">
                                Shiv Nagar, Central Jail Road No. 8, Beur, Patna, Bihar 800002
                                <br />
                                👉 Click to open map
                            </div>

                        </a>
                    </div>

                </div>
            </div>

            {/* BOTTOM */}
            <div className="border-t border-white/20 mt-10 pt-4 text-center text-gray-300 text-sm">
                © 2025 Nexus Water Purifier. All Rights Reserved.
            </div>

        </footer>
    );
}