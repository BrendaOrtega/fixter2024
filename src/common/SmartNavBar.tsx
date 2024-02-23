import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
// import Drawer from "react-modern-drawer";
// import "react-modern-drawer/dist/index.css";
import { Drawer } from "vaul";

export default function SmartNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="bg-dark rounded-[40px] text-white flex items-center h-16 md:h-20 w-[402px] md:w-[508px] px-2 md:px-4 fixed bottom-2 md:bottom-10 mx-auto ml-[calc(50%-201px)] md:ml-[calc(50%-254px)] z-20">
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

      {/* <button
        onClick={toggleDrawer}
        className="bg-brand-300 h-12 rounded-full px-4 text-white  "
      >
        Escríbenos
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        className="bla bla bla"
        size="94%"
      >
        <Form />
      </Drawer> */}

      <Drawer.Root>
        <Drawer.Trigger>
          <button className="bg-brand-300 h-12 rounded-full px-4 text-white  ">
            Escríbenos
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white z-50 flex flex-col rounded-t-[10px] h-[92%] md:h-[84%]  mt-24 fixed bottom-0 left-0 right-0 ">
            <Form />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
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
    <div className="pt-8 md:pt-20 text-center">
      <h2 className="text-black text-3xl md:text-5xl text-center">
        Escríbenos.
      </h2>
      <p className="w-[90%] mx-auto md:w-full text-black text-lg md:text-2xl mb-0 md:mb-12 mt-4 md:mt-6">
        {" "}
        Nuestro equipo se pondrá en contacto contigo lo antes posible.
      </p>
      <div className="w-full md:w-[560px] mx-auto">
        <iframe
          frameBorder="0"
          id="formmy-iframe"
          title="formmy"
          width="100%"
          height="760"
          src="https://formmy.app/embed/6524a907ad0d741770b81f99"
          style={{ margin: "0 auto", display: "block" }}
        ></iframe>
      </div>
    </div>
  );
};
