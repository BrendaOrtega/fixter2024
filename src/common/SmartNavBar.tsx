import { ReactNode } from "react";
import ButtonPrimary from "./ButtonPrimary";
import { Link } from "react-router-dom";

export default function SmartNavBar() {
  return (
    <div className="bg-dark rounded-[40px] text-white flex items-center h-16 md:h-20 w-[402px] md:w-[508px] px-2 md:px-4 fixed bottom-10 mx-auto ml-[calc(50%-201px)] md:ml-[calc(50%-254px)] z-20">
      <Link to="/servicios">
        <Tab>Servicios</Tab>
      </Link>
      <Link to="/portafolio">
        <Tab>Portafolio</Tab>
      </Link>
      <div className="hidden md:block">
        <Link to="/saas">
          <Tab>Saas</Tab>
        </Link>
      </div>
      <Link to="/contacto">
        <Tab>Contacto</Tab>
      </Link>

      <Link to="/cotizar">
        <button className="bg-brand-300 h-12 rounded-full px-4 text-white ">
          Escríbenos
        </button>
      </Link>
    </div>
  );
}

type TapProps = {
  children: ReactNode;
};
const Tab = ({ children }: TapProps) => {
  return (
    <button className="px-3 md:px-4 hover:bg-white/10 h-12 rounded-full">
      {children}
    </button>
  );
};

const Form = () => {
  return (
    <div>
      <h2>
        Escríbenos. Nuestro equipo se pondrá en contacto contigo lo antes
        posible.
      </h2>
      <iframe
        frameborder="0"
        id="formmy-iframe"
        title="formmy"
        width="560"
        height="760"
        src="https://formmy.app/embed/6524a907ad0d741770b81f99"
        style="margin: 0 auto; display: block"
      ></iframe>
    </div>
  );
};
