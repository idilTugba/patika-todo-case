

export default function Footer({list, filter, changeFilter, clearCompleted}){

    const count = list.filter((item) => item.status === false).length;
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{count} </strong>
                items left
            </span>

            <ul className="filters">
                <li onClick={()=>changeFilter("all")}>
                    <a href="#/" className={filter === "all" ? "selected" : null}>All</a>
                </li>
                <li onClick={()=>changeFilter("active")}>
                    <a href="#/" className={filter === "active" ? "selected" : null}>Active</a>
                </li>
                <li onClick={()=>changeFilter("completed")}>
                    <a href="#/" className={filter === "completed" ? "selected" : null}>Completed</a>
                </li>
            </ul>

            <button className={count === list.length ? "hidden" : "clear-completed"} onClick={()=>clearCompleted()}>
                Clear completed
            </button>
        </footer>
    )
}