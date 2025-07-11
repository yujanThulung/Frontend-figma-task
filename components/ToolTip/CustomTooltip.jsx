import React, { useEffect, useState } from "react";

const CustomTooltip = ({
    text,
    stars,
    video,
    photo,
    hoverText = null,
    svgImg = null,
    interval = 3000,
    duration = 3000,
    position = "right",
    children,
}) => {
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        const showTimeout = setTimeout(() => setVisible(true), interval);
        const hideTimeout = setTimeout(() => setVisible(false), interval + duration);

        const intervalId = setInterval(() => {
            setVisible(true);
            setTimeout(() => setVisible(false), duration);
        }, interval + duration);

        return () => {
            clearTimeout(showTimeout);
            clearTimeout(hideTimeout);
            clearInterval(intervalId);
        };
    }, [interval, duration]);

    let positionClasses = "";
    let arrowClasses = "";

    switch (position) {
        case "top":
            positionClasses = "bottom-full mb-3 left-1/2 -translate-x-1/2";
            arrowClasses =
                "absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white";
            break;

        case "bottom":
            positionClasses = "top-full mt-3 left-1/2 -translate-x-1/2";
            arrowClasses =
                "absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-white";
            break;

        case "right":
            positionClasses = "left-full ml-3 top-1/2 -translate-y-1/2";
            arrowClasses =
                "absolute top-1/2 -translate-y-1/2 -left-2 border-8 border-transparent border-r-white";
            break;

        case "left":
            positionClasses = "right-full mr-3 top-1/2 -translate-y-1/2";
            arrowClasses =
                "absolute top-1/2 -translate-y-1/2 -right-2 border-8 border-transparent border-l-white";
            break;

        default:
            positionClasses = "top-full mt-3 left-1/2 -translate-x-1/2";
            arrowClasses =
                "absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-white";
            break;
    }

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => {
                setHovered(true);
                setVisible(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
                setVisible(false);
            }}
        >
            {children}
            {visible && (
                <div
                    className={`absolute z-10 bg-white  rounded-lg shadow-lg transition-opacity duration-300 ${positionClasses}`}
                >
                    <div className={arrowClasses} />
                    {hoverText && hovered ? (
                        <div className="flex items-center w-40 justify-center">
                            {svgImg && (
                                <img src={svgImg} alt="svg tooltip" className="w-auto h-auto" />
                            )}
                            {hoverText && <div>{hoverText}</div>}
                        </div>
                    ) : video ? (
                    <video src={video} autoPlay loop className=" h-auto rounded-lg" />
                    ) : photo ? (
                    <img src={photo} alt="photo" className="w-full h-auto rounded-lg" />) : (
                    <div>
                        <p className="text-gray-800">
                            {text}
                            {stars}
                        </p>
                    </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default CustomTooltip;
