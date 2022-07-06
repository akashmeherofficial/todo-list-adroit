import "./App.css";
import {useState} from 'react'
import List from "./List";

function App() {

  const [item, updateItem]=useState()
  const [list, updateList]=useState([])
  const onChangeHandler=(e)=>{
    updateItem(e.target.value)
  }

  const addItemToList=()=>{
    updateList([...list,{item:item, key:Date.now()}])
    updateItem("")
  }
  return (
    <div className="App">

      <h1>Task List</h1>
      <div className="container">
      <div className="input">
        <input type="text" value={item} onChange={onChangeHandler}/>
        <button className="addnewtask" onClick={addItemToList}>Add New Task</button>
        </div>

        <List list={list} updateList={updateList} updateItem={updateItem}/>

      </div>
    </div>
  );
}

export default App;
