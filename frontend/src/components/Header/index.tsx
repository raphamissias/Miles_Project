import style from "./style.module.css";
import logo_h from "../../assets/icons/logo-h.png";
import Input from "../Input";

const Header = () => {
  return (
    <header>
      <nav>
        <div className={style.logo_container}>
          <img src={logo_h} alt="logo" className={style.logo} />
        </div>
        <div className={style.items}>
          <a href="">Início</a>
          <a href="">Sobre</a>
          <div className={style.nav_item}>
            <a href="">Login</a>
            <div className={style.item_dropdown}>
              <form>
                <Input placeholderText="Email" />
                <Input placeholderText="Senha" />
              </form>
              <button>Entrar</button>
              <span>
                Novo aqui? <a href="">Cadastre-se</a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
