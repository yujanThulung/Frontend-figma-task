import React from "react";
import { FaHandshakeSimple } from "react-icons/fa6";

import TestimonialHeader from "../../components/Testimonial/TestimonialHeader";
import GreenText from "../../components/GreenText/GreenText";
import CTAButton from "../../components/CTAButton/CTAButton";
import SmallImage from "../../components/SmallImage/SmallImage";

const TestimonialSection = () => {
    return (
        <section className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-5">
                <TestimonialHeader
                    subheading="Hear How They Level Up Their Game!"
                    heading={
                        <>
                            Skill <GreenText>Masters</GreenText> Unite!{" "}
                            <FaHandshakeSimple className="inline-block text-yellow-400 size-8" />
                        </>
                    }
                />
                <CTAButton 
                text={"View all Testimonials"}/>
            </div>

            <SmallImage />
        </section>
    );
};

export default TestimonialSection;
