import { useState } from "react";
function List({ tasks, completedTasks, handleDelete, handleCompleted}) {
  return (
    <div id="list">
      {tasks.map((task, index) => {
        return (
          <div id="inner-list">
           <button className="btn" onClick={() => handleCompleted(task.id)}>
            <input type="checkbox"  />
           </button>
            <p
            key={index}
            style={
              completedTasks.includes(task.id)
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
            >{task.task.toUpperCase()}</p>
            <button className="delbtn" onClick={() =>  handleDelete(task.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default List;