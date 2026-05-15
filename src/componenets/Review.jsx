import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// IMPORT YOUR PRODUCT IMAGES
import pure1 from "../assets/pure1.jpg";
import pure2 from "../assets/pure2.jpg";
import pure3 from "../assets/pure3.jpg";
import pure4 from "../assets/pure4.jpg";
import pure5 from "../assets/pure5.jpg";
import pure6 from "../assets/pure6.jpg";
import pure7 from "../assets/pure7.jpg";
import pure8 from "../assets/pure8.jpg";
import pure9 from "../assets/pure9.jpg";
import pure10 from "../assets/pure10.jpg";

export default function ProductReviewSlider() {
   const reviews = [
    {
        name: "Rajesh Kumar",
        role: "Nexus RO User",
        review:
            "Nexus RO purifier ki water quality bahut acchi hai. Installation bhi fast hua aur design premium lagta hai.",
        image: pure1,
    },
    {
        name: "Aman Gupta",
        role: "Auro Purifier Customer",
        review:
            "Water taste improved a lot after using this purifier. Totally worth it.",
        image: pure2,
    },
    {
        name: "Ritika Sharma",
        role: "Verified Buyer",
        review:
            "Auro purifier ka purification system excellent hai. Ab ghar me fresh aur safe water milta hai.",
        image: pure3,
    },
    {
        name: "Vikas Singh",
        role: "Nexus User",
        review:
            "Modern design and very smooth performance. Service team was also professional.",
        image: pure4,
    },
    {
        name: "Priya Verma",
        role: "Happy Customer",
        review:
            "Maintenance support bahut accha hai aur purifier perfectly kaam kar raha hai.",
        image: pure5,
    },
    {
        name: "Rahul Mehta",
        role: "Auro RO Customer",
        review:
            "Excellent purification quality. My family can actually feel the difference in water taste.",
        image: pure6,
    },
    {
        name: "Sneha Patel",
        role: "Satisfied User",
        review:
            "Purifier ka look premium hai aur installation process bhi kaafi smooth tha.",
        image: pure7,
    },
    {
        name: "Deepak Yadav",
        role: "Nexus Buyer",
        review:
            "Best RO purifier in this budget. Water quality aur cooling dono mast hai.",
        image: pure8,
    },
    {
        name: "Anjali Roy",
        role: "Verified Customer",
        review:
            "Very satisfied with the product quality and after-sales support experience.",
        image: pure9,
    },
    {
        name: "Karan Malhotra",
        role: "Auro Purifier User",
        review:
            "Customer support kaafi helpful tha aur purifier performance bhi top-class hai.",
        image: pure10,
    },
];
    const [current, setCurrent] = useState(0);

    // AUTO SLIDE
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // NEXT BUTTON
    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % reviews.length);
    };

    // PREV BUTTON
    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? reviews.length - 1 : prev - 1
        );
    };

    return (
        <section className="w-full bg-[#f5f5f5] py-8 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
                        What Our Customers Say
                    </h2>

                    <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* SLIDER */}
                <div className="relative">

                    {/* LEFT BUTTON */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20
                         bg-white shadow-lg border border-gray-200 w-11 h-11 rounded-full 
                         hidden md:flex items-center justify-center hover:bg-yellow-400
                          hover:text-white transition duration-300"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* RIGHT BUTTON */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg border border-gray-200 w-11 h-11 rounded-full hidden md:flex items-center justify-center hover:bg-yellow-400 hover:text-white transition duration-300"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* SLIDES */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${current * 100}%)`,
                            }}
                        >
                            {reviews.map((item, index) => (
                                <div
                                    key={index}
                                    className="min-w-full px-2"
                                >
                                    <div className="bg-white rounded-3xl border border-gray-200
                                     shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">

                                        {/* PRODUCT IMAGE */}
                                        <div className="w-full md:w-[220px] flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-[220px] object-cover rounded-2xl"
                                            />
                                        </div>

                                        {/* REVIEW CONTENT */}
                                        <div className="flex-1">

                                            {/* REVIEW TEXT */}
                                            <h3 className="text-xl md:text-2xl font-semibold text-[#0A2540] leading-relaxed">
                                                "{item.review}"
                                            </h3>

                                            {/* STARS */}
                                            <div className="flex items-center gap-1 mt-5 text-yellow-500">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={20}
                                                        fill="currentColor"
                                                    />
                                                ))}
                                            </div>

                                            {/* USER INFO */}
                                            <div className="mt-4">
                                                <p className="font-semibold text-lg text-[#0A2540]">
                                                    {item.name}
                                                </p>

                                                <p className="text-gray-500 text-sm">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DOTS */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`transition-all duration-300 rounded-full ${current === index
                                        ? "w-8 h-2 bg-yellow-600"
                                        : "w-2 h-2 bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}