import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Componenets/Layout/Navbar"
import Footer from "./Componenets/Layout/Footer"

function App() {

  return (
    <div className="">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
