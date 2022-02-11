import { FunctionComponent } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

interface SandBoxProps {}

const SandBox: FunctionComponent<SandBoxProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: "column", // column is the default
    justifyContent: "space-between", // for the main axis
    alignItems: "center", // for the cross axis
    // paddingTop: 40,
    backgroundColor: "#333",
  },
  boxOne: {
    flex: 0.1,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "gold",
    padding: 20,
  },
  boxThree: {
    // flex: 1,
    backgroundColor: "coral",
    padding: 30,
  },
  boxFour: {
    // flex: 1,
    backgroundColor: "skyblue",
    padding: 40,
  },
});

export default SandBox;
