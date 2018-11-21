import React from 'react';
import { fetchData } from '../actions/index.js'
import { connect } from 'react-redux';
class Widgets extends React.Component {
    constructor(props) {
        super(props);
        this.onBtnClick = this.onBtnClick.bind(this);
    }
    onBtnClick(){
        this.props.getData();
    }
    render(){
        return(
                <div className="col-xs-12 col-sm-6">
                    <div className="widget">
                        <button className="btn btn-primary" onClick={this.onBtnClick}>Button</button>
                        <p>click button to get data from Middleware</p>
                        <ul>
                            <li>{this.props.result.userId}</li>
                            <li>{this.props.result.title}</li>
                        </ul>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return{
        todos: state.data,
        result: state.todos.result ? state.todos.result : 'no data found'
    }
}
const mapDispatchToProps = dispatch => ({
    getData: () => {
        console.log("getdataCalled");
        dispatch(fetchData('https://jsonplaceholder.typicode.com/todos/1'))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Widgets)