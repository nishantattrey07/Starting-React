import PropTypes from 'prop-types';

export function Todos({ todos }) {
  if (!todos) {
    return <div>Loading...</div>; // or some other loading indicator
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <button>
            {todo.completed ? "Completed" : "Mark as complete"}
          </button>
        </div>
      ))}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};
