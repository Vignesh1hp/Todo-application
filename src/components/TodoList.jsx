import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos,selectedTab } = props;
  const fileterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((todo) => todo.complete)
      : todos.filter((todo) => !todo.complete);
  return (
    <>
      {fileterTodosList.map((todo, todoIndex) => {
        const tempTodoIndex = todos.findIndex(val => val.input == todo.input)
        return <TodoCard key={todoIndex} todoIndex={tempTodoIndex} {...props} todo={todo} />;
      })}
    </>
  );
};

export default TodoList;
