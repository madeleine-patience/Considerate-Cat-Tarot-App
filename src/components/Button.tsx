interface MyButtonProps {
  buttonName: string;
  onClick: () => void;
}

function Button(props: MyButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className=" bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center"
    >
      {props.buttonName}
    </button>
  );
}

export default Button;
