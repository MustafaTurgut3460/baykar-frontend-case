import React from "react";

interface CardProps {
  image: string;
  logo: string;
  text: string;
  name: string;
  title: string;
}

const UserInfoCard: React.FC<CardProps> = ({image, logo, name, text, title}) => {
  return (
    <div className="bg-white shadow-video-card rounded-2xl py-10 px-5 max-w-72 col-span-3">
      <img src={`icons/${logo}.svg`} alt="" />
      <p className="mt-6 text-base font-medium">
        {text}
      </p>
      <div className="flex items-center space-x-4 mt-8">
        <img src={`images/${image}.png`} alt="" className="w-12 h-12" />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-[#475569] ">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
