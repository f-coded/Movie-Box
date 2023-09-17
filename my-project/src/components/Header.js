import { memo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Header = memo(() => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onMenuContainerClick = useCallback(() => {
    navigate("/movies1");
  }, [navigate]);

  return (
    <div className="absolute top-[0px] right-[0px] w-[1440px] h-[85px] overflow-hidden">
      <div className="absolute top-[15px] left-[95px] w-[1244.86px] h-[50px]">
        <div className="absolute top-[7px] left-[1133px] flex flex-row items-center justify-start gap-[27px]">
          <img
            className="relative w-[48.86px] h-[15.23px] hover:bg-maroon-100 hover:w-12 hover:cursor-default"
            id="SignIn"
            alt=""
            src="/sign-in.svg"
          />
          <div
            className="flex flex-row items-center justify-center relative gap-[10px] cursor-pointer hover:bg-maroon-200 hover:cursor-auto hover:rounded-[50px] [&.animate]:lg:animate-[1s_ease_1s_1_normal_forwards_fade-in] lg:opacity-[0] md:hover:cursor-move sm:cursor-auto"
            onClick={onMenuContainerClick}
            data-animate-on-scroll
          >
            <img
              className="relative w-9 h-9 z-[0]"
              alt=""
              src="/ellipse-1.svg"
            />
            <img
              className="absolute my-0 mx-[!important] top-[6px] left-[6px] w-6 h-6 overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/menu-alt-4.svg"
            />
          </div>
        </div>
        <Logo
          logoPosition="absolute"
          logoTop="0px"
          logoLeft="0px"
          movieBoxColor="#fff"
        />
        <input
          className="bg-[transparent] absolute top-[calc(50%_-_18px)] left-[398px] rounded-md box-border w-[525px] h-9 border-[1px] border-solid border-white hover:bg-white focus:items-center focus:justify-center"
          placeholder="What do you want to search?"
          type="search"
          alt="Search"
          autoComplete="on"
          size={100}
        />
        <div className="absolute top-[17px] left-[897px] w-4 h-4 overflow-hidden">
          <img
            className="absolute h-[87.5%] w-[87.5%] top-[6.25%] right-[6.25%] bottom-[6.25%] left-[6.25%] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
        </div>
      </div>
    </div>
  );
});

export default Header;
