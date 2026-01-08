import {React, useContext} from 'react';
import { user } from './ContextParent.jsx';
function ContextChild() {
    const data= useContext(user);
    return (
        <div>
            <h2>This is Child Component</h2>
            <h3>Data from Parent using Context API: {data}</h3>
        </div>
    );
}
export default ContextChild;