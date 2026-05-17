import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./FooterIcons";


import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="w-full bg-[#973610] text-white pt-14 pb-6 px-4 overflow-hidden">

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* LEFT SECTION */}
                <div>
                    <img
                        src={logo}
                        alt="Nexus Logo"
                        className="w-[200px] mb-6"
                    />

                    <p className="text-gray-200 leading-8 text-[15px]">
                        We provide premium RO water purifiers with advanced
                        technology, stylish designs, and trusted purification
                        solutions for homes and offices.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-2xl font-semibold relative inline-block">
                        Quick Links
                        <span className="absolute left-0 -bottom-2 w-16 h-[2px] bg-white"></span>
                    </h3>

                    <ul className="space-y-4 text-gray-200 mt-8">
                        <li className="hover:text-pink-300 transition cursor-pointer">
                            Home
                        </li>

                        <li className="hover:text-pink-300 transition cursor-pointer">
                            About Us
                        </li>

                        <li className="hover:text-pink-300 transition cursor-pointer">
                            Products
                        </li>

                        <li className="hover:text-pink-300 transition cursor-pointer">
                            Blogs
                        </li>

                        <li className="hover:text-pink-300 transition cursor-pointer">
                            Contact Us
                        </li>
                    </ul>
                </div>

                {/* POPULAR CATEGORIES */}
                <div>
                    <h3 className="text-2xl font-semibold relative inline-block">
                        Popular Categories
                        <span className="absolute left-0 -bottom-2 w-16 h-[2px] bg-white"></span>
                    </h3>

                    <ul className="space-y-4 text-gray-200 mt-8">
                        <li className="hover:text-pink-300 transition cursor-pointer">
                            Water Purifiers
                        </li>

                        <li className="hover:text-pink-300 transition cursor-pointer">
                            RO Filters
                        </li>

                        <li className="hover:text-pink-300 transition cursor-pointer">
                            Accessories
                        </li>

                        <li className="hover:text-pink-300 transition cursor-pointer">
                            Spare Parts
                        </li>
                    </ul>
                </div>

                {/* SOCIAL + POLICIES */}
                <div>
                    <h3 className="text-2xl font-semibold relative inline-block">
                        Follow Us
                        <span className="absolute left-0 -bottom-2 w-16 h-[2px] bg-white"></span>
                    </h3>

                    {/* SOCIAL ICONS */}
                    <div className="flex items-center gap-4 mt-8">

                        <a
                            href="#"
                            className="w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0A2E73] transition duration-300"
                        >
                            <FacebookIcon size={20} />

                        </a>

                        <a
                            href="#"
                            className="w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0A2E73] transition duration-300"
                        >
                            <InstagramIcon size={20} />
                        </a>

                        <a
                            href="#"
                            className="w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#0A2E73] transition duration-300"
                        >
                            <YoutubeIcon size={20} />
                        </a>
                    </div>

                    {/* POLICY LINKS */}
                    <div className="mt-8 space-y-4 text-gray-200">
                        <p className="hover:text-pink-300 transition cursor-pointer">
                            Privacy Policy
                        </p>

                        <p className="hover:text-pink-300 transition cursor-pointer">
                            Terms & Conditions
                        </p>
                    </div>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="border-t border-white/20 mt-12 pt-5 text-center text-gray-300 text-sm">
                © 2025 Nexus Water Purifier. All Rights Reserved.
            </div>
        </footer>
    );
}