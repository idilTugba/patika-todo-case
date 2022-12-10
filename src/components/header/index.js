import { useState } from "react";

export default function Header({list,setList}){
    let [newListItem, setNewListItem] = useState('');

    const submitItem = (e)=>{
        e.preventDefault();
        if(newListItem === ""){
            return false
        }

        setList([...list,{ value: newListItem, status: false}]);
        setNewListItem('');
    }

    return(
        <header>
            <h1>todos</h1>
            <form onSubmit={submitItem}>
                <input value={newListItem} onChange={(e)=>setNewListItem(e.target.value)} className="new-todo" placeholder="What needs to be done?" autoFocus />
            </form>
        </header>
    )
}

