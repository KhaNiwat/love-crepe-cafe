import React from 'react';

function Dashboard() {
  return (
    <div className="flex h-screen" >
      {/* Sidebar */}
      <div className="text-white w-64 py-4 px-4">
        <div className="mb-3 text-xl font-bold">Dashboard</div>
        <br />
        <ul>
          <li className='mb-3'>
            <button className='Dash-bt'><a href="" className='text-black no-underline'>เลือกโต๊ะ</a></button>
          </li>
          <li className='mb-3'>
            <button className='Dash-bt'><a href="" className='text-black no-underline' >ครัวอาหาร</a></button>
          </li>
          <li className='mb-3'>
            <button className='Dash-bt'><a href="" className='text-black no-underline'>ครัวของหวาน</a></button>
          </li>
          <li className='mb-3'>
            <button className='Dash-bt'><a href="" className='text-black no-underline'>เครื่องดื่ม</a></button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
