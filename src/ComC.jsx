import React from "react";
import { FirstName, LastName } from "./App";

const ComC = () => {
  return (
    <>
      <FirstName.consumer>
        {(fname) => {
          return (
            <LastName.consumer>
              {(lname) => {
                return;
                <h1>
                  My name is {fname} {lname}{" "}
                </h1>;
              }}
            </LastName.consumer>
          );
        }}
      </FirstName.consumer>
      ;
    </>
  );
};
export default ComC;
