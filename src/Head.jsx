import react from 'react';
import { NavLink } from 'react-router-dom';

function Head(){
    return(
        <div>
            <NavLink to="/Prop-Parent">Props Parent Component</NavLink>
            <br/>
            <NavLink to="/ContextParent">Context Parent Component</NavLink>
        </div>
    )
}
export default Head;