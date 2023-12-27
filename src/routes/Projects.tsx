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
        <section className="w-[100%] md:w-[51%]">
          <h2 className="text-5xl lg:text-7xl mb-10">
            Hacemos realidad tus ideas.
          </h2>
          <p className="md:text-2xl text-xl">
            Convirtiendolas en productos digitales que tus usuarios amen.
          </p>
        </section>
        <section className="flex justify-between py-20 md:py-[120px] flex-wrap missalign gap-10 md:gap-0">
          <SmallCard
            title="Potentiia"
            description="Digital branding and website for an internet connectivity technology"
            image="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            tag="Website · Web Design · Development · SEO"
          />
          <FullCard
            title="SurveyUp"
            description="Digital branding and website for an internet connectivity technology"
            image="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            tag="WebApp · UX/UI · Development "
          />
          <div className="mt-0 md:-mt-[100px]">
            <SmallCard
              title="Laboratorios Azteca"
              description="Digital branding and website for an internet connectivity technology"
              image="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              tag="WebApp · Ecommerce · UX/UI "
            />
          </div>
          <FullCard
            title="Spike Stinger"
            description="Digital branding and website for an internet connectivity technology"
            image="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            tag="Website · UI · Development "
          />

          <div className="mt-0 md:-mt-[280px]">
            <FullCard
              title="Constructoken"
              description="Digital branding and website for an internet connectivity technology"
              image="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              tag="Mobile App · UX/UI"
            />
          </div>
          <div className="mt-0 md:mt-[120px]">
            <SmallCard
              title="Fútbol"
              description="Digital branding and website for an internet connectivity technology"
              image="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              tag="Mobile App · UX/UI"
            />
          </div>
          <SmallCard
            title="Collectm Datos Panel"
            description="Digital branding and website for an internet connectivity technology"
            image="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            tag="WebApp · UX/UI · Development "
          />
          <FullCard
            title="Webdive"
            description="Digital branding and website for an internet connectivity technology"
            image="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            tag="WebApp · UX/UI · Development "
          />
          <div className="mt-0 md:mt-[-220px]">
            <SmallCard
              title="Zenda.la"
              description="Digital branding and website for an internet connectivity technology"
              image="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              tag="WebApp · UX/UI · Development "
            />
          </div>
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
};

export const FullCard = ({ title, description, image, tag }: CardProps) => {
  return (
    <div
      style={{ transition: "all .5s ease" }}
      className="w-full md:w-[540px] mt-0 md:mt-28 group cursor-pointer"
    >
      <div className="h-[480px] md:h-[740px] w-full overflow-hidden">
        <img
          style={{ transition: "all .5s ease" }}
          className="h-[480px] md:h-[740px] object-cover group-hover:scale-125"
          src={image ? image : "https://i.imgur.com/cC0VWx1.png"}
        />
      </div>
      <p
        style={{ fontFamily: "Satoshi Bold" }}
        className="text-2xl font-medium mt-4	"
      >
        {title}
      </p>
      <p className="text-[#333333] mt-2">{description}</p>
      <p
        style={{ transition: "all .5s ease" }}
        className="text-sm text-blueGray mt-1 opacity-100 md:opacity-0 group-hover:opacity-100"
      >
        {tag}
      </p>
    </div>
  );
};

export const SmallCard = ({ title, description, image, tag }: CardProps) => {
  return (
    <div
      style={{ transition: "all .5s ease" }}
      className="w-full md:w-[540px] group cursor-pointer "
    >
      <div className="h-[480px] md:h-[540px] w-full overflow-hidden group">
        <img
          style={{ transition: "all .5s ease" }}
          className="h-[480px] md:h-[540px] object-cover group-hover:scale-125"
          src={image ? image : "https://i.imgur.com/cC0VWx1.png"}
        />
      </div>
      <p
        style={{ fontFamily: "Satoshi Bold" }}
        className="text-2xl font-medium mt-4	"
      >
        {title}
      </p>
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
