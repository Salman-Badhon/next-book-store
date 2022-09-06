import styles from "../styles/Button.module.css";

const Button = (props) => {
  return (
    <>
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonText}
      </button>
    </>
  );
};

export default Button;
