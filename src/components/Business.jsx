import { features } from "../constants";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section
        id="sobrenos"
        className={`${layout.section} px-6 pb-6 rounded-md bg-primary`}
      >
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Inovação, <br className="sm:block hidden" /> Excelência e
            Compromisso.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Somos apaixonados por ajudar nossos clientes a alcançar e superar
            seus objetivos de marketing digital. Nossa equipe é composta por
            especialistas altamente qualificados e criativos, prontos para
            oferecer soluções personalizadas que impulsionam o crescimento e o
            sucesso de sua empresa.
          </p>
          <div className="flex">
          <a href="#contact">
            <Button
              text={"Solicar Serviço"}
              styles={`mt-10 mr-10 bg-blue-gradient`}
              />
              </a>
            <Link to="/servicos">
              <Button
                text={"Outros Serviço"}
                styles={`mt-10 bg-red-950 text-white`}
              />
            </Link>
          </div>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Business;
