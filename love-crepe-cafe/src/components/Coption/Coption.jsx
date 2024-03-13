import React from "react";
import Form from "react-bootstrap/Form";
import Amount from "../amount/amount";
import Payment from "../Payment/Payment";
import { useParams } from "react-router-dom";
import { Axios } from "axios";
import { useEffect, useState } from "react";

const dataFromapi = [{ Name_menu: "พัดไทย", price: 20000 }];
export default function Coption() {
    const { lang } = useParams();
    const [dt, setDt] = useState(dataFromapi);
  
    useEffect(() => {
      getDatalist(lang);
    }, []);
  
    const getDatalist = async (lang) => {
      try {
        const res = await Axios.post("http://localhost:5177/Option", {
          lang: lang,
        });
        setDt(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
   
    const onChange  = (type) => {
      console.log("Checkbox of type", type, "clicked");
    };
  
    return (
      <div>
        {dt.map((val, index) => (
          <div key={index}>
            <h1 className="flex">{val.Name_menu}</h1>
            <h2 className="flex text-yellow-400">{val.price} W</h2>
            <div>
              {["checkbox", "vae"].map((type, idx) => (
                <div key={`default-${type}-${idx}`}>
                  <Form.Check
                    type={"checkbox"}
                    id={`default-${type}`}
                    label={`default ${type}`}
                    onChange={() => onChange(type)}
                  />
                </div>
              ))}
              <br />
              <div className="my-auto grid justify-items-center">
                <Amount />
              </div>
              <br />
              <Payment />
            </div>
          </div>
        ))}
      </div>
    );
  }
  