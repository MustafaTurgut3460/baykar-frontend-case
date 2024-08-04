import React from "react";

interface ItemProps {
  icon: string;
  label: string;
  selectedKey: string;
  setSelectedKey: (selectedKey: string) => void;
  itemKey: string;
}

const ImageItem: React.FC<ItemProps> = ({
  icon,
  label,
  itemKey,
  selectedKey,
  setSelectedKey,
}) => {
  return (
    <div
      className={`flex items-center space-x-2 p-4 cursor-pointer w-fit min-w-fit rounded-lg transition-all duration-300 ${
        itemKey === selectedKey
          ? "bg-white shadow-image-item"
          : "hover:bg-white hover:bg-opacity-50 hover:shadow-image-item"
      }`}
      onClick={() => setSelectedKey(itemKey)}
    >
      <img src={`icons/${icon}.svg`} alt="" />
      <p className="font-medium">{label}</p>
      {itemKey === selectedKey && <img src="icons/arrow-right.svg" alt="" className="hidden lg:block"/>}
    </div>
  );
};

export default ImageItem;
