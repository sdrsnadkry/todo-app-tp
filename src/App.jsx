import React from "react";

import "./css/bootstrap.min.css";
import "./css/all.min.css";
import "./css/styles.css";
import TodoItem from "./components/todoItem";

const App = () => {
  return (
    <div className="wrapper">
      <section className="content">
        <header className="header" id="header">
          <h3 className="heading">TODO APP</h3>
          <p>Manage all your task from one place</p>
        </header>

        <div className="lecture">
          <form className="lecture-add" id="lecture-add">
            <div className="row mb-2">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Enter your task "
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    name="priority"
                    className="form-control"
                    placeholder="Select your priority "
                  >
                    <option value="0">Low</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="forn-group">
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Enter your description "
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
            <button className="success" type="submit">
              Add
            </button>
          </form>
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
