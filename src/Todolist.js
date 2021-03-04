import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { IoMdAdd, FaSkullCrossbones, GrAdd } from "react-icons/all";
import "./App.css";



const TodoForm = ({ addItem }) => {
  const [val, setVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!val) {return;}
    addItem(val);
    setVal("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label className=""><b><i>Add To List</i></b></Form.Label>
        <Form.Control
          type="text"
          placeholder="Add Task..."
          className="input"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button variant="secondary mb-3" type="submit">
        <GrAdd />
      </Button>
    </Form>
  );
};
const Todo = ({ todo, index, remove, mark }) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={()=>(mark(index))}>
          <IoMdAdd />
        </Button>{" "}
        <Button variant="outline-danger" onClick={()=>(remove(index))}>
          <FaSkullCrossbones />
        </Button>
      </div>
    </div>
  );
};





const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "Sample Text",
      isDone: "Pending...",
    },
  ]);
  const addItem = (text) => {
    const newlist = [...todos, { text }];
    setTodos(newlist);
  };
  const remove = (index) => {
    const newlist = [...todos];
    newlist.splice(index, 1);
    setTodos(newlist);
  };
  const mark = (index) => {
    const newlist = [...todos];
    newlist[index].isDone = true;
    setTodos(newlist);
  };
 

  return (
    <>
      <div className="app">
        <h1 className="text-center mt-5 md-5 text-uppercase">Todo List</h1>
        <Container>
          <TodoForm addItem={addItem} />
          <div>
            {todos.map((todo, index)  => (
              <Card className="border border-dark alert-success text-dark">
                <Card.Body>
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    remove={remove}
                    mark={mark}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default TodoList;
