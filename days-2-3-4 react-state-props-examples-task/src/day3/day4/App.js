import { useState } from "react";
import "./index.css";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdEdit, MdOutlineCheck } from "react-icons/md";

const initTodos = [
  {
    content: "First Task",
    id: 1,
    color: "purple",
  },
  {
    content: "Second Task",
    id: 2,
    color: "orange",
  },
  {
    content: "Third Task",
    id: 3,
    color: "blue",
  },
];

const App = () => {
  const [todo, setTodo] = useState(initTodos);
  const [completedTask, setCompletedTask] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [content, setContent] = useState("");
  const [color, setColor] = useState("");

  const deleteHandler = (i, y) => {
    let ok = window.confirm(`Are you sure? ${y}`);
    if (ok) {
      if (y === "todo") {
        setTodo(todo.filter((x) => x.id !== i));
      } else if (y === "completed") {
        setCompletedTask(completedTask.filter((x) => x.id !== i));
      }
    }
  };

  const completeHandler = (i) => {
    // 1
    deleteHandler(i.id, "todo");

    // 2
    setCompletedTask([...completedTask, i]);
  };

  const editMyTodo = () => {
    const payload = { content, color, id: currentId };
    const updatedTodo = todo.map((x) => (x.id === currentId ? { ...x, ...payload } : x));
    setTodo(updatedTodo);
    // console.log(updatedTodo)
    setCurrentId(0);
    setContent("");
    setColor("");
  };

  return (
    <div className="todo-app">
      <h1>My Task : Helo</h1>
      {todo.map((x) => (
        <div key={x.id} className="box" style={{ border: `1px solid ${x.color}`, borderRadius: "5px" }}>
          {x.id === currentId ? (
            <>
              <div className="icons">
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter your task" />
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter your task" />
              </div>
              <MdOutlineCheck size={15} color="green" onClick={editMyTodo} />
            </>
          ) : (
            <>
              <span>{x.content}</span>
              <div className="icons">
                <FaDeleteLeft size={15} color="#ff2222" onClick={() => deleteHandler(x.id, "todo")} />
                <MdEdit size={15} color="#141431" onClick={() => setCurrentId(x.id)} />
                <MdOutlineCheck size={15} color="purple" onClick={() => completeHandler(x)} />
              </div>
            </>
          )}
        </div>
      ))}

      <h1>Completed Task</h1>
      {completedTask.map((x) => (
        <div key={x.id} className="box" style={{ border: `1px solid ${x.color}`, borderRadius: "5px" }}>
          <span>{x.content}</span>
          <div className="icons">
            <FaDeleteLeft size={15} color="#ff2222" onClick={() => deleteHandler(x.id, "completed")} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
