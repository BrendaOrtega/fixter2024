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
          <img className=" mt-4  " src="./logo.svg" alt="logo" />
        </Link>
      </div>
      <SmartNavBar />
      <section className="max-w-7xl w-[90%] md:w-full mx-auto py-[120px] ">
        <section className="w-[100%] md:w-[51%]">
          <h2 className="text-5xl lg:text-7xl mb-10">
            Hacemos realidad tus ideas.
          </h2>
          <p className="md:text-2xl text-xl">
            Convirtiéndolas en productos digitales que tus usuarios amen.
          </p>
        </section>
        <section className="flex justify-between py-20 md:py-[120px] flex-wrap missalign gap-10 md:gap-0">
          <SmallCard
            title="Potentiia"
            description="Rediseño del sitio web de empresa líder en couching para el rendimiento deportivo."
            image="/proyectos/potentiia.png"
            tag="Website · Web Design · Development · SEO"
          />
          <FullCard
            title="SurveyUp"
            description="Aplicación web de fidelización y aplicación de encuestas para estudios de mercado."
            image="/proyectos/p-survey.png"
            tag="WebApp · UX/UI · Development "
          />
          <div className="mt-0 md:-mt-[100px]">
            <SmallCard
              title="Laboratorios Azteca"
              description="Diseño de tienda digital para estudios clínicos."
              image="/proyectos/p-lab.png"
              tag="WebApp · E-commerce · UX/UI "
            />
          </div>
          <FullCard
            title="Spike Stinger"
            description="Sitio web de captación para la comercialización de productos especializados."
            image="/proyectos/spike.png"
            tag="Website · UI · Development "
          />

          <div className="mt-0 md:-mt-[280px]">
            <FullCard
              title="Last Play"
              description="Diseño de app móvil para organización de eventos depostivos."
              image="/proyectos/play.png"
              tag="Mobile App · UX/UI"
            />

            {/* <FullCard
              title="Constructoken"
              description="Diseño de aplicación móvil para startup de construcción de vivienda."
              image="/proyectos/constru.png"
              tag="Mobile App · UX/UI"
            /> */}
          </div>
          <div className="mt-0 md:mt-[120px]">
            <SmallCard
              title="Fixtergeek"
              description="Diseño y desarrollo de plataforma educativa para la comercialización de cursos. "
              image="/proyectos/geek.png"
              tag="Mobile App · UX/UI · Development"
            />
          </div>
          <SmallCard
            title="Collectm Datos Panel"
            description="Desarrollo de plataforma para la digitalización de estudios de mercado."
            image="/proyectos/panel.png"
            tag="WebApp · UX/UI · Development "
          />
          <FullCard
            title="Webdive"
            description="Sitio web de empresa de servicios tecnológicos."
            image="/proyectos/dive.png"
            tag="WebApp · UX/UI · Development "
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
};

export const FullCard = ({ title, description, image, tag }: CardProps) => {
  return (
    <div
      style={{ transition: "all .5s ease" }}
      className="w-full md:w-[540px] mt-0 md:mt-28 group cursor-pointer"
    >
      <div className="h-[480px] md:h-[740px] w-full overflow-hidden border-[1px] border-[#ECEFF9]">
        <img
          alt="proyect example"
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
      <div className=" h-[480px] md:h-[540px] w-full overflow-hidden group border-[1px] border-[#ECEFF9]">
        <img
          alt="project example"
          style={{ transition: "all .5s ease" }}
          className="h-[480px] md:h-[540px] w-full object-cover group-hover:scale-125"
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
