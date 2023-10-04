import React from "react"
import Header from "./components/Header.js"  // image
import Body from "./components/Body.js"     // detail,button,about,interest
import Footer from "./components/footer.js" //footer

export default function App(){
  return (
    <div>
      <Header/> 
      <Body/>
      <Footer/>
    </div>
  )
}