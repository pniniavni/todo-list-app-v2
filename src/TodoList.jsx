// src/TodoList.jsx
import { useState } from 'react';
import TodoItem from './TodoItem';

export default function TodoList() {
  // שמירת רשימת המשימות בסטייט
  const [todos, setTodos] = useState([
    { id: 1, title: 'לימוד יומי', isDone: true },
    { id: 2, title: 'הכנת שיעורי בית', isDone: false },
    { id: 3, title: 'קניות לשבת', isDone: false },
  ]);

  // סטייט עבור הטקסט שבתיבת הקלט
  const [taskInput, setTaskInput] = useState('');

  const handleAddTodo = () => {
    // בדיקה שהקלט אינו ריק
    if (taskInput.trim() === '') {
      return;
    }

    // יצירת אובייקט משימה חדש
    const newTodo = {
      id: Date.now(),
      title: taskInput,
      isDone: false,
    };

    // הוספה למערך תוך שמירה על עקרון אי-השתנות
    setTodos([...todos, newTodo]);

    // ריקון תיבת הקלט
    setTaskInput('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>רשימת משימות</h2>

      {/* טופס קלט פנימי */}
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="הקלד משימה חדשה..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={{ padding: '6px', width: '220px', marginLeft: '6px' }}
        />
        <button onClick={handleAddTodo} style={{ padding: '6px 12px' }}>
          אישור
        </button>
      </div>

      {/* הצגת המשימות */}
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