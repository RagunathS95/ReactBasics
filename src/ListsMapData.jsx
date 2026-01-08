import {React} from 'react';

function ListsMapData() {
    const names = ['Alice', 'Bob', 'Charlie', 'David'];
    const nameList = names.map((name, index) => 
                                <li key={index}>{name}</li>);
    return (
        <div>
            <h2>List of Names:</h2>
            <ul>
                {nameList}
            </ul>
        </div>
    );
}
export default ListsMapData;