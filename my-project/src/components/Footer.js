import { memo } from "react";

const Footer = memo(() => {
  return (
    <div className="absolute top-[2563px] left-[0px] w-[1440px] h-[285px] overflow-hidden text-left text-lg text-gray-900 font-dm-sans">
      <div className="absolute top-[72px] left-[467px] flex flex-col items-center justify-start gap-[36px]">
        <div className="flex flex-row items-center justify-start gap-[48px]">
          <img
            className="relative w-6 h-[27.43px] overflow-hidden shrink-0"
            alt=""
            src="/fabrandsfacebooksquare.svg"
          />
          <img
            className="relative w-6 h-[27.43px] overflow-hidden shrink-0"
            alt=""
            src="/fabrandsinstagram.svg"
          />
          <div className="relative w-6 h-6 overflow-hidden shrink-0">
            <img
              className="absolute h-[81.22%] w-full top-[9.39%] right-[0%] bottom-[9.39%] left-[0%] max-w-full overflow-hidden max-h-full hover:mix-blend-multiply hover:animate-[1s_linear_2s_1_normal_none_scale-up] hover:opacity-[1]"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="relative w-6 h-[21.33px] overflow-hidden shrink-0">
            <img
              className="absolute h-3/4 w-[94.82%] top-[12.5%] right-[2.59%] bottom-[12.5%] left-[2.59%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[48px]">
          <b className="relative">Conditions of Use</b>
          <b className="relative">{`Privacy & Policy`}</b>
          <b className="relative">Press Room</b>
        </div>
        <b className="relative text-gray-500">© 2021 MovieBox by Fawaz Codes</b>
      </div>
    </div>
  );
});

export default Footer;
