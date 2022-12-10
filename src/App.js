import {useState} from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";


function App() {
  const [list, setList] = useState([{id:1, value: 'Complate React!', status: false},
                                    {id:2, value: 'Learn Next.js', status: false},
                                    {id:3, value: 'Write TypeScript', status: false}]);

  const [filter, setFilter] = useState("all");
  const completedList = list.filter(item => item.status === true);
  const activeList = list.filter(item => item.status === false);

  const changeFilter = (filter) =>{
    setFilter(filter);
  }

  const clearCompleted = () => setList(activeList);

  return (
    <div className="todoapp">
      <Header list={list} setList={setList}/>
      <Main list={list} setList={setList} filter={filter} completedList={completedList} activeList={activeList}/>
      <Footer list={list} filter={filter} changeFilter={changeFilter} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
