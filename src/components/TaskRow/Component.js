import { Component, PropTypes } from 'react';
import {
  StyleSheet
} from 'react-native';

import Render from './Render'; //eslint-disable-line

class TaskRow extends Component {
  onDonePressed() {
    this.props.onDone(this.props.todo);
  }

  render() {
    return (
      Render.bind(this)(styles)
    );
  }

}

TaskRow.propTypes = {
  onDone: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  label: {
    fontSize: 20,
    fontWeight: '300'
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5
  }
});

export default TaskRow;
