import React from 'react';
import Props_Parent from './Props_Parent';



function Props_Child1(props){
    const ParentName = "Heloo from Child1";
    return(
        <div>
            <h3>This is {props.CName} received from Parent Props</h3>        
        <button onClick={()=>props.sendMsg(ParentName)}>Send Message to Parent</button>
            
        </div>                
    )
}
export default Props_Child1;
