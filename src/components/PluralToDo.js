import React, { Component } from 'react';
import { Navigator } from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';
import store from '../stores/ToDoStore';

class PluralToDo extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  onAddStarted() {
    this.navigator.push({
      name: 'taskForm'
    });
  }

  onCancel() {
    this.navigator.pop();
  }

  onAdd(task) {
    store.dispatch({
      type: 'ADD_TODO',
      task
    });

    this.navigator.pop();
  }

  onDone(todo) {
    store.dispatch({
      type: 'DONE_TODO',
      todo
    });
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
