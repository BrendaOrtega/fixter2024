import { Link } from "react-router-dom";
import "../App.css";
import SmartNavBar from "../common/SmartNavBar";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main>
      <meta name="description" content="Ponte en contacto con nosotros." />
      <title>Contacto | Fixter</title>
      <div
        // style={{ backdropFilter: "blur(8px)" }}
        className="flex justify-center fixed  w-full h-20 "
      >
        <Link to="/">
          <img className=" mt-4  " src="./logo.svg" />
        </Link>
      </div>
      <SmartNavBar />
      <section className="max-w-7xl w-[90%] md:w-full min-h-[115vh] mx-auto flex justify-between py-[80px] flex-wrap md:flex-nowrap ">
        <div className="pt-20">
          <h2 className="text-5xl md:text-7xl	mb-10">Hablemos.</h2>
          <p className="font-light text-2xl w-full md:w-[60%]">
            Nos encantaría saber más sobre ti y lo que podemos diseñar y
            construir juntos.
          </p>
          <div className="flex items-center mt-16 gap-10 md:gap-20">
            <a
              href="mailto:brenda@fixter.org"
              aria-label="Mail"
              rel="noopener noreferrer"
            >
              <div className="group cursor-pointer ">
                <p className="text-darkGray text-sm mt-6">Cotiza tu proyecto</p>
                <p className="text-xl	">brenda@fixter.org</p>
                <div className="w-[160px] bg-[#bbc4d2] h-[2px] rounded-full mt-1">
                  {" "}
                  <div
                    style={{ transition: "all 1s ease" }}
                    className="w-[0px] group-hover:w-full h-[2px]  bg-black"
                  ></div>
                </div>
              </div>
            </a>
            <a
              href="mailto:contacto@fixter.org"
              aria-label="Mail"
              rel="noopener noreferrer"
            >
              <div className="group cursor-pointer">
                <p className="text-darkGray text-sm mt-6">
                  Trabaja con nosotros
                </p>
                <p className="text-xl	">contacto@fixter.org</p>
                <div className="w-[160px] bg-[#bbc4d2] h-[2px] rounded-full mt-1">
                  {" "}
                  <div
                    style={{ transition: "all 1s ease" }}
                    className="w-[0px] group-hover:w-full h-[2px]  bg-black"
                  ></div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-[300px] flex justify-start  mt-48 md:mt-80">
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=100063503085832"
                target="_blank"
                className="hover:opacity-50"
              >
                <img className="w-6" src="./facebookdark.svg" />
              </a>
              <a
                href="https://twitter.com/FixterGeek"
                target="_blank"
                className="hover:opacity-50"
              >
                <img className="w-6" src="./twitterdark.svg" />
              </a>
              <a
                href="https://www.linkedin.com/company/28980688/"
                target="_blank"
                className="hover:opacity-50"
              >
                <img className="w-5" src="./linkedindark.svg" />
              </a>
              <a
                href="https://www.instagram.com/fixtergeek/"
                target="_blank"
                className="hover:opacity-50"
              >
                <img className="w-5" src="./instagramdark.svg" />
              </a>
              {/* <img className="w-5" src="./youtubedark.svg" /> */}
            </div>
          </div>
        </div>
        <img
          className="max-w-[460px] grow min-h-[768px] h-[80vh] object-cover hidden md:flex"
          src="https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </section>
    </main>
  );
}
