import React from "react";

const TodoItem = (props) => {
  console.log(props);

  return (
    <li>
      <div>
        <h6 className={`title ${props.completed ? "completed" : ""}`}>
          {props.title}
          <span
            className={`ml-2 badge badge-${
              props.priority === "Low"
                ? "info"
                : props.priority === "Medium"
                ? "warning"
                : "danger"
            }`}
          >
            {props.priority}
          </span>
        </h6>
        <p className="description">{props.description}</p>
      </div>
      <div>
        {!props.completed && (
          <>
            <button className="btn btn-success">
              <i className="fas fa-check"></i>
            </button>
            <button className="btn btn-warning">
              <i className="fas fa-pencil"></i>
            </button>
          </>
        )}
        <button className="btn btn-danger">
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
