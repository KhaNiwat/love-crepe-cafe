import React from "react";

export default function table() {
  return (
    <div className="container p-10">
      <div className="grid grid-cols-4 gap-4">
        <div
          className="w-40 h-40 bg-white border-2"
          style={{
            display: "grid",
            alignContent: "end",
            justifyContent: "start",
          }}
        >
          <h5 className="font-bold">โต๊ะที่ ID</h5>
        </div>
      </div>
    </div>
  );
}
