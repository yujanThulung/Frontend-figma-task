import React, { useState } from "react";
import CardBackground from "../../components/CardBackground/CardBackground ";
import TopCardbackgrond from "../../components/TopCardbackgrond/TopCardbackgrond";
import { profileImages, vectorImg } from "../../src/assets/images/Task2/image";

const cardText = [
    "Focused faces—learning\n mode: ON!",
    "Laptops, lessons, and a whole lot of growth!",
    "Clarity unlocked—\nstickers, sips, and skills all in one go!",
    "Ideas flowing—\nwhere creativity meets clarity!",
];

const cardData = [
    {
        title: "Learn by Doing",
        subtitle: "Practical skills, real projects.",
        description: `Theory is great, but action is better. At SkillShikshya, you learn by doing. 
Hands-on projects and real-world scenarios help you build, break, and create—
leading to true mastery.`,
        image: vectorImg[0],
        backgroundColor: "#5492A0",
        imagePositionClass: "absolute bottom-0 left-6 bottom-0 translate-y-[20%]",
        textPositionClass: "absolute top-12 left-8 text-right",
    },
    {
        title: "Start with Clarity",
        subtitle: "Step into a better learning path.",
        description: `Overwhelmed by too many learning options? SkillShikshya provides a clear, 
curated roadmap from the start. Whether you're a beginner or upskilling, 
we have a path tailored to your growth.`,
        image: vectorImg[1],
        backgroundColor: "#F85A5A",
        imagePositionClass: "absolute bottom-0 translate-y-[20%] left-1/2 w-full rounded-xl transform -translate-x-1/2",
        textPositionClass: "absolute top-16 right-0 transform -translate-x-1/2",
    },
    {
        title: "Get Mentored & Supported",
        subtitle: "You're not learning alone.",
        description: `Stuck or need feedback? SkillShikshya’s community of mentors and learners 
has your back with live support, interactive discussions, and expert insights. 
You're never on your own.`,
        image: vectorImg[3],
        backgroundColor: "#6C64A8",
        imagePositionClass: "absolute bottom-0 right-6 bottom-0 translate-y-[20%]",
        textPositionClass: "absolute top-12 left-8",
    },
];

const IndexPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % 2);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + 2) % 2);
    };

    const imagePositionClass =
        currentIndex === 1
            ? "absolute bottom-0 left-1/2 w-full rounded-xl transform -translate-x-1/2 translate-y-[5%]"
            : "absolute bottom-0 right-0 w-lg translate-y-[5%] translate-x-[5%]";

    const textPositionClass =
        currentIndex === 1
            ? "absolute top-16 left-1/2 px-4 text-center transform -translate-x-1/2 -translate-y-[40%]"
            : "absolute top-12 left-8";

    return (
        <section className="w-full min-h-screen bg-white flex flex-wrap justify-between items-center gap-y-10 px-36 py-6">
            <div className="w-[600px] h-[340px] flex items-center justify-center">
                <CardBackground
                    profileImage={profileImages[2]}
                    text={cardText[2]}
                    backgroundColor="#F85A5A"
                    imagePositionClass="absolute bottom-0 left-0 translate-y-[5%]"
                    textPositionClass="absolute top-12 left-1/2 translate-x-8"
                />
            </div>

            <div className="w-[600px] h-[340px] flex items-center justify-center">
                <CardBackground
                    profileImage={profileImages[currentIndex]}
                    text={cardText[currentIndex]}
                    onPrev={handlePrev}
                    onNext={handleNext}
                    backgroundColor="#5492A0"
                    imagePositionClass={imagePositionClass}
                    textPositionClass={textPositionClass}
                />
            </div>

            {cardData.map((card, idx) => (
                <div key={idx} className="w-[600px] h-[340px] flex items-center justify-center">
                    <TopCardbackgrond
                        title={card.title}
                        subtitle={card.subtitle}
                        description={card.description}
                        image={card.image}
                        backgroundColor={card.backgroundColor}
                        imagePositionClass={card.imagePositionClass}
                        textPositionClass={card.textPositionClass}
                    />
                </div>
            ))}
        </section>
    );
};

export default IndexPage;
