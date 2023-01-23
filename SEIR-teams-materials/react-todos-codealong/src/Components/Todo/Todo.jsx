export default function Todo({todo, idx, handleUpdate, handleDelete}) {
    // here comes the logic

    function toggleTodo() {
        const todoCopy = {...todo};
        todoCopy.completed = !todoCopy.completed;
        handleUpdate(todoCopy, idx);
    }

    // here comes the HTML like stuff
    return (
        <tr style={{color: todo.completed ? 'green' : 'red'}}>
            <td>{todo.todo}</td>
            <td onClick={toggleTodo}>{todo.completed ? 'yes' : 'no'}</td>
            <td><button onClick={() => handleDelete(todo)}>X</button></td>
        </tr>
    )
}