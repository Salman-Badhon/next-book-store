import styles from "../styles/Button.module.css";

const Button = (props) => {
  return (
    <>
      <button className={styles.button}>{props.buttonText}</button>
    </>
  );
};

export default Button;
