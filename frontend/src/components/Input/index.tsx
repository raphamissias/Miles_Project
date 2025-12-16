import style from "./style.module.css";

interface IInputProps {
  lblText?: string;
  placeholderText?: string;
}

const Input = ({ lblText, placeholderText }: IInputProps) => {
  return (
    <div className={style.div}>
      <label htmlFor="">{lblText}</label>
      <input type="text" placeholder={placeholderText} />
    </div>
  );
};

export default Input;
