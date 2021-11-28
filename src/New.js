import React from "react"

export default class New extends React.Component{
    constructor()
    {
        super()
        this.state={
            answer:"yes"
        }
    }
   
 
    render(){
        
        
        return(
            <div>
                
                <h1> somethng {this.state.answer}</h1>
            </div>
        )
    }

}