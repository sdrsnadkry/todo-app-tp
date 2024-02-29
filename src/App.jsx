import React, { useEffect, useState } from "react";

import "./css/bootstrap.min.css";
import "./css/all.min.css";
import "./css/styles.css";
import TodoItem from "./components/todoItem";
import Form from "./components/form";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem("todoList");

    const parsedList = JSON.parse(list);

    setTodoList(parsedList);
  }, []);

  const handleCompleted = (todoItem) => {
    const newArray = todoList?.map((item) => {
      if (item?.title === todoItem.title) {
        return {
          ...item,
          completed: true,
        };
      } else {
        return item;
      }
    });

    localStorage.setItem("todoList", JSON.stringify(newArray));
    setTodoList(newArray);
  };

  const handleDelete = (todoItem) => {
    const newArray = todoList?.filter((item) => {
      return item?.title !== todoItem.title;
    })
    setTodoList(newArray)
    localStorage.setItem("todoList", JSON.stringify(newArray));

  }

  return (
    <div className="wrapper">
      <section className="content">
        <header className="header" id="header">
          <h3 className="heading">TODO APP</h3>
          <p>Manage all your task from one place</p>
        </header>

        <div className="lecture">
          <Form todoList={todoList} setTodoList={setTodoList} />
          <div id="lecture-list">
            <ul>
              {todoList?.map((item) => {
                console.log(item);
                return (
                  <TodoItem
                    key={item?.title}
                    completed={item?.completed}
                    title={item?.title}
                    description={item?.description}
                    priority={item?.priority} // "Medium" or "High"
                    handleCompleted={handleCompleted}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
