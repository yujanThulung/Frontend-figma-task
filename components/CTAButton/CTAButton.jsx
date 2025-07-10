import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CTAButton = ({ text, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`group inline-flex items-center gap-2 font-medium text- transition-all duration-300 ${className}`}
        >
            <span className="transform transition-transform duration-300 group-hover:-translate-x-1 font-outfit text-lg">
                {text}
            </span>

            <FaArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </button>
    );
};

export default CTAButton;
