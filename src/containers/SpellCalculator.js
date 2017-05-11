import { connect } from 'react-redux'
import { updateParameter, updateDiff } from '../actions';
import SpellParameters from '../components/SpellParameters';

const mapStateToProps = (state) => {
  return state.spellLab;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onParamChange: (param) => (event, index, value) => {
      dispatch(updateParameter(param, value))
    },
    onDiffChange: (param, value) => (event) => {
      dispatch(updateDiff(param, event.target.value))
    }
  }
}

const SpellCalculator = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellParameters)

export default SpellCalculator;

/*
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
*/
