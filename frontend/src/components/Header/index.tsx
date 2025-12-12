import style from "./style.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <a href="">Início</a>
        <a href="">Login</a>
        <a href="">Sobre</a>
      </nav>
    </header>
  );
};

export default Header;
