import React from 'react';
import { addTodo } from '../actions/index.js';
import { connect } from 'react-redux';
import PageBar from './PageBar.jsx';
import Widgets from './Widgets.jsx';
class HomePage extends React.Component {
    render(){
        return(
            <div>
                <PageBar/>
                <Widgets/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state);
    return{
        todos: state.data,
        widgets: [{},{}]// state.widgets
    }
}
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(addTodo(id))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)