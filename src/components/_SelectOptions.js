import React from 'react';
import PropTypes from 'proptypes';
import MenuItem from 'material-ui/MenuItem';

const SelectOptions = ({ items }) => (
  <div>
  {items.map(item =>
    <MenuItem
      key={item.value}
      value={item.value}
      primaryText={item.value}
    />
  )}
  </div>
)

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default SelectOptions;

/*
returnEffectItems (data, school = "") {
  return school !== "" ? this.returnItems(data.get(school).children, true) : this.returnItems(data, false);
}

// Create Array of MenuItems for SelectFields
returnItems (data, shallow = false) {
  let items = [];
  let groupingStyles = { fontWeight: "bold", };
  let childStyles = { paddingLeft: "2px", };

  data.forEach(function(value, key, map) {
    // Check if returned value from map is an object with child entries.
    if (value === Object(value) && shallow === false && value.hasOwnProperty('children')) {
      let parent = key;

      items.push(<MenuItem key={key} style={groupingStyles} value={key} primaryText={key} />);
      value.children.forEach(function(value, key, map) {
        items.push(<MenuItem key={parent + '/' + key} style={childStyles} value={parent + '/' + key} primaryText={'-- ' + key} label={key} />);
      });
    }

    else {
      items.push(<MenuItem key={key} value={key} primaryText={key} />);
    }
  });

  return items;
}
*/
