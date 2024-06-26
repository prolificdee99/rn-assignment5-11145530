import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Statistics = ({ navigation }) => {
  return (
    <View style={styles.Stats}>
      <Text>Statistics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Stats: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 60,
  },
});

export default Statistics;
