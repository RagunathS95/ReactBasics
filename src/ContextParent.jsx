import {React, useContext,useState, createContext}from 'react';
import ContextChild from './ContextChild.jsx';

const user = createContext();
export {user};
function ContextParent() {
    const [data,setData]=useState("Hello from Parent using Context API");
        
    return (
        <div>
            <user.Provider value={data}>           
            <ContextChild />            
            </user.Provider>
        </div>
    );
}
export default ContextParent;
