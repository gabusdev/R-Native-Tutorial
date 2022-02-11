import { FunctionComponent, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface TodoItemProps {
  item: { text: string; key: any };
  handler: Function;
}

const TodoItem: FunctionComponent<TodoItemProps> = ({ item, handler }) => {
  return (
    <TouchableOpacity onPress={() => handler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color='#333' />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemText: {
    marginLeft: 10,
  },
});

export default TodoItem;
