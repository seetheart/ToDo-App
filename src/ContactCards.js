import React from "react"

export default function ContactCards(props)
{
let styles={
  textAlign:"center"  
}
let style2={
  padding:"10px",
}
  return(
<div className="contact-care">
    <img className="image" src="http://placekitten.com//300/200"/>
    <h3 style={styles}> {props.contact.name}</h3>
    <p style={style2}>phone:{props.contact.phone}</p>
    <p style={style2}>email:{props.contact.email}</p>
</div>
  )

}