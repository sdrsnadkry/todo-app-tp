import React, { useEffect, useState } from "react";

import "./css/bootstrap.min.css";
import "./css/all.min.css";
import "./css/styles.css";
import TodoItem from "./components/todoItem";
import Form from "./components/form";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const [initialValue, setInitialValue] = useState({
    id: null,
    title: "",
    priority: "",
    description: "",
  });

  useEffect(() => {
    const list = localStorage.getItem("todoList");
    const parsedList = JSON.parse(list);

    setTodoList(parsedList || []);
  }, []);

  const handleCompleted = (todoItem) => {
    const newArray = todoList?.map((item) => {
      if (item?.id === todoItem.id) {
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
      return item?.id !== todoItem.id;
    });
    setTodoList(newArray);
    localStorage.setItem("todoList", JSON.stringify(newArray));
  };

  const handleEdit = (todoItem) => {
    console.log(todoItem);
    setInitialValue({
      id: todoItem.id,
      title: todoItem.title,
      priority: todoItem.priority,
      description: todoItem.description,
    });
  };

  return (
    <div className="wrapper">
      <section className="content">
        <header className="header" id="header">
          <h3 className="heading">TODO APP</h3>
          <p>Manage all your task from one place</p>
        </header>

        <div className="lecture">
          <Form
            todoList={todoList}
            setTodoList={setTodoList}
            initialValue={initialValue}
          />
          <div id="lecture-list">
            <ul>
              {todoList?.map((item) => {
                return (
                  <TodoItem
                    key={item?.title}
                    id={item?.id}
                    completed={item?.completed}
                    title={item?.title}
                    description={item?.description}
                    priority={item?.priority} // "Medium" or "High"
                    handleCompleted={handleCompleted}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
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
