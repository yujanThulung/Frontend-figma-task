import React from "react";
import CardText from "../CardText/CardText";
import CircleButton from "../CircleButton/CircleButton";

const CardBackground = ({ profileImage, vectorImage }) => {
    return (
        <div className="relative w-[600px] h-[340px] bg-[#F85A5A] rounded-3xl flex items-center justify-between px-6 py-4">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 bg-white rounded-full z-0 -translate-x-14" />
                    <CircleButton direction="left" />
                </div>
            </div>

            <div className="flex items-center justify-center w-full gap-6">
                <div className="relative">
                    <img
                        src={profileImage.src}
                        alt={profileImage.alt}
                        className="w-[280px] rounded-xl"
                    />
                    <img
                        src={vectorImage.src}
                        alt={vectorImage.alt}
                        className="absolute top-0 left-0 w-16"
                    />
                </div>
                <CardText />
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                <div className="relative w-26 h-22" dir="rtl">
                    <div className="absolute inset-0 bg-white  rounded-l-full right-9 z-0 translate-x-16" />
                    <div></div>
                    <div className="absolute inset-0 bg-gray-800 rounded-s-full z-0 left-[20%]  top-[20%] translate-x-[22%] -translate-y-[95%]" />
                    <CircleButton direction="right" />
                </div>
            </div>
        </div>
    );
};

export default CardBackground;
