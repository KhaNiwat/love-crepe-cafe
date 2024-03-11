import React,{useState} from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import styles from "./addanddel.module.css";

export default function Addanddel() {
  const [count,setCount] = useState(0)
  function AddCount(){
    // count = count + 1
    if (count< 10){
      setCount(count + 1);
    }
  }

  function subtractCount() {
    if (count> 0){
      setCount(count - 1);
    }
  }
  return (
    <>
      <div className={styles.quantity}>
        <button onClick={subtractCount}>
          <RemoveCircleIcon />
        </button>
        <label className="mx-2">{count}</label>
        <button onClick={AddCount}>
          <AddCircleIcon />
        </button>
      </div>
    </>
  );
}
