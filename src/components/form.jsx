import { useFormik } from "formik";
import React from "react";

import { object, string } from "yup";

const validationSchema = object({
  title: string().required("Title is required"),
  priority: string().required("Priority is required"),
  description: string().required("Description is required"),
});

const obj = {
    title: "Complete assignment 5 (Create an TODO app)",
    description: "Description of your task goes here",
    priority: "Low",
    completed: false,
}

const Form = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      priority: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form
        className="lecture-add"
        id="lecture-add"
        onSubmit={formik.handleSubmit}
      >
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                placeholder="Enter your task "
              />
              <small className="text-danger">{formik.errors.title}</small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <select
                name="priority"
                className="form-control"
                placeholder="Select your priority "
                value={formik.values.priority}
                onChange={formik.handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <small className="text-danger">{formik.errors.priority}</small>
            </div>
          </div>
          <div className="col-md-12">
            <div className="forn-group">
              <textarea
                className="form-control"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                placeholder="Enter your description "
                rows="4"
              ></textarea>
              <small className="text-danger">{formik.errors.description}</small>
            </div>
          </div>
        </div>
        <button className="success" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
