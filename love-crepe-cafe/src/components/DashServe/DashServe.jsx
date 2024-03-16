import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";

const dataoption = [{ Des: 1 }, { Des: 1 }, { Des: 1 }];

export default function DashServe() {
  const { lang } = useParams();
  const [dt, setDt] = useState([]);
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
    const timeout = setTimeout(() => {
      getDatalist(lang);
    }, 1000); // Set timeout for 5 seconds, adjust as needed

    return () => clearTimeout(timeout);
  }, [dt, lang]);

  const getDatalist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/serve_bar", {
        lang: lang,
      });
      setDt(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sentCartIdtofinishmenu = async (cart) => {
    try {
      const res = await Axios.post("http://localhost:5177/serve", {
        CartID: cart,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDoneClick = async (cart, index_del) => {
    await sentCartIdtofinishmenu(cart);
    setDt(prevData => prevData.filter((_, index) => index !== index_del));
    navigate("/PageServe/" + lang);
  };

  return (
    <div className="container p-10">
      <h4>Serve</h4>
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
              <td className="text-center">{val.TableID}</td>
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
                  className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
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
