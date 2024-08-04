import React from "react";

interface DotProps {
  itemKey: string;
  selectedKey: string;
  setSelectedKey: (key: string) => void;
  className?: string;
}

const MapDot: React.FC<DotProps> = ({
  itemKey,
  selectedKey,
  setSelectedKey,
  className,
}) => {
  return (
    <div
      className={`absolute transform -translate-x-1/2 translate-y-1/2 w-5 h-5 rounded-full border-2 border-[#A3E635] ${
        itemKey === selectedKey
          ? "bg-[#A3E635]"
          : "hover:bg-[#A3E635] hover:bg-opacity-20"
      } transition-all duration-300 cursor-pointer relative ${className}`}
      onClick={() => setSelectedKey(itemKey)}
    >
      {itemKey === selectedKey && (
        <div
          className={`absolute bottom-full left-1/2 transform -translate-x-1/2 rounded-md animate-fadeIn ${
            itemKey === selectedKey
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          {/* Üçgen */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#E2E8F0] transition-all duration-300"></div>

          {/* Görsel ve Metin */}
          <div className="rounded-2xl w-48 h-48">
            <img
              src="images/Picture6.png"
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="bg-[#E2E8F0] max-w-full p-2 rounded-md -mt-10">
            <p className="text-xs mt-2">
              Emma Simpson collected one pair of Cool Shoes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapDot;
