import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;
  const tab = "All";
  const fileterTodosList =
    tab === "All"
      ? todos
      : tab === "Complete"
      ? todos.filter((todo) => todo.complete)
      : todos.filter((todo) => !todo.complete);
  return (
    <>
      {fileterTodosList.map((todo, index) => {
        return <TodoCard key={index} todo={todo} />;
      })}
    </>
  );
};

export default TodoList;
