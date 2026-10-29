// src/TodoItem.jsx

export default function TodoItem({ id, title, isDone }) {
  const getBackgroundColor = (status) => {
    return status ? '#d4edda' : '#fff3cd';
  };

  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(isDone),
        padding: '10px',
        margin: '8px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
      }}
    >
      <span>{title}</span>
    </div>
  );
}