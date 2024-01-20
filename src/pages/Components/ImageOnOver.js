import { useState } from "react";
export const ImageOnOver = ({ onFalse, onTrue, widthProp }) => {
  const [over, setOver] = useState(false);
  return (
    <>
      <img
        style={{
          border: "solid 0px black",
          borderRadius: "100%",
          boxShadow: "5px 2px 3px 2px gray ",
        }}
        src={over ? onTrue : onFalse}
        width={widthProp}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      ></img>
    </>
  );
};
