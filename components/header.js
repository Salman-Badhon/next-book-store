import styles from "../styles/Header.module.css";
import Button from "./button.js";

const Header = (props) => {
  const handleOnHeaderButtonClick = () => {
    console.log("New Book List");
  };
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
        <Button
          buttonText={props.buttonText}
          handleOnClick={handleOnHeaderButtonClick}
        />
      </div>
    </>
  );
};

export default Header;
