import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CircleButton = ({ direction = "right", onClick }) => (
    <button
        onClick={onClick}
        className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center  relative z-10"
    >
        {direction === "left" ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
);

export default CircleButton;
