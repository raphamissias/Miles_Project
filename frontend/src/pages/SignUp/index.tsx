import style from "./style.module.css";
import Input from "../../components/Input";
import "../../styles/button.css";

const SignUpPage = () => {
  return (
    <>
      <main className={style.main}>
        <section className={style.primary_section}>
          <div className={style.primary_container}>
            <h2>Cadastre-se</h2>
            <div className={style.signUp}>
              <form action="">
                <Input placeholderText="Nome"></Input>
                <Input placeholderText="Sobrenome"></Input>
                <Input placeholderText="Email"></Input>
                <Input placeholderText="Senha"></Input>
                <Input placeholderText="Confirme a senha"></Input>
              </form>
              <button className="primary">Cadastrar</button>
            </div>
          </div>
        </section>
        <section className={style.secondary_section}>
          <div className={style.secondary_container}>
            <h2>
              Crie sua conta e<br />
              Lorem ipsum dolor sit amet
            </h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUpPage;
