import React from "react";
import CardText from "../CardText/CardText";
import CircleButton from "../CircleButton/CircleButton";

const CardBackground = ({
  profileImage,
  vectorImage,
  text = "name not found",
  onPrev,
  onNext,
  backgroundColor = "#F85A5A",
  imagePositionClass = "absolute bottom-0 left-0 translate-y-[5%]",
  textPositionClass = "absolute top-12 left-1/2 translate-x-8",
}) => {
  return (
    <div
      className="relative w-[592px] h-[341px] rounded-3xl px-6 py-4 overflow-visible"
      style={{ backgroundColor }}
    >
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-10">
        <div className="relative w-24 h-24">
          <div className="absolute left-3 top-0 w-20 h-20 bg-white rounded-r-full transform -translate-x-3" />
          <div className="absolute left-0 top-0 w-20 h-20 flex items-center justify-center">
            <CircleButton direction="left" onClick={onPrev} />
          </div>
        </div>
      </div>

      <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
        <div className="relative w-24 h-24">
          <div className="absolute right-3 top-0 w-20 h-20 bg-white rounded-l-full transform translate-x-3" />
          <div className="absolute right-0 top-0 w-20 h-20 flex items-center justify-center">
            <CircleButton direction="right" onClick={onNext} />
          </div>
        </div>
      </div>

      <div className="relative w-full h-full">
        <img
          src={profileImage.src}
          alt={profileImage.alt}
          className={`w-[340px] rounded-xl ${imagePositionClass}`}
        />
        <div className={`${textPositionClass} max-w-xs`}>
          <CardText text={text} />
        </div>
      </div>
    </div>
  );
};

export default CardBackground;
