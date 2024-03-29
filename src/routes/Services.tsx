import { Link } from "react-router-dom";
import "../App.css";
import Footer from "../common/Footer";
import SmartNavBar from "../common/SmartNavBar";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="bg-general bg-contain bg-right-top bg-no-repeat">
      <div
        // style={{ backdropFilter: "blur(8px)" }}
        className="flex justify-center fixed  w-full h-20 "
      >
        <Link to="/">
          <img className=" mt-4 w-[136px]  " src="./logo.png" alt="logo" />
        </Link>
      </div>
      <SmartNavBar />

      <section className="max-w-7xl mx-auto w-[90%] md:w-full pt-[120px] pb-[120px] ">
        <section className="w-[100%] md:w-[50%]">
          <h2 className="text-5xl lg:text-7xl mb-10">
            El mejor partner Full-stack.
          </h2>
          <p className="md:text-2xl text-xl font-light ">
            Nuestra experiencia en diseño y desarrollo ofrece las mejores
            experiencias digitales.
          </p>
        </section>

        <section className="flex justify-between py-[120px] flex-wrap gap-52">
          <div className="flex w-full items-center flex-wrap md:flex-nowrap group">
            <div className="w-[400px] grow pr-0 md:pr-[10%]">
              <h2 className="text-3xl md:text-5xl 	font-semibold mb-6">
                Diseño de Producto
              </h2>
              <p className="text-xl font-light	">
                Creamos productos memorables para empresas y consumidores,
                además de brindar soluciones de diseño integrales para una
                iteración de productos escalable.
              </p>
              <ul className="mt-10 text-xl font-light">
                <li className="flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  User Research & Testing
                </li>
                <li className="mt-2 flex gap-2">
                  <img src="./bullet.svg" alt="bullet" /> CX, UX & Interaction
                  Design
                </li>
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  UI Design
                </li>
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Design Systems
                </li>
              </ul>
            </div>
            <div className="w-[400px] grow flex justify-end md:mt-0 mt-10  ">
              <div className=" md:w-[80%] h-[600px]  mx-autow-full  bg-[#F4EBDE]">
                <img
                  alt="product design example"
                  className="object-cover w-full  h-[600px] group-hover:rotate-6	 transition-all cursor-pointer"
                  src="/design.png"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center flex-wrap-reverse md:flex-nowrap group">
            <div className="w-[400px] grow flex justify-start  md:mt-0 mt-10 ">
              <div className=" md:w-[80%] h-[600px]  mx-autow-full  bg-[#D6D9D0]">
                <img
                  alt="development example"
                  className="object-cover w-full  h-[600px] group-hover:rotate-6	 transition-all cursor-pointer"
                  src="/dev.png"
                />
              </div>
            </div>

            <div className="w-[400px] grow pl-0 md:pl-[10%] ">
              <h2 className="text-3xl md:text-5xl 	font-semibold mb-6">
                Desarrollo de Software a la medida
              </h2>
              <p className="text-xl font-light	">
                Nuestros equipos de diseño y desarrollo trabajan conjuntamente
                para crear sitios y aplicaciones web y móviles que brindan
                experiencias y funcionalidades exepcionales basadas en tus
                necesidades.
              </p>
              <ul className="mt-10 text-xl font-light">
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Desarrollo de aplicaciones móviles
                </li>
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Desarrollo web frontend y backend
                </li>
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Integraciones API
                </li>
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Conterización
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full items-center flex-wrap md:flex-nowrap group">
            <div className="w-[400px] grow pr-0 md:pr-[10%]">
              <h2 className="text-3xl md:text-5xl 	font-semibold mb-6">
                Sitios web
              </h2>
              <p className="text-xl font-light	">
                Consideramos a los sitios web el canal más importante para
                acercar tu marca a tus clientes. Así que nos enfocamos en que tu
                sitio transmita la esencia de tu marca.
              </p>
              <ul className="mt-10 text-xl font-light">
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Diseño web
                </li>
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Integraciones API para tracking
                </li>
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Optimización SEO
                </li>
              </ul>
            </div>
            <div className="w-[400px] grow flex justify-end md:mt-0 mt-10 ">
              <div className=" md:w-[80%] h-[600px]  mx-autow-full  bg-[#F1F1FF]">
                <img
                  alt="website example"
                  className="object-cover w-full  h-[600px] group-hover:rotate-6	 transition-all cursor-pointer"
                  src="/sitio.png"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center flex-wrap-reverse md:flex-nowrap group">
            <div className="w-[400px] grow flex justify-start md:mt-0 mt-10">
              <div className=" md:w-[80%] h-[600px]  mx-autow-full  bg-[#FAE7D5]">
                <img
                  className="object-cover w-full  h-[600px] group-hover:rotate-6	 transition-all cursor-pointer"
                  src="/mobile.png"
                  alt="mobile app example"
                />
              </div>
            </div>
            <div className="w-[400px] grow pl-0 md:pl-[10%] ">
              <h2 className="text-3xl md:text-5xl	font-semibold mb-6">
                Aplicciones Móviles
              </h2>
              <p className="text-xl font-light	">
                Ya sea una aplicación híbrida o nativa, nos encargamos de
                evaluar la mejor solución para ti y tus clientes, diseñaremos y
                desarrollaremos aplicaciones que mejoren tu tasa de conversión y
                la experiencia de usuario de tus clientes al interactuar con tu
                marca.
              </p>
              <ul className="mt-10 text-xl font-light">
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Capacitación en línea
                </li>
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Cursos presenciales personalizados
                </li>
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Cursos pregrabados
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full items-center flex-wrap md:flex-nowrap group">
            <div className="w-[400px] grow pr-0 md:pr-[10%]">
              <h2 className="text-3xl md:text-5xl	font-semibold mb-6">
                Capacitación
              </h2>
              <p className="text-xl font-light	">
                La enseñanza es algo que nos apasiona, así que de la mano de
                nuestros desarrolladores creamos cursos personalizados adoc al
                stack de tus proyectos. Y si la herramienta que buscas es nueva,
                no te preocupes, seguro tendremos algo listo. Desde HTML y JS
                hasta Remix, Astro y Kubernetes.
              </p>
              <ul className="mt-10 text-xl font-light">
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Capacitación en línea
                </li>
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Cursos presenciales personalizados
                </li>
                <li className="mt-2 flex gap-2">
                  {" "}
                  <img src="./bullet.svg" alt="bullet" />
                  Cursos pregrabados
                </li>
              </ul>
            </div>
            <div className="w-[400px] grow flex justify-end md:mt-0 mt-10 ">
              <div className=" md:w-[80%] h-[600px]  mx-autow-full  bg-[#D9E5E5]">
                <img
                  className="object-cover w-full  h-[600px] group-hover:rotate-6	 transition-all cursor-pointer"
                  src="/capa.png"
                  alt="training example"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
