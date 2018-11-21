const initialState = {
  data:null
};
const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const p = Object.assign({},state,{ data: "p" });
      return p;
      case 'RECEIVE_DATA':
        return Object.assign({}, state, { result: action.data})
    default:
      return state;
  }
}
  export default todos;