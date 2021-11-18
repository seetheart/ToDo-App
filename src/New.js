import React from "react";
import "./App.css"
import ContactCards from "./ContactCards"

export default function New()
{
    return(
        <div className="contacts">
        <ContactCards
        contact={{name:"siddharth",image:"http://placekitten.com//300/200",phone:"1122334455",
        email:"something@gmail.com"}} />
        <ContactCards
        contact ={{name:"siddharth",image:"http://placekitten.com//300/200",phone:"1122334455",
        email:"something@gmail.com"}} />
        <ContactCards
        contact={{name:"siddharth",
        image:"http://placekitten.com//300/200",
        phone:"1122334455",
        email:"something@gmail.com"}} />
        <ContactCards
        contact={{name:"siddharth",
        image:"http://placekitten.com//300/200",
        phone:"1122334455",
        email:"something@gmail.com"}} />
        </div>
        
    )
}