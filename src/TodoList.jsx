// src/TodoList.jsx
import TodoItem from './TodoItem';

export default function TodoList() {
  const initialTodos = [
    { id: 1, title: 'לימוד יומי', isDone: true },
    { id: 2, title: 'הכנת שיעורי בית', isDone: false },
    { id: 3, title: 'קניות לשבת', isDone: false },
  ];

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>רשימת משימות</h2>
      <div>
        {initialTodos.map((todo) => (
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