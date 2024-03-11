import React from "react";
import { EventAvailable } from '@mui/icons-material';
import { useNavigate, useParams } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const { lang } = useParams();

  const open = () => {
    navigate("/PageSumordertable/" + lang);
  }

  return (
    <div className="container p-10">
      <button className="w-20 bg-blue-500 text-white rounded flex items-center justify-center my-1 p-1" onClick={() => alert('Clicked')}><EventAvailable />จองคิว</button>
      <div className="grid grid-cols-4 gap-4">
        <div onClick={open}
          className="w-40 h-40 bg-white border-2"
          style={{
            display: "grid",
            alignContent: "end",
            justifyContent: "start",
          }}
        >
          <h5 className="font-bold" >โต๊ะที่ ID</h5>
        </div>
      </div>
    </div>
  );
}

export default Table;
