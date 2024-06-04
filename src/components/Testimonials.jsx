import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <section
        id="clients"
        className={` bg-primary rounded-md ${styles.paddingY} ${styles.flexCenter} flex-col relative `}
      >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className=" w-full px-10  flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className={styles.heading2}>
            O que dizem
            <br className="sm:block hidden" /> sobre nós
          </h2>
          <div className="w-full md:mt-0 mt-6">
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Escolher a Kaizen TI significa escolher uma equipe que realmente
              se importa com o seu sucesso.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap  sm:justify-center justify-center w-full feedback-container relative z-[1]">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Testimonials;
