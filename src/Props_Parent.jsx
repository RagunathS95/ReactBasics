import {React} from 'react';
import Props_Child1 from './Props_Child1.jsx';
import Props_Child2 from './Props_Child2.jsx';

function Props_Parent() {
    const parentName = "Parent Component";
    return (
        <div>
            <h2>This is {parentName}</h2>
            <Props_Child1 childName="Child Component" />
            <Props_Child2 childName="Another Child Component" />            
        </div>
    );
}

export default Props_Parent;