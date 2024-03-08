import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import styles from "../addanddel/addanddel.module.css";

export default function amount() {
  return (
    <>
      <div className="border-inherit text-center rounded-md border-2 w-full grid grid-rows-2 grid-flow-col">
        <div className="text-white  bg-pink-400 p-1">amount</div>

        
        <div className="grid-cols-3 justify-items-center  grid justify-items-start md:justify-items-center">
            <button>
              <RemoveCircleIcon />
            </button>
            <label>1</label>
            <button>
              <AddCircleIcon />
            </button>
          </div>
        </div>
    </>
  );
}
