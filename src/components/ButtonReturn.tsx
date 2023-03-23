interface MyButtonProps {
  buttonName: string;
  onClick: () => string;
}

function ButtonReturn(props: MyButtonProps) {
  return (
    <div className="flex justify-content">
      <button
        onClick={props.onClick}
        className="mx-auto bg-[#fcdeea] hover:bg-gray-400 text-gray-800 py-2 px-4 rounded "
      >
        {props.buttonName}
      </button>
    </div>
  );
}

export default ButtonReturn;
