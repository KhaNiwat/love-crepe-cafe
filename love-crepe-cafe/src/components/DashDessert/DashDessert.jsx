import React from "react";
import img from "../../img/food.png";
import DoneIcon from "@mui/icons-material/Done";
import { useParams } from "react-router-dom";
import  Axios  from "axios";
import { useEffect, useState } from "react";

const dataFromapi = [
  { name: "name1", order: 123 ,amount : 10}
];

const dataoption = [{ Des: 1 }, { Des: 1 }, { Des: 1 }];

export default function DashDessert() {
  const { lang } = useParams();
  const [dt, setDt] = useState([]);
  const [dtop, setdtop] = useState(dataoption);

  useEffect(() => {
    getDatalist(lang);
  }, []);

  const getDatalist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/crepe_bar", {
        lang: lang,
      });
      setDt(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleLoopClick = (index) => {
    const newData = [...dt];
    newData[index].status = "serve";
    setDt(newData);
  };

  const handleDoneClick = (index) => {
    const newData = [...dt];
    newData[index].status = "finish";
    setDt(newData);
  };

  return (
    <div className="container p-10">
      <h4>รายการอาหาร</h4>
      <table className="table">
        <thead>
          <tr>
            <th>No.</th> 
            <th className="text-center">Menu</th>
            <th className="text-center">Table</th>
            <th className="text-center">Amount</th>
            <th className="text-center">Option</th>
            <th className="text-center">Succeed</th>
          </tr>
        </thead>
        <tbody>
          {dt.map((val, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="text-center">{val.Name}</td>
              <td className="text-center">{val.CartID}</td>
              <td className="text-center">{val.Amount}</td>
              
              <td className="text-center bg-red-200">
                {val.optional.map((val, index) => (
                  <span key={index}>
                    {String(val.Description)}
                    <br />
                  </span>
                ))}
              </td>

              <td className="text-center">
                <button
                  class="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDoneClick(index)}
                  
                >
                  <DoneIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
