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
            <div className=" w-[400px] h-[400px] flex items-center justify-center">
                {profileImages.map((image, index) => {
                    const positions = [
                        "top-[20%] left-[36%]",
                        "bottom-[28%] left-[36%]",
                        "top-[20%] right-[42%]",
                        "bottom-[44%] left-[28%]",
                        "bottom-[45%] right-[30%]",
                        "bottom-[28%] right-[40%]",
                    ];
                    const positionClass = positions[index % positions.length];

                    return (
                        <SmallImage
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={`absolute ${positionClass}`}
                        />
                    );
                })}

                {gifIcons.map((gif, index) => {
                    const iconPositions = [
                        "top-[20%] right-[50%]",
                        "bottom-[26%] right-[30%]",
                        "bottom-[28%] left-[45%]",
                        "bottom-[30%] left-[28%]",
                    ];

                    
                    const iconPositionClass = iconPositions[index % iconPositions.length];

                    return (
                        <GifIcon
                            key={index}
                            src={gif.src}
                            alt={gif.alt}
                            className={`absolute ${iconPositionClass}`}
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
