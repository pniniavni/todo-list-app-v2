// src/TodoItem.jsx

export default function TodoItem({ id, title, isDone, onComplete }) {
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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {title}
      </span>

      {/* רינדור מותנה: הכפתור יוצג רק אם המשימה טרם בוצעה */}
      {!isDone && (
        <button onClick={() => onComplete(id)} style={{ padding: '4px 8px' }}>
          המשימה בוצעה
        </button>
      )}
    </div>
  );
}