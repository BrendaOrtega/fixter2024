import { useEffect } from "react";
import "../App.css";
import ButtonPrimary from "../common/ButtonPrimary";
import Footer from "../common/Footer";
import SmartNavBar from "../common/SmartNavBar";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

export default function Home() {
  // const [showPop, setShowPop] = useState(false);

  // const handleHover = () => {
  //   setShowPop(true);
  // };

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
          <img className=" mt-4 w-[136px]  " src="./logo.png" alt="logo" />
        </Link>
      </div>
      <SmartNavBar />
      <section
        style={{
          backgroundImage: `url("/doodle.svg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="min-h-[90vh] flex items-center max-w-7xl mx-auto 	">
          <h1 className="flex flex-wrap items-center text-3xl lg:text-7xl text-center justify-center  -mt-6 md:mt-0">
            <span>El mejor aliado</span>{" "}
            <div className="relative group">
              <img
                alt="people working"
                className="imgExtend"
                src="https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <div className="absolute left-[-160px]  lg:left-[80px] bottom-[48px] lg:bottom-[64px] flex flex-col">
                <div className="bg-[#272B34] text-white  w-[300px] text-sm md:text-base p-4 rounded-xl hidden group-hover:block delay-300	">
                  Somos un equipo de diseñadores e ingenieros con más de 8 años
                  experiencia, que crean experiencias digitales de primer nivel.
                </div>
                <div
                  style={{ transform: "translate3d(327px, 0px, 0px)" }}
                  className="bg-[#272B34] absolute -left-32 lg:-left-72 -bottom-2 w-4 h-4 hidden group-hover:block rounded-full  "
                ></div>
              </div>
            </div>
            <span> para diseñar</span> <span> y desarrollar </span>
            <span className="pl-5">el software</span>
            <div className="relative group">
              <img
                alt="women working"
                className="imgExtend"
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <div className="absolute left-[-80px] lg:left-[80px] bottom-[48px] lg:bottom-[64px] flex flex-col">
                <div className="bg-[#272B34] text-white  w-[300px] text-sm md:text-base p-4 rounded-xl hidden group-hover:block delay-300	">
                  Nos encanta trabajar con las herramientas más modernas y con
                  las mejoras practicas, desde ReactJs y Remix hasta Kubernetes
                  y Docker.
                </div>
                <div
                  style={{ transform: "translate3d(327px, 0px, 0px)" }}
                  className="bg-[#272B34] absolute -left-44 lg:-left-72 -bottom-2 w-4 h-4 hidden group-hover:block rounded-full  "
                ></div>
              </div>
            </div>
            <span> para el </span>
            <span> éxito de tu </span>{" "}
            <div className="relative group">
              <img
                alt="laptop"
                className="imgExtend"
                src="https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <img className="absolute -rotate-180 w-40 " src="./mouse.gif" />
              <div className="absolute left-[-140px] lg:left-[80px] bottom-[48px] lg:bottom-[64px] flex flex-col">
                <div className="bg-[#272B34] text-white  w-[300px] text-sm md:text-base p-4 rounded-xl hidden group-hover:block delay-300	">
                  Olvídate de los templates y las limitaciones, en Fixter
                  desarrollamos software a la medida, escalable y fácil de
                  mantener.
                </div>
                <div
                  style={{ transform: "translate3d(327px, 0px, 0px)" }}
                  className="bg-[#272B34] absolute -left-40 lg:-left-72 -bottom-2 w-4 h-4 hidden group-hover:block rounded-full  "
                ></div>
              </div>
            </div>
            <span> empresa</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl w-[90%] md:w-full mx-auto py-16 md:py-32">
        <h2 className=" text-3xl lg:text-5xl	text-center">
          Concentrate en tus clientes y dejamos el resto
        </h2>
        {/* <button
          className="bg-blue-500 border-4"
          onMouseEnter={handleHover}
          onMouseLeave={() => setShowPop(false)}
        >
          hola
        </button>
        {showPop && <div>aqui info</div>} */}
        <div className=" mt-10 lg:mt-16 flex gap-10 flex-wrap ">
          <ProductCard
            image="/proyectos/proto.png"
            title="Prototipos"
            description="Si tienes una idea de negocio que quieres probar, nosotros te ayudamos a crear prototipos que puedas probar con tus usuarios y mostrar a tus socios o inversionistas."
          />
          <ProductCard
            image="/proyectos/site.png"
            title="Sitios web"
            description="Nos enfocamos en la experiencia de usuario acompañada de jerarquías visuales y consistencia visual para crear productos memorables para empresas y usuarios que transmitan la escencia de la marca."
          />
          <ProductCard
            image="/proyectos/app.png"
            title="Aplicaciones web"
            description=" Somos especialistas en crear aplicaciones web que brinden experiencias y funcionalidades de usuario excepcionales.
            Optimizamos la visibilidad del motor de búsqueda, garantizamos la accesibilidad y maximizamos el rendimiento."
          />
          <ProductCard
            image="/proyectos/cart.png"
            title="E-commerce"
            description="
            Nos enargamos de crear una tienda virtual que se alinee a tus objetivos comerciales mientras brindamos a tus usuarios finales una excelente experiencia de compra, sin olvidarnos de que sea fácil de administrar para ti."
          />

          <ProductCard
            image="/proyectos/mobile.png"
            title="Aplicaciones Móviles (IOS/Android)"
            description="Ya sea una aplicación híbrida o nativa, nos encargamos de evaluar la mejor solución para ti y tus clientes, diseñaremos y desarrollaremos aplicaciones que
            mejoren tu tasa de conversión y la experiencia de usuario de tus clientes al interactuar con tu marca."
          />
        </div>
      </section>
      <section className="overflow-hidden	flex gap-10 w-full my-2 md:my-10  items-center">
        <Marquee className="text-3xl md:text-6xl h-[64px]  md:h-[100px]">
          ReactJs • Vite • Remix • MongoDB • TailwindCSS • Firebase • NextJs •
          Kubernetes • Go • Ruby • JavaScript • Prisma • Typescript • Nodejs •
          Redux • ReactJs • Vite • Remix • MongoDB • TailwindCSS • Firebase •
          NextJs • Kubernetes • Go • Ruby • JavaScript • Prisma • Typescript •
          Nodejs • Redux
        </Marquee>
      </section>
      <section className="max-w-7xl mx-auto w-[90%] md:w-full text-center py-16 md:py-32	">
        <h2 className="text-3xl md:text-5xl	">
          Conoce un par de nuestros proyectos
        </h2>
        <div className="mt-10 md:mt-16 flex gap-10 flex-wrap justify-center">
          <ProyectCard
            name="Formmy.app"
            image="/proyectos/proyecto2.png"
            link="https://www.formmy.app/"
          />
          <ProyectCard
            link="https://constructoken.com/"
            name="Constructoken"
            image="/proyectos/proyecto1.png"
          />
          <ProyectCard
            link="https://autonomo-7e183.web.app/"
            name="Arango"
            image="/proyectos/proyecto3.png"
          />
          <ProyectCard
            name="Survey Up"
            image="/proyectos/proyecto4.png"
            link="https://b2b-survey-d48c1.web.app/"
          />
          <ProyectCard
            name="Potentiia"
            image="/proyectos/proyecto5.png"
            link="https://potentiia.com/"
          />
          <ProyectCard
            name="Laboratorios Azteca"
            image="/proyectos/proyecto8.png"
          />
        </div>
      </section>
      <section className="bg-[#F8F8FC] py-16 md:py-32">
        <div className="max-w-7xl mx-auto w-[90%] md:w-full  flex items-center flex-wrap md:flex-nowrap gap-16">
          <div className=" w-full md:w-[50%] pr-[4%]">
            <h2 className="text-3xl md:text-5xl	text-dark">
              Olvídate del caos{" "}
            </h2>
            <p className="text-xl md:text-2xl mt-6 text-gray">
              No inviertas tiempo desarrollando y manteniendo tu sitio web, si
              respondes que sí al menos a una de estás preguntas, no lo pienses
              más y trabaja con nosotros.
            </p>

            <p className="text-base md:text-2xl text-gray mt-16 flex items-start gap-3	">
              {" "}
              <img className="pt-2" src="/check.svg" alt="check" />
              ¿Tu sitio parece obsoleto y el diseño va en contra de su imagen en
              lugar de favorecerla?{" "}
            </p>
            <p className="text-base md:text-2xl text-gray flex items-start gap-3 mt-4">
              {" "}
              <img className="pt-2" src="/check.svg" alt="check" />
              ¿Tus apps web no tienen todas las funcionalidades que necesitas?{" "}
            </p>

            <p className="text-base md:text-2xl text-gray flex items-start gap-3 mt-4	">
              {" "}
              <img className="pt-2" src="/check.svg" alt="check" />
              ¿Mantener y administrar tu sitio web es frustrante porque requiere
              demasiado tiempo?{" "}
            </p>
            {/* <p className="text-base md:text-xl  mt-4	flex items-start gap-2">
              {" "}
              <img src="/check.svg" />
              ¿Tu sitio se muestra en Google en algún lugar de la página 15?{" "}
            </p> */}
          </div>
          <div className="w-full md:w-[50%] flex justify-center">
            <img
              className="object-contain w-[100%]"
              src="/proyectos/mask1.png"
              alt="women nervious"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto w-[90%] md:w-full flex  md:flex-nowrap items-center flex-wrap-reverse gap-16 pt-[120px] md:pt-[200px]">
          <div className="w-full md:w-[50%] flex justify-center">
            <img
              className="object-contain max-w-[90%] h-[450px] md:h-[540px]"
              src="/proyectos/mask2.png"
              alt="people working together"
            />
          </div>
          <div className="text-[#333333] w-full md:w-[50%]">
            <h2 className="text-3xl md:text-5xl	text-dark">
              Trabaja con nosotros{" "}
            </h2>
            <p className="text-xl md:text-2xl mt-6 ">
              Estaremos contigo desde la concepción del producto hasta su
              lanzamiento siguiendo nuestra metodología ágil.
            </p>
            <p className="text-xl md:text-2xl mt-6 ">
              Empezaremos con una consulta inicial para{" "}
              <strong
                style={{ fontFamily: "Satoshi Bold" }}
                className="font-black	"
              >
                {" "}
                conocer tu marca y comprender tus objetivos
              </strong>
              , continuaremos con un proceso de
              <strong style={{ fontFamily: "Satoshi Bold" }}>
                {" "}
                investigación, diseño e iteración
              </strong>{" "}
              que trabajaremos estrechamente con tu equipo, para después comezar
              con el proceso de{" "}
              <strong style={{ fontFamily: "Satoshi Bold" }}>
                {" "}
                desarrollo
              </strong>
              .
            </p>
          </div>
        </div>
      </section>
      <section
        // style={{ backgroundImage: 'url("./back.png")' }}
        className="bg-mobile md:bg-web min-h-[90vh] mx-auto py-32 text-center flex justify-center items-center bg-cover bg-center	"
      >
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl">Cotiza tu proyecto </h2>
          <p className="text-xl md:text-2xl text-[#333333] mt-6">
            Completa el formulario y descubre el valor aproximado de tu
            aplicación
          </p>
          <br />
          <Link to="/cotizar">
            <ButtonPrimary text="Cotizar proyecto" />
          </Link>
        </div>
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

const ProductCard = ({ title, description, image }: CardProps) => {
  return (
    <div className="bg-[#F4F5FB] rounded-[40px] w-[360px] px-8 pt-8 grow flex flex-col  overflow-hidden group">
      <div>
        <h3 className="text-xl lg:text-2xl	">{title}</h3>
        <p className="text-[#333333] mt-2">{description}</p>
      </div>
      <div className="w-full h-[200px]  mt-0">
        <img
          alt="proyect example"
          className="  mt-10 group-hover:scale-125 transition-all"
          src={image ? image : "https://i.imgur.com/cC0VWx1.png"}
        />
      </div>
    </div>
  );
};

const ProyectCard = ({
  image,
  link,
  name,
}: {
  image?: string;
  link?: string;
  name?: string;
}) => {
  const arrow = "/arrow.svg";
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="project"
    >
      <div
        style={{ backgroundImage: `url("${image}")` }}
        className="bg-[#F7F7F7] bg-center h-[240px] md:h-[300px] group rounded-[40px]  w-[360px] p-8 grow  bg-cover flex items-end 	"
      >
        <button className="bg-white rounded-full w-10 h-10 flex gap-4 group items-center justify-center group-hover:w-[auto] group-hover:px-4  transition ease-in-out">
          <img
            className="origin-center -rotate-45 group-hover:rotate-0 transition ease-in-out"
            src={arrow}
            alt="arrow"
          />
          <p className="text-[#111010] hidden opacity-0 group-hover:flex group-hover:opacity-100 transition ease-in-out">
            Ver {name}
          </p>
        </button>
      </div>
    </a>
  );
};
