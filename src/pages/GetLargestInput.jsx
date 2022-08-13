import React from "react";
import { useState } from "react";

function GetLargestInput() {
  var [fistinput, setFirstInput] = useState("");
  var [secondinput, setSecondInput] = useState("");
  var [thirdtinput, setThirdInput] = useState("");
  //   const result = [];

  const getLagestInput = () => {
    fistinput = parseFloat(fistinput);
    secondinput = parseFloat(secondinput);
    thirdtinput = parseFloat(thirdtinput);

    // // Check if
    // if (fistinput > secondinput && secondinput > thirdtinput) {
    //   return fistinput;
    // } else if (secondinput > fistinput && secondinput > thirdtinput) {
    //   return secondinput;
    // } else if (thirdtinput > fistinput && thirdtinput > secondinput) {
    //   return thirdtinput;
    // }

    return Math.max(fistinput, secondinput, thirdtinput);
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            className="w-25 lead"
            placeholder="Input"
            value={fistinput}
            onChange={(e) => setFirstInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="w-25 lead"
            placeholder="Input"
            value={secondinput}
            onChange={(e) => setSecondInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="w-25 lead"
            placeholder="Input"
            value={thirdtinput}
            onChange={(e) => setThirdInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            readOnly={true}
            placeholder="Output"
            value={getLagestInput()}
          />
        </div>
      </div>
    </div>
  );
}

export default GetLargestInput;
