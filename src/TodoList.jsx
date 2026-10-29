// src/TodoList.jsx
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'לימוד יומי', isDone: true },
    { id: 2, title: 'הכנת שיעורי בית', isDone: false },
    { id: 3, title: 'קניות לשבת', isDone: false },
  ]);

  // פונקציה להוספת משימה שמועברת לבן
  const handleAddTodo = (newTitle) => {
    const newTodo = {
      id: Date.now(),
      title: newTitle,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>רשימת משימות</h2>

      {/* טופס ההוספה מקבל את הפונקציה כ-prop */}
      <TodoForm onAdd={handleAddTodo} />

      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isDone={todo.isDone}
          />
        ))}
      </div>
    </div>
  );
}