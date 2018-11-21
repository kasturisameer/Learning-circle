let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const receiveData = json =>({
  type:'RECEIVE_DATA',
  data: json
})

export const fetchData = apiUrl =>({
  type: 'FETCH_DATA',
  config:{
    apiUrl,
    method: 'GET',
    success: json => receiveData(json)
  }
})


