import styles from "../styles/Header.module.css";
import Button from "./button.js";

const Header = (props) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
        <Button buttonText={props.buttonText} />
      </div>
    </>
  );
};

export default Header;
