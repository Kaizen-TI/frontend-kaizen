import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Vamos Transformar sua Presença Online Juntos!</h2>
      <p className={`${styles.paragraph} max-w-[770px] mt-5`}>
      Está pronto para levar sua marca ao próximo nível? Na Kaizen TI,
      estamos ansiosos para ajudar você a alcançar seus objetivos de marketing digital com soluções criativas e eficazes.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
