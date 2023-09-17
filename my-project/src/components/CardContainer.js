import { memo } from "react";

const CardContainer = memo(() => {
  return (
    <div className="absolute top-[85px] left-[0px] w-[1440px] h-[515px] overflow-hidden text-left text-29xl text-white font-dm-sans">
      <div className="absolute top-[72px] left-[98px] w-[404px] h-[286px] overflow-hidden">
        <div className="absolute top-[1px] left-[0px] flex flex-col items-start justify-start gap-[16px]">
          <b className="relative leading-[56px] inline-block w-[404px]">
            John Wick 3 : Parabellum
          </b>
          <div className="relative w-[184px] h-[17px] text-xs">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-[35px] h-[17px] object-cover"
                alt=""
                src="/mv5bmtk3oda4mjc0nf5bml5bcg5nxkftztgwndc1mzq2ote-1@2x.png"
              />
              <div className="relative leading-[12px]">86.0 / 100</div>
            </div>
            <div className="absolute top-[0px] left-[135px] flex flex-row items-center justify-start gap-[10px]">
              <img
                className="relative w-4 h-[17px] object-cover"
                alt=""
                src="/pngitem-1381056-1@2x.png"
              />
              <div className="relative leading-[12px]">97%</div>
            </div>
          </div>
          <div className="relative text-sm leading-[18px] font-medium inline-block w-[302px]">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </div>
          <button
            className="cursor-pointer [border:none] py-1.5 px-4 bg-crimson-200 rounded-md flex flex-row items-center justify-center gap-[8px] hover:bg-brown-200 lg:hover:[background:linear-gradient(#550303,_#550303),_linear-gradient(#b90c0c,_#b90c0c),_#800625] lg:hover:items-center lg:hover:justify-center"
            autoFocus={true}
            preload="auto"
          >
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/play1.svg"
            />
            <b className="relative text-sm leading-[24px] uppercase font-dm-sans text-white text-left">
              Watch trailer
            </b>
          </button>
        </div>
      </div>
      <div className="absolute top-[160px] left-[1380px] w-9 h-[110px] text-xs text-gray-400">
        <div className="absolute top-[0px] left-[26px] flex flex-col items-center justify-start gap-[10px]">
          <b className="relative leading-[14px]">1</b>
          <b className="relative leading-[14px]">2</b>
          <b className="relative text-base leading-[14px] text-white">3</b>
          <b className="relative leading-[14px]">4</b>
          <b className="relative leading-[14px]">5</b>
        </div>
        <div className="absolute top-[53px] left-[0px] rounded-md bg-white w-5 h-[3px]" />
      </div>
    </div>
  );
});

export default CardContainer;
