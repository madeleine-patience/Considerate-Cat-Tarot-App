import React from "react";
import ICatProps from "../types/CatProps";

const Purrlaroid = (props: ICatProps) => {
  return (
    <div className="flex m-4 w-96 h-96">
      <div className=" w-96 bg-yellow-100 rounded-lg">
        <img
          className=" w-72 mx-auto p-5"
          onClick={() => props.handleClick?.(props.data)}
          src={props.data.image}
        />
        <h3 className=" text-[30px] text-center">{props.data.name}</h3>
      </div>
    </div>
  );
};

export default Purrlaroid;
