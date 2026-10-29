
export default function TodoList() {
  const initialTodos = [
    { id: 1, title: 'לימוד יומי', isDone: true },
    { id: 2, title: 'הכנת שיעורי בית', isDone: false },
    { id: 3, title: 'קניות לשבת', isDone: false },
  ];

  return (
    <div>
      <h2>רשימת משימות</h2>
      <ul>
        {initialTodos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}