import React from "react";
import { useParams } from "react-router-dom";
import { Axios } from "axios";
import { useEffect, useState } from "react";
const dataFromapi = [
    { name: "name1", order: 123, status: "finish" }
  ];
export default function Upmenu() {
  return (
    <div className="container p-10 ">
      <div className="">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            อัพโหลดรูปภาพ
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-2/5 shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="menu_name"
            className="block text-sm font-medium text-gray-700"
          >
            ชื่อเมนู
          </label>
          <input
            type="text"
            id="menu_name"
            name="menu_name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-2/5 shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            ราคา
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-2/5 shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            หมวดหมู่
          </label>
          <select
            id="category"
            name="category"
            className="mt-1 block w-2/5 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>เลือกหมวดหมู่</option>
            <option>หมวดหมู่ที่ 1</option>
            <option>หมวดหมู่ที่ 2</option>
            <option>หมวดหมู่ที่ 3</option>
            {/* เพิ่มตัวเลือกหมวดหมู่ตามความเหมาะสม */}
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-2/5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            บันทึก
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
