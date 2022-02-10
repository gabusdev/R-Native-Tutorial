import { FunctionComponent, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  View,
} from "react-native";

interface TodoItemProps {
  item: { text: string; key: any };
  handler: Function;
}

const TodoItem: FunctionComponent<TodoItemProps> = ({ item, handler }) => {
  return (
    <TouchableOpacity onPress={() => handler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});

export default TodoItem;
