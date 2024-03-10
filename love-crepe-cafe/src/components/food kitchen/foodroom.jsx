import React from "react";
import img from "../../img/food.png";
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CircularProgress from '@mui/material/CircularProgress';
import  LoopIcon from '@mui/icons-material/Loop';

export default function foodroom() {
  return (
    <div className="container p-10">
      <h4>รายการอาหาร</h4>
      <table class="table">
        <thead>
          <tr >
            <th>No.</th>
            <th className="text-center">รูป</th>
            <th className="text-center">ชื่ออาหาร</th>
            <th className="text-center">ออเดอร์</th>
            <th className="text-center">จำนวน</th>
            <th className="text-center">กำลังทำ</th>
            <th className="text-center">เสร็จสิ้น</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="text-center" style={{ width: '80px' }}><img src={img} alt="" /></td>
            <td className="text-center">Malcolm Lockyer</td>
            <td className="text-center"> 1961</td>
            <td className="text-center"> 1</td>
            <td className="text-center bg-red-200"><button><LoopIcon /></button></td>
            <td className="text-center "><button><DoneIcon /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
