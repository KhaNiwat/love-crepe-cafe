import React from 'react'
import Bar  from    "../components/bar/bar.jsx";
import Table from "../components/table/table.jsx";
import Foodroom from "../components/food kitchen/foodroom.jsx";
export default function Table_cus () {
    return (
        <div className="h-screen flex overflow-hidden bg-gray-100">
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="bg-gray-800 px-3 py-4">
            <Bar/>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <Table/>
              {/* <Foodroom /> */}
            </div>
          </header>
        </div>
      </div>
    )
  }