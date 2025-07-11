import React from "react";
import CardText from "../CardText/CardText";
import CircleButton from "../CircleButton/CircleButton";

const CardBackground = ({ profileImage, vectorImage }) => {
    return (
        <div className="relative w-[600px] h-[340px] bg-[#F85A5A] rounded-3xl flex items-center justify-between px-6 py-4 overflow-visible">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-10">
                <div className="relative w-24 h-24">
                    <div className="absolute left-3 top-0 w-20 h-20 bg-white rounded-r-full transform -translate-x-3" />
                    <div className="absolute left-0 top-0 w-20 h-20 flex items-center justify-center">
                        <CircleButton direction="left" />
                    </div>
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

            <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                <div className="relative w-24 h-24">
                    <div className="absolute right-3 top-0 w-20 h-20 bg-white rounded-l-full transform translate-x-3" />
                    <div className="absolute right-0 top-0 w-20 h-20 flex items-center justify-center">
                        <CircleButton direction="right" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardBackground;
