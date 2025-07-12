import React from "react";

const TopCardbackgrond = ({
  title,
  subtitle,
  description,
  image,
  backgroundColor,
  imagePositionClass = "absolute bottom-0 right-6", 
  textPositionClass = "", 
}) => {
  return (
    <div
      className="relative rounded-2xl px-8 py-6 flex items-center font-[Nohemi]"
      style={{ backgroundColor, width: "600px", height: "340px" }}
    >
      <div className={`text-white max-w-[60%] ${textPositionClass}`}>
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        <h4 className="text-lg font-semibold mb-4">{subtitle}</h4>
        <p className="text-base leading-relaxed whitespace-pre-line">{description}</p>
      </div>
      <div className={imagePositionClass}>
        <img src={image.src} alt={image.alt} className="w-72" />
      </div>
    </div>
  );
};

export default TopCardbackgrond;
