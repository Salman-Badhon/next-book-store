import styles from "../styles/Header.module.css";
import Button from "./button.js";

const Header = (props) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Next Book Store!</h1>

        <p className={styles.description}>
          Get started by searching your favourite book
        </p>
        <Button buttonText="New Arrivals" />
      </div>
    </>
  );
};

export default Header;
