import React from "react";

import "./css/bootstrap.min.css";
import "./css/all.min.css";
import "./css/styles.css";
import TodoItem from "./components/todoItem";
import Form from "./components/form";

const App = () => {
  return (
    <div className="wrapper">
      <section className="content">
        <header className="header" id="header">
          <h3 className="heading">TODO APP</h3>
          <p>Manage all your task from one place</p>
        </header>

        <div className="lecture">
          <Form />
          <div id="lecture-list">
            <ul>
              <TodoItem
                completed={false}
                title="Complete assignment 5 (Create an TODO app)"
                description="Description of your task goes here"
                priority="Low" // "Medium" or "High"
              />
              <TodoItem
                completed={true}
                title="Complete assignment 5 (Create an TODO app)"
                description="Description of your task goes here"
                priority="High"
              />
              <TodoItem
                completed={true}
                title="Complete assignment 5 (Create an TODO app)"
                description="Description of your task goes here"
                priority="Medium"
              />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
