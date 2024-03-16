import React, { useEffect, useState } from "react";
import img from "../../img/food.png";
import DoneIcon from "@mui/icons-material/Done";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

const dataoption = [{ Des: 1 }, { Des: 1 }, { Des: 1 }];

export default function Foodroom() {
  const { lang } = useParams();
  const [dt, setDt] = useState([]);
  const [dtop, setdtop] = useState(dataoption);
  const [lastUpdateTime, setLastUpdateTime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getDatalist(lang);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getDatalist(lang);
    }, 1000);

    return () => clearInterval(interval);
  }, [lang]);

  useEffect(() => {
    if (lastUpdateTime !== null) {
      const timeout = setTimeout(() => {
        getDatalist(lang);
      }, 1000); // Set timeout for 5 seconds, adjust as needed
      return () => clearTimeout(timeout);
    }
  }, [lastUpdateTime, lang]);

  const getDatalist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/food_bar", {
        lang: lang,
      });
      setDt(res.data);
      setLastUpdateTime(Date.now());
    } catch (error) {
      console.log(error);
    }
  };

  const handleDoneClick = async (cart, index_del) => {
    await sentCartIdtofinishmenu(cart);
    setDt(prevData => prevData.filter((_, index) => index !== index_del));
    navigate("/Pfood_kitchen/" + lang);
  };

  const sentCartIdtofinishmenu = async (cart) => {
    try {
      const res = await Axios.post("http://localhost:5177/finishMenu", {
        CartID: cart,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container p-10">
      <h4>Food list</h4>
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th className="text-center">Menu</th>
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
                  onClick={() => handleDoneClick(val.CartID, index)}
                  class="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
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
