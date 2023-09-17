import { memo, useMemo } from "react";

const Logo = memo(({ logoPosition, logoTop, logoLeft, movieBoxColor }) => {
  const logoStyle = useMemo(() => {
    return {
      position: logoPosition,
      top: logoTop,
      left: logoLeft,
    };
  }, [logoPosition, logoTop, logoLeft]);

  const movieBoxStyle = useMemo(() => {
    return {
      color: movieBoxColor,
    };
  }, [movieBoxColor]);

  return (
    <div
      className="flex flex-row items-center justify-start gap-[24px] text-left text-5xl text-white font-dm-sans"
      style={logoStyle}
    >
      <img
        className="relative w-[50px] h-[50px] object-cover"
        alt=""
        src="/tv@2x.png"
      />
      <b className="relative leading-[24px]" style={movieBoxStyle}>
        MovieBox
      </b>
    </div>
  );
});

export default Logo;
