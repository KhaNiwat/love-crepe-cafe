import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Search  from '../components/Search/Search'
import Menugroup from '../components/Menugroup/Menugroup'
import Shownenu from '../components/Shownenu/Shownenu'
export default function Cusmenudrink() {
  return (
    <>
    <p>เครื่องดื่ม</p>
        <Navbar />
        <Search/>
        <Menugroup/> 
        <Shownenu/>
    </>
  )
}
