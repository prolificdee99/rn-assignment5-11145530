import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Home from "./Home";
import Settings from "./Settings";
import Statistics from "./Statistics";
import MyCards from "./Mycards";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Statistics" component={Statistics} />
        <Tab.Screen name="My Cards" component={MyCards} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 30,
    justifyContent: "space-evenly",
  },
});
