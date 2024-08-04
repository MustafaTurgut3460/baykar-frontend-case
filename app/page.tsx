"use client";

import Image from "next/image";
import Menu from "./components/Menu";
import OutlineButton from "./components/OutlineButton";
import UserInfoCard from "./components/UserInfoCard";
import ImageItem from "./components/ImageItem";
import { useState } from "react";
import MapDot from "./components/MapDot";

export default function Home() {
  const [selectedKey, setSelectedKey] = useState("0");
  const [selectedMapDot, setSelectedMapDot] = useState("0");

  const scrollLeft = () => {
    const container = document.getElementById("scrollable-container");
    if (container) {
      container.scrollLeft -= container.offsetWidth;
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("scrollable-container");
    if (container) {
      container.scrollLeft += container.offsetWidth;
    }
  };

  return (
    <div className="bg-[#fffbeb] overflow-x-hidden">
      <div className="lg:px-20 px-4">
        <div className="relative z-10">
          <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[90vh] border-b-[#FEF3C7] border-l-[100vw] border-l-transparent z-0 -mx-4 lg:-mx-20"></div>
          <Menu />
          <div className="py-20 grid grid-cols-12 gap-0 lg:gap-12 gap-y-12 items-center relative z-20">
            <div className="lg:col-span-6 col-span-12 text-center lg:text-start">
              <h1 className="text-5xl lg:text-7xl font-bold text-[#0F172A] z-0">
                Collectible Sneakers
              </h1>
              <p className="mt-8 text-[#0F172A]">
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                ultrices amet.
              </p>
              <div className="flex justify-center lg:justify-start items-center space-x-4 mt-8">
                <OutlineButton label="Sign Up now" className="text-primary" />
                <div className="flex items-center space-x-1 text-primary font-medium py-2 px-4 rounded-md transition-all duration-300 cursor-pointer hover:bg-primary hover:bg-opacity-10">
                  <img src="icons/play-circle.svg" alt="" />
                  <p>Watch Demo</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 col-span-12 relative flex items-center justify-center">
              <div className="absolute w-auto h-5/6 bg-[#FBBF24] rounded-[50px] z-10 aspect-square"></div>
              <img
                src="images/shoes.png"
                alt=""
                className="relative z-20 mb-10 xl:w-4/6 w-5/6"
              />
            </div>
          </div>

          <div className="py-20 grid grid-cols-12 gap-0 lg:gap-12 gap-y-12 relative z-20">
            <div className="md:col-span-4 col-span-12 text-center md:text-start">
              <div className="relative md:block flex justify-center">
                <img src="icons/trophy.svg" alt="" />
                <div className="absolute md:left-5 left-[45%] top-0 triangle opacity-50 bg-[#0369A1]"></div>
              </div>
              <p className="text-lg text-[#0F172A] font-semibold mt-2">
                Nibh viverra
              </p>
              <p className="text-[#0F172A] text-base mt-2">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </p>
            </div>

            <div className="md:col-span-4 col-span-12 text-center md:text-start">
              <div className="relative md:block flex justify-center">
                <img src="icons/tunnel.svg" alt="" />
                <div className="absolute md:left-5 left-[45%] top-0 triangle opacity-50 -rotate-45 bg-[#15803D]"></div>
              </div>
              <p className="text-lg text-[#0F172A] font-semibold mt-2">
                Cursus amet
              </p>
              <p className="text-[#0F172A] text-base mt-2">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </p>
            </div>

            <div className="md:col-span-4 col-span-12 text-center md:text-start">
              <div className="relative md:block flex justify-center">
                <img src="icons/tv.svg" alt="" />
                <div className="absolute md:left-10 left-[52%] w-10 h-10 rounded-2xl top-0 opacity-50 bg-[#A21CAF]"></div>
              </div>
              <p className="text-lg text-[#0F172A] font-semibold mt-2">
                Ipsum fermentum
              </p>
              <p className="text-[#0F172A] text-base mt-2">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </p>
            </div>
          </div>
        </div>

        <div className="p-20 z-20 bg-dark -mx-20 relative">
          <div className="absolute left-11 bottom-32 w-24 h-24 xl:w-64 xl:h-64 lg:x-48 lg:h-48 md:x-32 md:h-32 bg-[#BE185D] rounded-xl md:rounded-[30px] lg:rounded-[50px] z-0"></div>
          <div className="absolute right-20 lg:left-[650px] top-96 lg:top-48 xl:w-48 xl:h-48 lg:w-32 lg:h-32 md:w-24 md:h-24 w-16 h-16  bg-[#0369A1] rounded-xl md:rounded-[30px] lg:rounded-[50px] z-0"></div>
          <div className="absolute right-10 lg:top-72 top-96 xl:w-56 xl:h-56 lg:w-44 lg:h-44 md:w-32 md:h-32 w-24 h-24 bg-[#15803D] rounded-xl md:rounded-[30px] lg:rounded-[50px] z-0"></div>
          <div className="absolute right-52 bottom-10 xl:w-52 xl:h-52 lg:w-40 lg:h-40 md:w-28 md:h-28 h-16 w-16 bg-[#A21CAF] rounded-xl md:rounded-[30px] lg:rounded-[50px] z-0"></div>

          <div className="lg:flex block justify-between text-center lg:text-start md:mx-20 sm:mx-10 mx-0 lg:mx-0">
            <h1 className="text-5xl text-white font-bold">
              The best of the best
            </h1>
            <div className="px-6 py-3 mt-8 lg:mt-0 text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 cursor-pointer transition-all duration-300">
              Sign up now
            </div>
          </div>
          <div className="grid grid-cols-12 gap-y-12 lg:gap-12 mt-20 z-20 relative">
            <div className="lg:col-span-4 col-span-12 bg-dark rounded-xl text-white shadow-custom-combined">
              <img
                src="images/Picture1.png"
                alt=""
                className="rounded-t-xl w-full"
              />
              <div className="p-8">
                <h6 className="font-semibold text-xl">Title</h6>
                <p className="text-base opacity-80 mt-4">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
                <div className="py-8">
                  <div className="p-4 flex items-center justify-center space-x-2 border-2 border-white rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                    <img src="icons/shopping-cart.svg" alt="" />
                    <p className="font-semibold">Buy Now</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 col-span-12 bg-dark rounded-xl text-white shadow-custom-combined">
              <img
                src="images/Picture1.png"
                alt=""
                className="rounded-t-xl w-full"
              />
              <div className="p-8">
                <h6 className="font-semibold text-xl">Title</h6>
                <p className="text-base opacity-80 mt-4">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
                <div className="py-8">
                  <div className="p-4 flex items-center justify-center space-x-2 border-2 border-white rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                    <img src="icons/shopping-cart.svg" alt="" />
                    <p className="font-semibold">Buy Now</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 col-span-12 bg-dark rounded-xl text-white shadow-custom-combined">
              <img
                src="images/Picture1.png"
                alt=""
                className="rounded-t-xl w-full"
              />
              <div className="p-8">
                <h6 className="font-semibold text-xl">Title</h6>
                <p className="text-base opacity-80 mt-4">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
                <div className="py-8">
                  <div className="p-4 flex items-center justify-center space-x-2 border-2 border-white rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                    <img src="icons/shopping-cart.svg" alt="" />
                    <p className="font-semibold">Buy Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-40">
          <div className="bg-white shadow-video-card lg:p-20 p-10 rounded-[30px] grid grid-cols-12 lg:gap-8 gap-y-24 items-center">
            <div className="lg:col-span-6 col-span-12">
              <h2 className="lg:text-5xl text-4xl font-bold text-center lg:text-start">
                Why join us
              </h2>
              <div className="flex items-center space-x-2 mt-6">
                <img src="icons/check.svg" alt="" />
                <p className="text-base text-[#0F172A]">
                  Est et in pharetra magna adipiscing ornare aliquam.
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <img src="icons/check.svg" alt="" />
                <p className="text-base text-[#0F172A] ">
                  Tellus arcu sed consequat ac velit ut eu blandit.
                </p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <img src="icons/check.svg" alt="" />
                <p className="text-base text-[#0F172A] ">
                  Ullamcorper ornare in et egestas dolor orci.
                </p>
              </div>
              <div className="flex justify-center lg:block">
                <OutlineButton
                  label="Sign up now"
                  className="text-primary w-min text-nowrap mt-6"
                />
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 relative flex items-center justify-center">
              <div className="bg-white shadow-video-card p-2 rounded-2xl z-20">
                <div className="flex items-center space-x-1 p-2">
                  <div className="w-2 h-2 rounded-full bg-[#E11D48] "></div>
                  <div className="w-2 h-2 rounded-full bg-[#FBBF24] "></div>
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] "></div>
                </div>
                <img
                  src="images/Video.png"
                  alt=""
                  className="w-full -mt-3 rounded-xl"
                />
              </div>
              <div className="absolute w-[calc(100%+100px)] lg:w-full xl:h-56 lg:h-48 md:h-40 h-32 bg-[#FDE68A] -rotate-45 z-0"></div>
              <div className="absolute lg:-top-24 -top-10 lg:right-12 -right-4 lg:w-16 lg:h-16 h-8 w-8 rounded-full bg-[#0369A1] z-0 opacity-75"></div>
              <div className="absolute lg:top-10 lg:left-16 left-0 top-12 lg:w-20 lg:h-20 w-10 h-10 rounded-[30px] bg-[#B45309] z-0 opacity-75"></div>
              <div className="absolute lg:-bottom-10 -bottom-4 lg:left-32 left-10 lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-[#15803D] z-20 opacity-75"></div>
              <div className="absolute lg:-bottom-10 -bottom-4 lg:right-32 right-10 lg:w-16 lg:h-16 w-8 h-8 rounded-3xl bg-[#A21CAF] z-0 opacity-75"></div>
              <div className="absolute lg:-bottom-24 -bottom-12 lg:-right-14 -right-16 lg:w-56 lg:h-56 w-32 h-32 rounded-[36px] lg:rounded-[50px] bg-[#BE185D] z-0 opacity-75"></div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="flex lg:justify-between justify-center items-center">
            <h2 className="text-5xl font-bold text-center lg:text-start">
              Because they love us
            </h2>
            <div className="lg:flex items-center space-x-4 hidden">
              <button
                className="rounded-full border-2 border-primary p-2 hover:bg-primary hover:bg-opacity-10 transition-all duration-300"
                onClick={() => scrollLeft()}
              >
                <img src="icons/arrow-left.svg" alt="" />
              </button>
              <button
                className="rounded-full border-2 border-primary p-2 hover:bg-primary hover:bg-opacity-10 transition-all duration-300"
                onClick={() => scrollRight()}
              >
                <img src="icons/arrow-left.svg" alt="" className="rotate-180" />
              </button>
            </div>
          </div>
          <div className="-mx-20 flex justify-center mt-10 relative">
            <div className="bg-[#FDE68A] w-full h-[300px] z-0 mx-10"></div>
            <div
              className="absolute top-10 max-w-full overflow-x-auto grid grid-flow-col auto-cols-max gap-8 z-10 pb-10 px-20"
              id="scrollable-container"
            >
              <UserInfoCard
                image="user1"
                logo="Logo-zoomer"
                name="Hellen Jummy"
                text="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
                title="Team Lead"
              />

              <UserInfoCard
                image="user2"
                logo="Logo-shells"
                name="Hellena John"
                text="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
                title="Co Founder"
              />

              <UserInfoCard
                image="user3"
                logo="Logo-art"
                name="David Oshodi"
                text="A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed."
                title="Manager"
              />

              <UserInfoCard
                image="user4"
                logo="Logo-zoomer"
                name="Hellen Jummy"
                text="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
                title="Team Lead"
              />

              <UserInfoCard
                image="user4"
                logo="Logo-zoomer"
                name="Hellen Jummy"
                text="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
                title="Team Lead"
              />
              <UserInfoCard
                image="user4"
                logo="Logo-zoomer"
                name="Hellen Jummy"
                text="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
                title="Team Lead"
              />
              <UserInfoCard
                image="user4"
                logo="Logo-zoomer"
                name="Hellen Jummy"
                text="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
                title="Team Lead"
              />
              <UserInfoCard
                image="user4"
                logo="Logo-zoomer"
                name="Hellen Jummy"
                text="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
                title="Team Lead"
              />
              <UserInfoCard
                image="user4"
                logo="Logo-zoomer"
                name="Hellen Jummy"
                text="Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor."
                title="Team Lead"
              />
            </div>
          </div>
        </div>

        <div className="py-20 -mx-20 relative">
          <div className="px-20">
            <h2 className="lg:text-6xl text-4xl font-bold text-[#0F172A] mt-20 text-center lg:text-start">
              Grow your collection
            </h2>
            <p className="text-base font-medium text-[#0F172A] mt-8 lg:mr-40 text-center lg:text-start">
              Enim neque massa porta adipiscing elit. Sem libero id faucibus
              nibh amet dictum pellentesque sed. Eu non turpis risus odio
              sapien, fames sit rhoncus. Nec magna sed interdum sit purus
              tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>

            <div className="grid grid-cols-12 lg:gap-8 gap-y-8 mt-20 z-30 relative">
              <div className="lg:col-span-4 col-span-12 lg:flex-col lg:space-y-4 flex space-x-8 lg:space-x-0 overflow-x-auto text-nowrap items-center lg:items-start pb-4 lg:pb-0">
                <ImageItem
                  icon={"search"}
                  label={"Bibendum tellus"}
                  itemKey="0"
                  selectedKey={selectedKey}
                  setSelectedKey={setSelectedKey}
                />

                <ImageItem
                  icon={"shield-check"}
                  label={"Cras eget"}
                  itemKey="1"
                  selectedKey={selectedKey}
                  setSelectedKey={setSelectedKey}
                />
                <ImageItem
                  icon={"rocket"}
                  label={"Dolor pharetra"}
                  itemKey="2"
                  selectedKey={selectedKey}
                  setSelectedKey={setSelectedKey}
                />
                <ImageItem
                  icon={"screen"}
                  label={"Amet, fringilla"}
                  itemKey="3"
                  selectedKey={selectedKey}
                  setSelectedKey={setSelectedKey}
                />
                <ImageItem
                  icon={"podcast"}
                  label={"Amet nibh"}
                  itemKey="4"
                  selectedKey={selectedKey}
                  setSelectedKey={setSelectedKey}
                />
                <ImageItem
                  icon={"settings-alt"}
                  label={"Sed velit"}
                  itemKey="5"
                  selectedKey={selectedKey}
                  setSelectedKey={setSelectedKey}
                />
              </div>
              <div className="lg:col-span-8 col-span-12 relative">
                <div className="bg-white shadow-video-card p-2 rounded-2xl z-10 w-5/6">
                  <div className="flex items-center space-x-1 p-2">
                    <div className="w-2 h-2 rounded-full bg-[#E11D48] "></div>
                    <div className="w-2 h-2 rounded-full bg-[#FBBF24] "></div>
                    <div className="w-2 h-2 rounded-full bg-[#22C55E] "></div>
                  </div>
                  <img
                    src="images/Video.png"
                    alt=""
                    className="w-full -mt-3 rounded-xl"
                  />
                </div>

                <div className="bg-white shadow-video-card p-2 rounded-2xl z-10 absolute top-24 left-20 w-5/6">
                  <div className="flex items-center space-x-1 p-2">
                    <div className="w-2 h-2 rounded-full bg-[#E11D48] "></div>
                    <div className="w-2 h-2 rounded-full bg-[#FBBF24] "></div>
                    <div className="w-2 h-2 rounded-full bg-[#22C55E] "></div>
                  </div>
                  <img
                    src="images/Picture4.png"
                    alt=""
                    className="w-full -mt-3 rounded-xl"
                  />
                </div>

                <div className="p-2 rounded-2xl z-10 absolute top-48 -right-10 w-2/6">
                  <img
                    src="images/Picture5.png"
                    alt=""
                    className="w-full -mt-3 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            src="images/Vector1.svg"
            alt=""
            className="w-full absolute bottom-0 right-0 z-20"
          />
          <img
            src="images/Vector2.svg"
            alt=""
            className="w-full absolute bottom-0 right-0 z-10"
          />
          <img
            src="images/Vector3.svg"
            alt=""
            className="w-full absolute bottom-0 right-0 z-0"
          />
        </div>

        <div className="bg-[#78350F] py-20 -mx-20 flex justify-center pt-40 lg:pt-20 overflow-x-auto">
          <div className="relative inline-block">
            <img src="images/chart.png" alt="" />
            <h1 className="text-white lg:text-7xl text-5xl font-bold text-center absolute inset-0 -top-12 flex items-center justify-center">
              11,658,467
            </h1>
            <h2 className="text-white lg:text-5xl text-3xl font-bold text-center absolute inset-0 lg:top-24 top-12 flex items-center justify-center">
              Shoes Collected
            </h2>
            <MapDot
              itemKey={"0"}
              selectedKey={selectedMapDot}
              setSelectedKey={setSelectedMapDot}
              className="bottom-[50%] left-[20%]"
            />

            <MapDot
              itemKey={"1"}
              selectedKey={selectedMapDot}
              setSelectedKey={setSelectedMapDot}
              className="bottom-[70%] left-[60%]"
            />

            <MapDot
              itemKey={"2"}
              selectedKey={selectedMapDot}
              setSelectedKey={setSelectedMapDot}
              className="bottom-[50%] left-[70%]"
            />

            <MapDot
              itemKey={"3"}
              selectedKey={selectedMapDot}
              setSelectedKey={setSelectedMapDot}
              className="bottom-[30%] left-[30%]"
            />

            <MapDot
              itemKey={"4"}
              selectedKey={selectedMapDot}
              setSelectedKey={setSelectedMapDot}
              className="bottom-[90%] left-[30%]"
            />
          </div>
        </div>

        <div className="bg-[#0F172A] p-20 -mx-20">
          <div className="grid grid-cols-12 md:gap-8 gap-y-16 text-center md:text-start">
            <div className="text-[#E2E8F0] font-medium flex-col space-y-4 lg:col-span-3 md:col-span-6 col-span-12 mx-auto">
              <p className="text-white">Product</p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Pricing
              </p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Overview
              </p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Browse
              </p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Accessibility
              </p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Five
              </p>
            </div>

            <div className="text-[#E2E8F0] font-medium flex-col space-y-4 lg:col-span-3 md:col-span-6 col-span-12 mx-auto">
              <p className="text-white">Solutions</p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Brainstorming
              </p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Ideation
              </p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Wireframing
              </p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Research
              </p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Design
              </p>
            </div>

            <div className="text-[#E2E8F0] font-medium flex-col space-y-4 lg:col-span-3 md:col-span-6 col-span-12 mx-auto">
              <p className="text-white">Support</p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Contact Us
              </p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Developers
              </p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Documentation
              </p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Integrations
              </p>
              <p className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                Reports
              </p>
            </div>

            <div className="text-[#E2E8F0] font-medium flex-col space-y-4 lg:col-span-3 md:col-span-6 col-span-12 mx-auto">
              <p className="text-white">Get the App</p>
              <div className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                <img src="images/AppStore.png" alt="" />
              </div>
              <div className="hover:opacity-70 duration-200 transition-all cursor-pointer">
                <img src="images/GooglePlay.png" alt="" />
              </div>
              <p className="text-white pt-8">Follow Us</p>
              <div className="flex items-center space-x-2 text-[#E2E8F0]">
                <img
                  src="icons/youtube.svg"
                  alt=""
                  className="hover:opacity-70 duration-200 transition-all cursor-pointer"
                />
                <img
                  src="icons/facebook.svg"
                  alt=""
                  className="hover:opacity-70 duration-200 transition-all cursor-pointer"
                />
                <img
                  src="icons/twitter.svg"
                  alt=""
                  className="hover:opacity-70 duration-200 transition-all cursor-pointer"
                />
                <img
                  src="icons/instagram.svg"
                  alt=""
                  className="hover:opacity-70 duration-200 transition-all cursor-pointer"
                />
                <img
                  src="icons/linkedin.svg"
                  alt=""
                  className="hover:opacity-70 duration-200 transition-all cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-0.5 mt-14 bg-white bg-opacity-10"></div>
          <div className="md:flex block justify-between items-center text-[#E2E8F0] mt-8 text-sm text-center md:text-start">
            <p>Collers @ 2023. All rights reserved.</p>
            <div className="flex justify-center md:justify-start items-center space-x-4 mt-4 md:mt-0">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Contact</p>
              <div className="flex items-center space-x-2">
                <img src="icons/world.svg" alt="" />
                <p>EN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
