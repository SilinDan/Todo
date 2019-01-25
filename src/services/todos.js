import axios from 'axios';

export function fetchTodoList() {
    return axios.get('http://localhost:8888/TODO/api/listTodo.php');
}

export function addTodo(content) {
    var params = new URLSearchParams();
    params.append('name', content);

    return axios(
        {
            method: 'POST',
            url: 'http://localhost:8888/TODO/api/addTodo.php',
            data: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }

    );
}

export function deleteTodo(id) {
    return axios({
        method: 'POST',
        url: 'http://localhost:8888/TODO/api/deleteTodo.php',
        data: 'id=' + id
    })
}

export function editTodo(id, completed, content) {
    var params = new URLSearchParams();

    params.append('id', id);
    params.append('state', completed);
    params.append('name', content);

    return axios(
        {
            method: 'POST',
            url: 'http://localhost:8888/TODO/api/editTodo.php',
            data: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            }
        }

    );
}