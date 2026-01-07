import React from'react';

function Props_Child2(props)
{
    return(
        <div>
            <h3>This is {props.CName} from Parent
            </h3>
            <h3>Age is {props.CAge} </h3>
        </div>
    )
}
export default Props_Child2;