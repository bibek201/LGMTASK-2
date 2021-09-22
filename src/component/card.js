import React from 'react'
import img from "./img.jpg";
import twitter from "./twitter.png"
import github from "./github.png"
import linkedin from "./linkedin.png"
import { HiMail } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai"
import { GiMailbox, GiWorld } from "react-icons/gi"
function card({User,extra}) {
    console.log("properties",User,extra);
    return (
        <div className="box" >
            <div className="card1">
                <div className="user1">                   
                    <img src={User.avatar} className="img"></img>
                    <h2>{User.first_name} {User.last_name}</h2>
                </div>
                <div className="info">
                    <div>< HiMail /> {User.email}</div>
                    <div>< AiFillPhone/> {extra.phone}</div>
                    <div><GiWorld  /> {extra.page}</div>
                    <div>< HiLocationMarker/> {extra.location}</div>
                </div>
                    <div className="links">
                        <img  src={twitter}></img>
                        <img  src={linkedin}></img>
                        <img  src={github}></img>
                    </div>
            </div>
        </div>
    )
}

export default card
