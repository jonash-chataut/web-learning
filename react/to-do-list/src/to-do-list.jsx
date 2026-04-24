import React, { useState } from "react";
import { Link } from "react-router-dom";

function ToDoList() {
  const [tasks, setTask] = useState([]);
  const [newTask, setnewTask] = useState("");

  function handleInputChanges(event) {
    setnewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setnewTask("");
    }
  }

  function deleteTask(index) {
    const upDatedTask = tasks.filter((_, i) => i !== index);
    setTask(upDatedTask);
  }

  function moveUp(index) {
    if (index > 0) {
      const upDatedTask = [...tasks];
      [upDatedTask[index], upDatedTask[index - 1]] = [
        upDatedTask[index - 1],
        upDatedTask[index]
      ];
      setTask(upDatedTask);
    }
  }

  function moveDown(index) {
    if (index <tasks.length-1) {
      const upDatedTask = [...tasks];
      [upDatedTask[index], upDatedTask[index + 1]] = [
        upDatedTask[index +1],
        upDatedTask[index]
      ];
      setTask(upDatedTask);
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChanges}
        />

        <button className="addButton" onClick={addTask}>
          Add
        </button>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="deleteButton"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="upButton" onClick={() => moveUp(index)}>
                👆
              </button>
              <button className="downButton" onClick={() => moveDown(index)}>
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="digitalclock-link">
        <Link to="/digitalClock">Click here for digital clock</Link>
      </div>
    </>
  );
}

export default ToDoList;
