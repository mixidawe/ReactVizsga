import React from "react";
import rajzom from "../Kepek/rajzom.jpg"
import hold from "../Kepek/szerkesztettholdfoto.jpg"
import vadaszgep from "../Kepek/vadaszgep.jpg"

const Kepek = () =>{
   return (
    <div>
        <h1 id="kepekh1">Kedvenc képeim</h1>
        <div id="kep1"><img src={hold} width={"250px"}/></div>
        <div id="kep2"><img src={rajzom} width={"265px"} height={"300px"} /></div>
        <div id="kep3"><img src={vadaszgep} width={"265px"} /></div>
    </div>
   )
}
export default Kepek;