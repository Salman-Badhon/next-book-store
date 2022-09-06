const Button = (props) => {
  return (
    <>
      <button className={props.buttonStyle} onClick={props.handleOnClick}>
        {props.buttonText}
      </button>
    </>
  );
};

export default Button;
