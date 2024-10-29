import style from './Button.module.css';

function Button() {
  return (
    <button className={style.btn}>
      <span>texto </span>
    </button>
  );
}

export default Button;
