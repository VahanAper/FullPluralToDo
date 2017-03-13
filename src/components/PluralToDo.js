import React, { Component } from 'react';
import { Navigator } from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';

class PluralToDo extends Component {
  state = {
    appIsReady: false,
    todos: [
      {
        task: 'Learn React Native',
      },
      {
        task: 'Learn Redux',
      }
    ],
  };

  onAddStarted() {
    this.navigator.push({
      name: 'taskForm'
    });
  }

  onCancel() {
    this.navigator.pop();
  }

  onAdd(task) {
    this.state.todos.push({ task });
    this.setState({ todos: this.state.todos });

    this.navigator.pop();
  }

  onDone(todo) {
    console.log('Done: ', todo.task);
    const filteredTodos = this.state.todos.filter((filterTodo) => {
      return filterTodo !== todo;
    });

    this.setState({ todos: filteredTodos });
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case 'taskForm':
        console.log(navigator);
        return (
          <TaskForm
            onDone={this.onDone.bind(this)}
            onCancel={this.onCancel.bind(this)}
            onAdd={this.onAdd.bind(this)}
          />
        );

      default:
        return (
          <TaskList
            onDone={this.onDone.bind(this)}
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos}
          />
        );
    }
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'taskList', index: 0 }}
        renderScene={this.renderScene.bind(this)}
        ref={(navigator) => {
          this.navigator = navigator;
        }}
      />
    );
  }
}

export default PluralToDo;
