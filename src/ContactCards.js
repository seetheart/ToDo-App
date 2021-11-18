import React from "react"

export default function ContactCards(props)
{
  return(
<div className="contact-care">
    <img src={props.contact.image}/>
    <h3> {props.contact.name}</h3>
    <p>phone:{props.contact.phone}</p>
    <p>email:{props.contact.email}</p>
</div>
  )

}