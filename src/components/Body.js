import React from "react"
import Button from "./Button"  //linkedin and email button
import About from "./About"    //about and interest

export default function Body(){
    return(
        <div className="detail">
        <h1 className="name">Kirubakaran</h1>
        <p className="role">Frotend Developer</p>
        <p className="web">kiruba.website</p>
        <Button/>
         <About/>
        </div>
    )
}

//export to APP