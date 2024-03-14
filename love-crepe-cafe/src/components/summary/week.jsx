import React from "react";
import img from "../../img/food.png";
import { useParams } from "react-router-dom";
import { Axios } from "axios";
import { useEffect, useState } from "react";

// #1
const dataFromapi = [
  { day: "จันทร์", amount: "20", sum: "10000" },
];

export default function Week() {
  //แปรตัว
  const { lang } = useParams();
  const [dt, setdt] = useState(dataFromapi);

  useEffect(() => {
    getdatalist(lang);
  }, []);

  const getdatalist = async (lang) => {
    try {
      const res = await Axios.post("http://localhost:5177/sum_month", {
        lang: lang,
      });
      setdt(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container p-10">
      <h4>สรุปยอดขายรายสัปดาห์</h4>
      <table class="table">
        <thead>
          <tr>
            <th>วัน</th>
            <th>จำนวน</th>
            <th>ยอดรวม</th>
            <th>รายละเอียด</th>
          </tr>
        </thead>
        {dt.map((val) => {
          return (
            <tbody>
              <tr>
                <td> {val.day}</td>
                <td>{val.amount}</td>
                <td>{val.sum}</td>
                <td><button>sdfsdf</button></td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
