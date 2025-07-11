import React from "react";
import CardBackground from "../../components/CardBackground/CardBackground ";
import { profileImages, vectorImg } from "../../src/assets/images/Task2/image";

const IndexPage = () => {
    const currentIndex = 0; 

    return (
        <section className="relative w-full min-h-screen bg-white flex items-center justify-center py-20 px-4">
            <div className="group w-[600px] h-[340px] flex items-center justify-center">
                <CardBackground
                    profileImage={profileImages[currentIndex]}
                    vectorImage={vectorImg[currentIndex]}
                />
            </div>
        </section>
    );
};

export default IndexPage;
