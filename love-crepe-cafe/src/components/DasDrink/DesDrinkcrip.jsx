import React from "react";
import img from "../../img/food.png";
import DoneIcon from "@mui/icons-material/Done";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function DesDrinkcrip(optionID) {
    const {lang} = useParams();
    const [tmp,settmp] = useState([]);
    useEffect(() => {
        getDataOption(lang,optionID);
      }, []);

      const getDataOption = async (lang,Option) => {
        try {
          const res = await Axios.post("http://localhost:5177/getoptionbyID", {
            lang: lang,
            OptionID : Option
            
          });
          console.log(res.data)
          settmp(res.data);
        } catch (error) {
          console.log(error);
        }

      };
      return(
      <td className="text-center bg-red-200">
      {
      tmp.map((val, index) => (
        <span key={index}>
            {console.log(val.Description)}
          {String(val.Description)}
          <br />
        </span>
      ))}
    </td>

      )
      
}