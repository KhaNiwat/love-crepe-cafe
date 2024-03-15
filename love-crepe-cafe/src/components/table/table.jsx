import React from "react";
import { EventAvailable } from "@mui/icons-material";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import { useNavigate, useParams } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const { lang } = useParams();

  const open = () => {
    navigate("/PageSumordertable/" + lang);
  };

  return (
    <div className="container p-10">
      <button
        className="w-20 bg-blue-500 text-white rounded flex items-center justify-center my-1 p-1"
        onClick={() => alert("Clicked")}
      >
        <EventAvailable />
        Queue
      </button>
      <br />
      <div className="grid grid-cols-4 gap-4">
        <div
          onClick={open}
          className="relative w-40 h-40 bg-white border-2 flex items-center justify-center"
        >

          <h5 className=" absolute bottom-0 left-1">ID</h5>
          <TableRestaurantIcon sx={{ fontSize: 100 }} />
        </div>
        
      </div>
    </div>
  );
};

export default Table;
