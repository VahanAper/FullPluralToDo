import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Swipeout from 'react-native-swipe-out';

const localStyle = StyleSheet.create({
  row: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  container: {
    marginBottom: 20
  }
});

export default function render(baseStyle) {
  const buttons = [
    {
      text: 'Done',
      backgroundColor: '#05A5D1',
      underlayColor: '#273539',
      onPress: this.onDonePressed.bind(this)
    }
  ];
  return (
    <View style={localStyle.container}>
      <Swipeout
        backgroundColor="#F7F7F7"
        right={buttons}
      >
        <View style={[baseStyle.container, localStyle.row]}>
          <Text style={baseStyle.label}>
            {this.props.todo.task}
          </Text>
        </View>
      </Swipeout>
    </View>
  );
}
