import React, { useEffect, useState } from 'react';


import {
  StyleSheet,
  View,
  Easing,
  Animated,
  LogBox
} from 'react-native';


const AnimatedCircle = (props) => {

  let rotateValue = new Animated.Value(0)

  useEffect(() => {
    rotate()
  }, [])

  const rotate = () => {
    rotateValue.setValue(0)
    Animated.timing(
      rotateValue,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      }
    ).start(() => rotate())
  }

  const valuesToRotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  })

  return (<View>
    <Animated.View
      style={{
        ...styles.circleShadow,

      }}>
    </Animated.View>

    <Animated.View style={{
      ...styles.rectangle,

      zIndex: 0,
      transform: [{ rotate: valuesToRotate }]
    }}>
      <Animated.View
        style={{
          ...styles.halfCircle,


        }}>
      </Animated.View>
    </Animated.View>

    <View style={{
      ...styles.rectangle,

      zIndex: 0
    }}>
      <Animated.View
        style={{
          ...styles.halfCircle,
          // transform: [{ rotate: valuesToRotate }]

        }}>
      </Animated.View>
    </View>

    <View style={styles.middleCircle}>
    </View>

  </View>
  );
};

const styles = StyleSheet.create({

  circleShadow: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "rgba(32, 161, 202, 0.1)",

  },
  halfCircle: {
    width: 190,
    height: 190,
    backgroundColor: "#bb64c8",
    borderRadius: 95,
  },
  rectangle: {
    position: "absolute",
    width: 95,
    height: 190,
    overflow: "hidden",

  },
  middleCircle: {
    position: "absolute",
    width: 164,
    height: 164,
    borderRadius: 82,
    top: 13,
    left: 13,
    backgroundColor: "black",

  },
});

export default AnimatedCircle;

