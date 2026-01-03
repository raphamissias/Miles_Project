import styles from "./style.module.css";
import logo_solo from "../../assets/icons/logo_solo.png";
import location from "../../assets/icons/location.png";
import "../../styles/text.css";

const PageHome = () => {
  return (
    <>
      <section id="home" className={styles.home}>
        <div className={styles.home_presentation}>
          <div>
            <img src={logo_solo} alt="logo" className={styles.logo} />
          </div>
          <h1>Lorem Ipsum</h1>
        </div>
      </section>
      <section
        id="popular_destinations"
        className={styles.popular_destinations}
      >
        <div className={styles.section_description}>
          <div className={styles.title}>
            <h1>Destinos populares</h1>
            <div className={styles.text_decoration}></div>
          </div>
          <span className="subtitle">
            Destinos mais populares ao redor do mundo, de lugares históricos a
            maravilhas naturais
          </span>
        </div>
        <div className={styles.card_list}>
          <div className={styles.card}>
            <div>
              <span>Torre Eiffel</span>
              <div className={styles.card_location}>
                <img src={location} alt="" />
                <span>Paris, França</span>
              </div>
            </div>
          </div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </section>
    </>
  );
};

export default PageHome;
