import React from "react";
import { FaHandshakeSimple } from "react-icons/fa6";

import TestimonialHeader from "../../components/Testimonial/TestimonialHeader";
import GreenText from "../../components/GreenText/GreenText";
import CTAButton from "../../components/CTAButton/CTAButton";
import SmallImage from "../../components/SmallImage/SmallImage";

import { profileImages, gifIcons } from "../../src/assets/images/Task1/image.js";

const TestimonialSection = () => {
    return (
        <section className="w-full min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                {profileImages.map((image, index) => {
                    const positions = [
                        "top-0 right-1/5 translate-x-1/5",
                        "top-0 right-3/4 -translate-x-3/5",
                        "top-[38%] right-[-28%] -translate-y-1/2",
                        "button-1-2 left-[-38%]  -translate-x-1/2",
                        "bottom-1/4 left-0 translate-y-4/5",
                        "bottom-1/4 right-0 translate-y-2/3",
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
