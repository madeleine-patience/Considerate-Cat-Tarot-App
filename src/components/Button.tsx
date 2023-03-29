import MyButtonProps from "../types/Button.type";

const Button = ({ buttonName, ...rest }: MyButtonProps) => {
  return (
    <div className=" bg-pink-100 w-40 text-center p-2 m-2">
      <button {...rest} data-button-name={buttonName}>
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
