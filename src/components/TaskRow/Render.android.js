import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import doneImage from '../../../images/done.png';

const localStyle = StyleSheet.create({
  doneButton: {
    borderRadius: 5,
    padding: 5
  }
});

export default function render(baseStyle) {
  return (
    <View style={baseStyle.container}>
      <Text style={baseStyle.label}>
        {this.props.todo.task}
      </Text>

      <TouchableHighlight
        underlayColor="#DDDDDD"
        onPress={this.onDonePressed.bind(this)}
        style={localStyle.doneButton}
      >
        <Image source={doneImage} />
      </TouchableHighlight>
    </View>
  );
}
