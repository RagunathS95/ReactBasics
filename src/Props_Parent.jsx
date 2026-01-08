import {React} from 'react';
import Props_Child1 from './Props_Child1.jsx';
import Props_Child2 from './Props_Child2.jsx';
import { useState } from 'react';

function Props_Parent() {
const[msg,setMsg]=useState("");
const getMsg=(message)=>{
    setMsg(message);
}

    const parentName = "Parent Component";
    const child2 =" Child2";
    const age = 10;
    return (
        <div>
            <h2>This is {parentName}</h2>
            <Props_Child1 CName={parentName} />             
            <Props_Child1 CName={parentName} sendMsg={getMsg} />
             <h3>Message from Child1: {msg}</h3>    
             <Props_Child2 CName={child2} CAge={age} />          
        </div>
    );
}

export default Props_Parent;