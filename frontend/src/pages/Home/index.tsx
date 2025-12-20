import styles from "./style.module.css";
import logo_solo from "../../assets/icons/logo_solo.png";

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
      <section className={styles.locations}></section>
    </>
  );
};

export default PageHome;
