import style from "./style.module.css";
import logo_h from "../../assets/icons/logo-h.png";
import { Link } from "react-router-dom";

const Header = () => {
  //Lógica para verificar se o usuário está logado ou não

  return (
    <header>
      <nav>
        <div className={style.logo_container}>
          <img src={logo_h} alt="logo" className={style.logo} />
        </div>
        <div className={style.items}>
          <Link to="/">Início</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/signin">Entrar</Link>
          <Link className={style.signup_link} to="/signup">
            Criar uma conta
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
