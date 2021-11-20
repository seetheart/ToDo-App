import React from "react";
import "./App.css"
import ContactCards from "./ContactCards"
import Cats from "./Cats"

export default function New()
{
const products= Cats.map(item => <ContactCards Key={item.id} contact={item}/>)

return(
    <div>
        {products}
    </div>

)
}