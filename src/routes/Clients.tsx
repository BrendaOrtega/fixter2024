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
      <section className="max-w-7xl w-[90%] md:w-full mx-auto py-[120px] ">
        <section>
          <h2 className="text-5xl md:text-7xl mb-10">Clientes</h2>
          <p className="text-xl md:text-2xl w-[100%] md:w-[50%]">
            Hemos trabajado con más de 40 empresas, startups y gobiernos
            estatales tanto en México como en el extranjero.
          </p>
        </section>
        <section className="grid grid-col-1 md:grid-cols-3 py-20 md:py-[120px] gap-14 ">
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2011.png?alt=media&token=4a4f10d2-7a18-432e-b1c0-bc4406ed4cb4"
            title="Collectum Datos Panel"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2005.png?alt=media&token=1fdab993-a92a-489c-95ac-3fdf948aa99e"
            title="Potentiia"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2002.png?alt=media&token=0bd08127-3e7b-41c2-a423-3e2e01c8d5f4"
            title="Gobierno de Hidalgo"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2010.png?alt=media&token=ac5a14c8-7454-4ab2-a316-222c68b9ca6e"
            title="Gobierno de Zapopan"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2009.png?alt=media&token=fea6dffc-57f2-46b3-984a-ee8c3aaf4e8f"
            title="Concamin"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Fconstructoken%20negro%201.png?alt=media&token=e09c88ca-95e8-4c68-8586-5d2ef914c232"
            title="Constructoken"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2006.png?alt=media&token=98c890ac-b724-4ad3-8727-825fea7e4b20"
            title="Laboratorios Azteca"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Ft%26p.png?alt=media&token=17362c24-e1b0-408a-b29b-2c0eb374982e"
            title="Technics & Production V.B."
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2007.png?alt=media&token=1512ead7-7f92-4f68-ab06-66c015daf03e"
            title="Spike Stinger"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2001.png?alt=media&token=c6c6c48f-640e-459f-af18-99922a63d593"
            title="Zenda.la"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2003.png?alt=media&token=f868a6c0-5ab4-43cf-82b5-b7eb84a5a31d"
            title="Hacienda Cocoyoc"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2004.png?alt=media&token=8e627879-c4fc-4c41-9794-026144f435f0"
            title="Horizonte"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            title="Survey Up"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flogo%2008.png?alt=media&token=09a4ec7e-9cc9-4d61-bfa1-73d45bbd4650"
            title="Tecned"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Flastplay.png?alt=media&token=1c1aeb37-cf0b-49b9-a7f7-9333403d8ae9"
            title="LastPlay"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Fwebdive.png?alt=media&token=1d11a638-9203-4266-b4f4-c6688d1266fd"
            title="Webdive"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2Fodd.png?alt=media&token=7330ed46-22a0-4bcf-ac1d-f0e7eb168ec5"
            title="Odd Pleasures"
            description="Strategy, web design, and development for Facebook’s new internet technology."
          />
          <ClientsCard
            image="https://firebasestorage.googleapis.com/v0/b/camp-92fe8.appspot.com/o/clientes%2FUnikko-logo-sinfondo.png?alt=media&token=5222346e-9eee-491a-86a1-e6f52af66bde"
            title="Unikko"
            description="Strategy, web design, and development for Facebook’s new internet technology."
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
};

const ClientsCard = ({ title, description, image }: CardProps) => {
  return (
    <div className="flex items-center group gap-4">
      <div className="w-[220px] md:w-[280px]  cursor-pointer overflow-hidden bg-[#F4F5FB] h-full flex justify-center items-center rounded-xl">
        <img
          style={{ transition: "all .3s ease" }}
          className="object-contain max-w-[90%]  group-hover:scale-75		 "
          src={image ? image : "/logos/survey1.svg"}
        />
      </div>
      <div>
        <h3 style={{ fontFamily: "" }} className="text-xl	">
          {title}
        </h3>
        <p className="text-blueGray mt-2">{description}</p>
      </div>
    </div>
  );
};
