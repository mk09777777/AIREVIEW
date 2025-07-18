import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, Image } from "react-native";

export default function Hammer({ onDone }) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {

      if (onDone) {
        onDone(); 
      }
    });
  }, []);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.94)", 
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.Image
        source={require("../assets/hammer.png")}
        style={{
          transform: [{ rotate: rotation }],
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
