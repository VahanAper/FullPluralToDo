import React from 'react';
import {
  Text,
  Image,
  TouchableHighlight,
  Animated,
  StyleSheet
} from 'react-native';

import doneImage from '../../../images/done.png';

export default function render(baseStyle) {
  const doneAnimation = new Animated.ValueXY();
  const localStyle = StyleSheet.create({
    doneButton: {
      borderRadius: 5,
      padding: 5
    },
    row: {
      transform: doneAnimation.getTranslateTransform()
    }
  });

  function animatedPress() {
    Animated.spring(doneAnimation, {
      tension: 2,
      friction: 3,
      toValue: {
        x: -500,
        y: 0
      }
    })
    .start();

    setTimeout(() => {
      this.onDonePressed();
    }, 1000);
  }

  return (
    <Animated.View style={[baseStyle.container, localStyle.row]}>
      <Text style={baseStyle.label}>
        {this.props.todo.task}
      </Text>

      <TouchableHighlight
        underlayColor="#DDDDDD"
        onPress={animatedPress.bind(this)}
        style={localStyle.doneButton}
      >
        <Image source={doneImage} />
      </TouchableHighlight>
    </Animated.View>
  );
}
