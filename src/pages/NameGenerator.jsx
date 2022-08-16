import React from "react";
import { useState } from "react";

function NameGenerator() {
  const [output, setOutput] = useState("");
  const names = [
    "Helen Guzman",
    "Marlon Black",
    "Misty Ford",
    "Tracey Newman",
    "Courtney Ball",
    "Roberto Summers",
    "Sheila Pierce",
    "Stanley Young",
    "Roxanne Hall",
    "Darrel Weber",
  ];

  const getName = () => {
    const index = Math.floor(Math.random() * 10);
    console.log(index);
    return setOutput(names[index]);
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 w-50 pb-5">
          <button
            className="btn btn-warning w-50 mb-5"
            onClick={() => getName()}
          >
            Generate Name
          </button>
          <h1 className="text-primary lead" style={{ fontSize: "100px" }}>
            {output}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NameGenerator;
