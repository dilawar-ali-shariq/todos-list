import './App.css';
import React from 'react';
import Header from "./components/Header"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import Footer from "./components/Footer"

function App() {

  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = []
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  function addTodo(title,desc){
    let sno;
    if(todos.length == 0){
      sno = 0
    }else{
      sno = todos[todos.length-1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos , myTodo])

    localStorage.setItem("todos" , JSON.stringify(todos));
  } 
  

  function onDelete(todo){
    setTodos(todos.filter((t) => {
      return t !== todo
    }))

  }

  const [ todos , setTodos ] = React.useState(initTodo)
  React.useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos));
  } , [todos])

  return (
    <div>
      <Header title="My Todos List" searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </div>
  );
}

export default App;
