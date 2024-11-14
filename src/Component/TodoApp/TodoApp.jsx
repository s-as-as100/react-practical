import { useState } from "react";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleSubmit = () => {
    let data = {
      title,
      description,
    };
    if (isEditing) {
      const updateTodoList = [...todoList];
      updateTodoList[currentIndex] = data;
      setTodoList(updateTodoList);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setTodoList([...todoList, data]);
    }

    setTitle("");
    setDescription("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todoList.filter((_, i) => i !== id);
    setTodoList(updatedTodos);
  };

  const handleEdit = (id) => {
    setTitle(todoList[id].title);
    setDescription(todoList[id].description);
    setIsEditing(true);
    setCurrentIndex(id);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="enter the title"
          style={{
            padding: "1rem 2rem",
            width: "100%",
          }}
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="enter the description"
          style={{
            padding: "1rem 2rem",
            width: "100%",
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {todoList?.map((item, index) => {
          return (
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
              key={index}
            >
              <h5>{item.title}</h5>
              <h5>{item.description}</h5>
              <button
                onClick={() => handleEdit(index)}
                style={{
                  width: "20%",
                  background: "grey",
                  color: "white",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                style={{
                  width: "20%",
                  background: "red",
                  color: "white",
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
