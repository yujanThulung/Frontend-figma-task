import React from "react";
import { FaHandshakeSimple } from "react-icons/fa6";

import TestimonialHeader from "../../components/Testimonial/TestimonialHeader";
import GreenText from "../../components/GreenText/GreenText";
import CTAButton from "../../components/CTAButton/CTAButton";
import SmallImage from "../../components/SmallImage/SmallImage";
import GifIcon from "../../components/GifIcon/GifIcon";

import { profileImages, gifIcons } from "../../src/assets/images/Task1/image.js";

const TestimonialSection = () => {
    return (
        <section className="relative w-full min-h-screen bg-white flex items-center justify-center py-20 px-4">
            <div className="group w-[400px] h-[400px] flex items-center justify-center">
                {profileImages.map((image, index) => {
                    const basePositions = [
                        "top-[20%] left-[36%]",
                        "bottom-[28%] left-[36%]",
                        "top-[20%] right-[42%]",
                        "bottom-[44%] left-[28%]",
                        "bottom-[45%] right-[30%]",
                        "bottom-[28%] right-[40%]",
                    ];

                    const hoverPositions = [
                        "group-hover:top-[10%] group-hover:left-[28%]",
                        "group-hover:bottom-[12%] group-hover:left-[30%]",
                        "group-hover:top-[10%] group-hover:right-[28%]",
                        "group-hover:bottom-[44%] group-hover:left-[14%]",
                        "group-hover:bottom-[45%] group-hover:right-[14%]",
                        "group-hover:bottom-[12%] group-hover:right-[30%]",
                    ];

                    const positionClass = basePositions[index % basePositions.length];
                    const hoverClass = hoverPositions[index % hoverPositions.length];

                    return (
                        <SmallImage
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={`absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${positionClass} ${hoverClass}`}
                        />
                    );
                })}

                {gifIcons.map((gif, index) => {
                    const iconPositions = [
                        "top-[20%] right-[50%]",
                        "bottom-[30%] right-[32%]",
                        "bottom-[28%] left-[45%]",
                        "bottom-[30%] left-[28%]",
                    ];

                    const hoverIconPositions = [
                        "group-hover:top-[12%] group-hover:right-[50%]",
                        "group-hover:bottom-[30%] group-hover:right-[28%]",
                        "group-hover:bottom-[12%] group-hover:left-[45%]",
                        "group-hover:bottom-[30%] group-hover:left-[24%]",
                    ];

                    const iconPositionClass = iconPositions[index % iconPositions.length];
                    const iconHoverClass = hoverIconPositions[index % hoverIconPositions.length];

                    return (
                        <GifIcon
                            key={index}
                            src={gif.src}
                            alt={gif.alt}
                            className={`absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${iconPositionClass} ${iconHoverClass}`}
                        />
                    );
                })}

                <div className="text-center space-y-5 z-10">
                    <TestimonialHeader
                        subheading="Hear How They Level Up Their Game!"
                        heading={
                            <>
                                Skill <GreenText>Masters</GreenText> Unite!{" "}
                                <FaHandshakeSimple className="inline-block text-yellow-400 size-8" />
                            </>
                        }
                    />
                    <CTAButton text="View all Testimonials" />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
