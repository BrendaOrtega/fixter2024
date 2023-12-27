import { Link } from "react-router-dom";
import "../App.css";
import Footer from "../common/Footer";
import SmartNavBar from "../common/SmartNavBar";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main>
      <div
        // style={{ backdropFilter: "blur(8px)" }}
        className="flex justify-center fixed  w-full h-20 "
      >
        <Link to="/">
          <img className=" mt-4  " src="./logo.svg" />
        </Link>
      </div>
      <SmartNavBar />
      <section className="max-w-7xl w-[90%] md:w-full mx-auto py-[120px] ">
        <section className="w-[100%] md:w-[50%]">
          <h2 className="text-5xl lg:text-7xl mb-10">Conoce nustros SAAS.</h2>
          <p className="md:text-2xl text-xl">
            Las convertimos en productos digitales que tus usuarios amen
          </p>
        </section>
        <section className="flex justify-between py-20 md:py-[120px] flex-wrap missalign">
          <VideoCard
            cover="/proyectos/formmy-cover.png"
            title="Formmy"
            description="Digital branding and website for an internet connectivity technology"
            image="/proyectos/formmy-video.gif"
            tag="Web Design · Web Development · Development"
          />
        </section>
      </section>
      <Footer />
    </main>
  );
}

type CardProps = {
  title: string;
  description: string;
  image?: string;
  tag?: string;
  cover?: string;
};

export const VideoCard = ({
  title,
  description,
  image,
  tag,
  cover,
}: CardProps) => {
  return (
    <div
      style={{ transition: "all .5s ease" }}
      className=" w-[540px] group cursor-pointer "
    >
      <div className="h-[540px] w-full overflow-hidden group">
        <img
          style={{ transition: "all .5s ease" }}
          className="w-full h-full object-cover group-hover:scale-125 hidden md:block group-hover:hidden"
          src={cover ? cover : "https://i.imgur.com/cC0VWx1.png"}
        />{" "}
        <img
          style={{ transition: "all .5s ease" }}
          className="w-full h-full object-cover block md:hidden group-hover:block"
          src={image ? image : "https://i.imgur.com/cC0VWx1.png"}
        />{" "}
      </div>
      <p className="text-2xl font-medium mt-4	">{title}</p>
      <p className="text-[#333333] mt-2">{description}</p>
      <p
        style={{ transition: "all .5s ease" }}
        className="text-sm text-blueGray mt-1 opacity-0 group-hover:opacity-100"
      >
        {tag}
      </p>
    </div>
  );
};
