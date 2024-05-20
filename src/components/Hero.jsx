import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          id="home"
          className={`bg-ligthWhite flex mt-20 md:flex-row flex-col ${styles.paddingY}`}
        >
          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-6 px-6`}
          >
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
              <p className={`${styles.paragraph} ml-2`}>
                Faça crescer <span className="text-primary">75% </span>o seu
                negócio <span className="text-primary">em poucos meses</span>
              </p>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-primary ss:leading-[100.8px] leading-[75px]">
                Elevando <br className="sm:block hidden" />{" "}
                <span className="">Marcas</span>{" "}
              </h1>
              <div className="ss:flex hidden md:mr-4 mr-0">
                <GetStarted />
              </div>
            </div>

            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-primary ss:leading-[100.8px] leading-[75px] w-full">
              ao Pódio Digital.
            </h1>
            <p
              className={`${styles.paragraph} text-primary max-w-[470px] mt-5`}
            >
              Transforme sua presença digital com especialistas dedicados ao seu
              sucesso. Conosco, você não está apenas investindo em marketing
              digital; você está investindo no futuro do seu negócio. <br />
              <span>Vamos crescer juntos!</span>
            </p>
          </div>

          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <img
              src={robot}
              alt="billing"
              className="w-[80%] h-[95%] relative z-[5]"
            />

            {/* gradient start 
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        */}
            {/* gradient end */}
          </div>

          <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
