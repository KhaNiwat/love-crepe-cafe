import React from 'react'
import Bar from "../components/bar/bar.jsx";
import Month from "../components/summary/month.jsx"
export default function Pademonthsummary() {
  return (
    <div className="h-screen flex overflow-hidden">
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="bg-gray-800 px-3 py-4">
        <Bar/>
        </div>
      </div>
    </div>
    <div className="flex flex-col flex-1 overflow-y-auto">
    <div>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <Month />
        </div>
      </div>
    </div>
  </div>
  )
}
