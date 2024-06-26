import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyCards = ({ navigation }) => {
  return (
    <View style={styles.Stats}>
      <Text>My Cards</Text>
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

export default MyCards;
