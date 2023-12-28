import { Link } from "react-router-dom";
import "../App.css";
import Footer from "../common/Footer";
import SmartNavBar from "../common/SmartNavBar";
import { useEffect } from "react";

export default function Clients() {
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
      <section className="max-w-7xl w-[90%] md:w-full mx-auto py-[120px] overflow-hidden ">
        <section>
          <h2 className="text-5xl md:text-7xl mb-10">Clientes</h2>
          <p className="text-xl md:text-2xl w-[100%] md:w-[50%]">
            Hemos trabajado con más de 40 empresas, startups y gobiernos
            estatales tanto en México como en el extranjero.
          </p>
        </section>
        <section className="md:grid  md:grid-cols-3 flex flex-wrap py-20 md:py-[120px] gap-14 ">
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2011.png?alt=media&token=4a4f10d2-7a18-432e-b1c0-bc4406ed4cb4"
            title="Collectum Datos Panel"
            location="CDMX, México 🇲🇽"
            description="App web para la investigación de mercado con encuestas."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2005.png?alt=media&token=1fdab993-a92a-489c-95ac-3fdf948aa99e"
            title="Potentiia"
            location="México, España 🇲🇽 🇪🇸"
            description="Sitio web para lograr mayor alcance marca."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2002.png?alt=media&token=0bd08127-3e7b-41c2-a423-3e2e01c8d5f4"
            title="Gobierno de Hidalgo"
            location="Hidalgo, México 🇲🇽"
            description="Plataforma web para la consulta ciudadana."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2010.png?alt=media&token=ac5a14c8-7454-4ab2-a316-222c68b9ca6e"
            title="Gobierno de Zapopan"
            location="Jalisco, México 🇲🇽"
            description="Plataforma web para Crowdfunding."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2009.png?alt=media&token=fea6dffc-57f2-46b3-984a-ee8c3aaf4e8f"
            title="Concamin"
            location="CDMX, México 🇲🇽"
            description="Plataforma web social para la comunidad interna."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Fconstructoken%20negro%201.png?alt=media&token=e09c88ca-95e8-4c68-8586-5d2ef914c232"
            title="Constructoken"
            location="CDMX, México 🇲🇽"
            description="Diseño de UX y UI móvil para construcción de vivienda."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2006.png?alt=media&token=98c890ac-b724-4ad3-8727-825fea7e4b20"
            title="Laboratorios Azteca"
            location="CDMX, México 🇲🇽"
            description="Sitio web + E-commerce de estudios de laboratorio."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Ft%26p.png?alt=media&token=17362c24-e1b0-408a-b29b-2c0eb374982e"
            title="Technics & Production V.B."
            location="Eindhoven, Países Bajos 🇳🇱"
            description="Website para mayor alcance marca."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2007.png?alt=media&token=1512ead7-7f92-4f68-ab06-66c015daf03e"
            title="Spike Stinger"
            location="Eindhoven, Países Bajos 🇳🇱"
            description="Website para mayor alcance marca. "
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2001.png?alt=media&token=c6c6c48f-640e-459f-af18-99922a63d593"
            title="Zenda.la"
            location="CDMX, México 🇲🇽"
            description="Desarrollo web de plataforma de seguros médicos."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2003.png?alt=media&token=f868a6c0-5ab4-43cf-82b5-b7eb84a5a31d"
            title="Hacienda Cocoyoc"
            location="Morelos, México 🇲🇽"
            description="Desarrollo web de plataforma de administración interna."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2004.png?alt=media&token=8e627879-c4fc-4c41-9794-026144f435f0"
            title="Horizonte"
            location="CDMX, México 🇲🇽"
            description="Website para mayor alcance marca."
          />
          <ClientsCard
            title="Survey Up"
            location="CDMX, México 🇲🇽"
            description="Desarrollo web de plataforma para la aplicación de encuestas."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2008.png?alt=media&token=09a4ec7e-9cc9-4d61-bfa1-73d45bbd4650"
            title="Tecned"
            location="Eindhoven, Países Bajos 🇳🇱"
            description="Website para mayor alcance marca."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flastplay.png?alt=media&token=1c1aeb37-cf0b-49b9-a7f7-9333403d8ae9"
            title="LastPlay"
            location="CDMX, México 🇲🇽"
            description="Diseño de UX y UI móvil para la administración y organización de eventos depostivos."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Fwebdive.png?alt=media&token=1d11a638-9203-4266-b4f4-c6688d1266fd"
            title="Webdive"
            location="CDMX, México 🇲🇽"
            description="Desarrollo web para la venta de planes de diseño y desarrollo."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Fodd.png?alt=media&token=7330ed46-22a0-4bcf-ac1d-f0e7eb168ec5"
            title="Odd Pleasures"
            location="USA 🇺🇸"
            description="Website para visualización de artistas y mayor alcance marca."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2FUnikko-logo-sinfondo.png?alt=media&token=5222346e-9eee-491a-86a1-e6f52af66bde"
            title="Unikko"
            location="Madrid, España 🇪🇸"
            description="Website para visualización de viviendas y proceso de reserva integrado."
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
  location?: string;
  image?: string;
};

const ClientsCard = ({ title, description, image, location }: CardProps) => {
  return (
    <section className="flex gap-4 group items-center">
      <div className="flex justify-center w-[120px max-w-[120px] min-w-[120px] h-[120px] bg-[#F4F5FB] rounded-xl overflow-hidden">
        <img
          style={{ transition: "all .3s ease" }}
          className="object-contain max-w-[90%]  group-hover:scale-75		 "
          src={image ? image : "/logos/survey1.svg"}
        />
      </div>
      <div>
        <h3 className="text-xl	">{title}</h3>
        <p className="text-blueGray text-xs">{location}</p>
        <p className="text-blueGray mt-2">{description}</p>
      </div>
    </section>
  );
};
