import { FunctionComponent, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  View,
} from "react-native";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    // paddingTop: 25,
    justifyContent: "center",
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Header;
