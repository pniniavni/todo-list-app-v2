// src/TodoForm.jsx
import { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // מניעת רענון דף

    if (inputValue.trim() === '') {
      return;
    }

    // קריאה לפונקציה שהועברה מהאבא
    onAdd(inputValue);

    // איפוס שדה הקלט
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '15px' }}>
      <input
        type="text"
        placeholder="הזן משימה חדשה..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: '6px', width: '220px', marginLeft: '6px' }}
      />
      <button type="submit" style={{ padding: '6px 12px' }}>
        אישור
      </button>
    </form>
  );
}