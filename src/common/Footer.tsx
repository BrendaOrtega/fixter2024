import { Link } from "react-router-dom";
import "../App.css";
import SmartNavBar from "../common/SmartNavBar";

export default function Footer() {
  return (
    <section className="bg-[#111112] pt-16 pb-40">
      <div className="max-w-7xl mx-auto w-[90%] md:w-full text-white flex-col md:flex-row flex justify-between">
        <div>
          <h2 className="text-7xl	">Hablemos.</h2>
          <div className="group cursor-pointer w-[160px]">
            <p className="text-xl	mt-6">brenda@fixter.org</p>
            <div className="w-[160px] bg-[#56616a] h-[2px] rounded-full mt-1">
              {" "}
              <div
                style={{ transition: "all 1s ease" }}
                className="w-[0px] group-hover:w-full h-[2px]  bg-white"
              ></div>
            </div>
          </div>
        </div>
        <div className="w-[300px] flex justify-start mt-12 md:mt-0">
          <div className=" w-auto flex flex-col gap-4 ">
            <FooterLink title="Portafolio" link="/portafolio" />

            <FooterLink title="Servicios" link="/servicios" />
            <FooterLink title="Saas" link="/saas" />
            <FooterLink title="Clientes" link="/clientes" />
            <FooterLink title="Contacto" link="/contacto" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-[90%] md:w-full text-white flex-wrap-reverse md:flex-nowrap flex justify-between items-center text-base mt-20">
        <div className="flex gap-4 md:gap-6 items-center mt-10">
          <p className="text-sm	text-[#858e97]">Aviso de Privacidad</p>
          <p className="text-sm	text-[#858e97]">Términos</p>
          <p className="text-sm	text-[#858e97]">© 2016 – 2023 Fixter.org</p>
        </div>
        <div className="w-[300px] flex justify-start">
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=100063503085832"
              target="_blank"
              className="hover:opacity-50"
            >
              <img className="w-5" src="./facebook.svg" />
            </a>
            <a
              href="https://www.linkedin.com/company/28980688"
              target="_blank"
              className="hover:opacity-50"
            >
              <img className="w-5" src="./linkedin.svg" />
            </a>

            <img className="w-5" src="./twitter.svg" />
            <img className="w-5" src="./instagram.svg" />
            {/* <img className="w-5" src="./youtube.svg" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

const FooterLink = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link to={link}>
      <div className="text-base group cursor-pointer">
        <p>{title}</p>
        <div className="w-full bg-[#56616a] h-[2px] rounded-full mt-1">
          {" "}
          <div
            style={{ transition: "all 1s ease" }}
            className="w-[0px] group-hover:w-full h-[2px]  bg-white"
          ></div>
        </div>
      </div>
    </Link>
  );
};
