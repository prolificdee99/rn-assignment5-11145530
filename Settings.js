import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.SettingsContainer}>
      <View style={styles.main1}>
        <View style={styles.one}>
          <Text style={styles.Text}>Language</Text>
          <View style={styles.iconBox}>
            <AntDesign name="right" size={14} color="black" />
          </View>
        </View>
        <View style={styles.one}>
          <Text style={styles.Text}>My Profile</Text>
          <View style={styles.iconBox}>
            <AntDesign name="right" size={14} color="black" />
          </View>
        </View>
        <View style={styles.one}>
          <Text style={styles.Text}>Contact Us</Text>
          <View style={styles.iconBox}>
            <AntDesign name="right" size={14} color="black" />
          </View>
        </View>
        <View style={styles.one}>
          <Text style={styles.Text}>Change Password</Text>
          <View style={styles.iconBox}>
            <AntDesign name="right" size={14} color="black" />
          </View>
        </View>
        <View style={styles.one}>
          <Text style={styles.Text}>Privacy Policy</Text>
          <View style={styles.iconBox}>
            <AntDesign name="right" size={14} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.main2}>
        <View style={styles.two}>
          <Text style={styles.Text}>Theme</Text>
          <View style={styles.themeBox}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SettingsContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  main1: {
    width: 340,
    height: 260,

    alignItems: "center",
    justifyContent: "space-evenly",
  },
  main2: {
    width: 340,
    height: 320,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  one: {
    width: 330,
    height: 40,

    borderBottomWidth: 0.3,
    borderColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBox: {
    width: 60,
    height: 34,

    alignItems: "center",
    justifyContent: "center",
  },
  themeBox: {
    width: 100,
    height: 34,
    borderWidth: 1,
    borderColor: "black",
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    marginLeft: 10,
    fontSize: 13,
    fontWeight: "500",
  },
  two: {
    width: 330,
    height: 40,

    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default Settings;
