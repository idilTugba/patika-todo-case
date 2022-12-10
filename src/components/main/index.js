import {useState,useEffect} from "react";


export default function Main({list,setList,filter,completedList, activeList}){
    
    //remove item in list
    const destroyLi = (e) => {
        if(e.target.id){
            let listArray = [...list];
            listArray.splice(e.target.id,1);
            setList([...listArray]);
        }
    }

    const [allList,setAllList] = useState(list);
    
    //Checkbox
    const toggleCheck = (e) => {
        let listId = e.target.id.slice('checkbox',1);
        
        const newList = list.map((item) => {
            if (item.id === parseInt(listId)) {
              item.status = !item.status;
            }
            return item;
          });

          setList(newList);
    }

    const selectAll = (e) =>{
        const allCheck = allList.map((item)=>{
            item.status=true;
            return item
        });
        setAllList(allCheck);
    }


    useEffect(()=>{
        if(filter === "completed"){
            setAllList(completedList)
        }else if(filter === "active"){
            setAllList(activeList)
        } else {
            setAllList(list)
        }
    },[list,filter]);

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all" onClick={selectAll}>
			    Mark all as complete
		    </label>

            <ul className="todo-list">
                {allList.map((item, key)=>{
                    return (
                        <li className={item.status ? "completed" : null} key={key}>
                            <div className="view">
                                <input id={item.id+'checkbox'} checked={item.status} className="toggle" onChange={toggleCheck} type="checkbox" />
                                <label>{item.value}</label>
                                <button id={item.id+'destroy'} onClick={destroyLi} className="destroy"></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}