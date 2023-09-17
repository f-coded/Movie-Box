import Footer from "../components/Footer";
import ContainerNewArrivalDune1 from "../components/ContainerNewArrivalDune1";
import ContainerNewArrivalDune from "../components/ContainerNewArrivalDune";
import FeaturedMovieContainer from "../components/FeaturedMovieContainer";
import CardContainer from "../components/CardContainer";
import Header from "../components/Header";

const HomepageDesktop = () => {
  return (
    <div className="relative bg-white w-full h-[2845px] overflow-hidden">
      <Footer />
      <div className="absolute top-[600px] left-[0px] w-[1440px] h-[1963px] overflow-hidden">
        <ContainerNewArrivalDune1 />
        <ContainerNewArrivalDune />
        <FeaturedMovieContainer />
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[600px] object-cover lg:hover:flex"
        alt=""
        src="/poster@2x.png"
      />
      <CardContainer />
      <Header />
    </div>
  );
};

export default HomepageDesktop;
