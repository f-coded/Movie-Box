import { memo } from "react";

const FeaturedMovieContainer = memo(() => {
  return (
    <div className="absolute top-[70px] left-[65px] w-[1277px] h-[604px] text-left text-17xl text-black font-dm-sans">
      <div className="absolute top-[0px] left-[33px] w-[1244px] flex flex-row items-center justify-between">
        <b className="relative">Featured Movie</b>
        <div className="flex flex-row items-center justify-start gap-[8px] text-lg text-gray-100 hover:cursor-default">
          <div className="relative leading-[24px] hover:text-brown-100">
            See more
          </div>
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="/chevron-right1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[91px] left-[33px] flex flex-row items-start justify-start gap-[80px] text-xs text-gray-900">
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <div className="relative w-[250px] h-[370px]">
            <img
              className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
              alt=""
              src="/poster-image5@2x.png"
            />
            <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
              <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] flex flex-row py-[3px] px-2 items-start justify-start">
                <b className="relative">TV SERIES</b>
              </div>
              <img
                className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px]"
                alt=""
                src="/favorite2.svg"
              />
            </div>
          </div>
          <b className="relative text-gray-400">USA, 2016 - Current</b>
          <b className="relative text-lg inline-block w-[250px]">
            Stranger Things
          </b>
          <div className="w-[250px] flex flex-row items-start justify-between">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-[35px] h-[17px] object-cover"
                alt=""
                src="/mv5bmtk3oda4mjc0nf5bml5bcg5nxkftztgwndc1mzq2ote-1@2x.png"
              />
              <div className="relative leading-[12px]">86.0 / 100</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-4 h-[17px] object-cover"
                alt=""
                src="/pngitem-1381056-1@2x.png"
              />
              <div className="relative leading-[12px]">97%</div>
            </div>
          </div>
          <b className="relative text-gray-400">Action, Adventure, Horror</b>
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <div className="relative w-[250px] h-[370px]">
            <img
              className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
              alt=""
              src="/poster-image6@2x.png"
            />
            <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
              <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                <b className="relative">TV SERIES</b>
              </div>
              <img
                className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px]"
                alt=""
                src="/favorite2.svg"
              />
            </div>
          </div>
          <b className="relative text-gray-400">USA, 2005</b>
          <b className="relative text-lg inline-block w-[250px]">
            Batman Begins
          </b>
          <div className="w-[250px] flex flex-row items-start justify-between">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-[35px] h-[17px] object-cover"
                alt=""
                src="/mv5bmtk3oda4mjc0nf5bml5bcg5nxkftztgwndc1mzq2ote-1@2x.png"
              />
              <div className="relative leading-[12px]">82.0 / 100</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-4 h-[17px] object-cover"
                alt=""
                src="/pngitem-1381056-1@2x.png"
              />
              <div className="relative leading-[12px]">70%</div>
            </div>
          </div>
          <b className="relative text-gray-400">Action, Adventure</b>
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <div className="relative w-[250px] h-[370px]">
            <img
              className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
              alt=""
              src="/poster-image7@2x.png"
            />
            <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
              <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                <b className="relative">TV SERIES</b>
              </div>
              <img
                className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px]"
                alt=""
                src="/favorite2.svg"
              />
            </div>
          </div>
          <b className="relative text-gray-400">USA, 2018</b>
          <b className="relative text-lg inline-block w-[250px]">
            Spider-Man : Into The Spider Verse
          </b>
          <div className="w-[250px] flex flex-row items-start justify-between">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-[35px] h-[17px] object-cover"
                alt=""
                src="/mv5bmtk3oda4mjc0nf5bml5bcg5nxkftztgwndc1mzq2ote-1@2x.png"
              />
              <div className="relative leading-[12px]">84.0 / 100</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-4 h-[17px] object-cover"
                alt=""
                src="/pngitem-1381056-1@2x.png"
              />
              <div className="relative leading-[12px]">87%</div>
            </div>
          </div>
          <b className="relative text-gray-400">Animation, Action, Adventure</b>
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px]">
          <div className="relative w-[250px] h-[370px]">
            <img
              className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
              alt=""
              src="/poster-image8@2x.png"
            />
            <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
              <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] hidden flex-row py-[3px] px-2 items-start justify-start">
                <b className="relative">TV SERIES</b>
              </div>
              <img
                className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px]"
                alt=""
                src="/favorite2.svg"
              />
            </div>
          </div>
          <b className="relative text-gray-400">USA, 2017</b>
          <b className="relative text-lg inline-block w-[250px]">Dunkirk</b>
          <div className="w-[250px] flex flex-row items-start justify-between">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-[35px] h-[17px] object-cover"
                alt=""
                src="/mv5bmtk3oda4mjc0nf5bml5bcg5nxkftztgwndc1mzq2ote-1@2x.png"
              />
              <div className="relative leading-[12px]">78.0 / 100</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-4 h-[17px] object-cover"
                alt=""
                src="/pngitem-1381056-1@2x.png"
              />
              <div className="relative leading-[12px]">94%</div>
            </div>
          </div>
          <b className="relative text-gray-400">Action, Drama, History</b>
        </div>
      </div>
      <img
        className="absolute top-[252px] left-[-31px] w-12 h-12 overflow-hidden"
        alt=""
        src="/chevron-right.svg"
      />
    </div>
  );
});

export default FeaturedMovieContainer;
