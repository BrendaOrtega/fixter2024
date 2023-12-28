import { Link } from "react-router-dom";
import "../App.css";
import SmartNavBar from "../common/SmartNavBar";
import { useEffect } from "react";

export default function Cotizar() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main>
      <div className="flex justify-center fixed  w-full h-20 ">
        <Link to="/">
          <img className=" mt-4  " src="./logo.png" alt="logo" />
        </Link>
      </div>
      <SmartNavBar />
      <section className="max-w-7xl min-h-[100vh] w-[90%] md:w-full mx-auto flex justify-center text-center items-center ">
        <div>
          <img className="w-[240px] mx-auto" src="/404.svg" alt="404" />
          <h2 className="text-3xl md:text-5xl mb-6">¿Cuánto cuesta tu app?</h2>
          <p className="text-xl md:text-xl mb-12">
            Completa el formulario y calcula de forma rápida el costo de tu
            sitio web o aplicación.
          </p>
          <button className="bg-brand-300 h-12 rounded-full px-4 text-white ">
            Proximamente
          </button>
        </div>
      </section>
    </main>
  );
}
