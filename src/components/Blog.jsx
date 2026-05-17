import React from "react";
import { FileText } from "lucide-react";

const Blog = () => {
    return (
        <div className="bg-gradient-to-b from-orange-50 to-white py-16 px-6">
            <div className="max-w-xl mx-auto text-center">

                <FileText className="mx-auto text-orange-500 mb-4" size={36} />

                <h1 className="text-3xl font-semibold text-gray-800 mb-3">
                    Blogs Coming Soon
                </h1>

                <p className="text-gray-600 leading-relaxed">
                    We are preparing helpful blogs about water purifiers, RO filters,
                    maintenance tips, and clean water solutions. Stay tuned.
                </p>

                <p className="mt-5 text-sm text-gray-400">
                    Fresh content will be updated soon.
                </p>

            </div>
        </div>
    );
};

export default Blog;