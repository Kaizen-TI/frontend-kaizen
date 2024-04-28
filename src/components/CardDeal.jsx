import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Conquiste <br className="sm:block hidden" /> o Mundo Digital.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Sua presença online define como o público percebe sua marca.
      Combinamos estratégia, criatividade e tecnologia para colocar sua marca no centro das atenções.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[70%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
