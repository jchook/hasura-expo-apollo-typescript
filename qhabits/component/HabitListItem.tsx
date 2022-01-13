import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Habit } from "../type-references";

export interface HabitListItemProps {
  onComplete: () => any;
  habit: Habit;
}

export default function HabitListItem(props: HabitListItemProps) {
  const { habit, onComplete } = props;
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <TouchableHighlight onPress={onComplete}>
          <View style={styles.checkbox}></View>
        </TouchableHighlight>
      </View>
      <View>
        <Text>{habit.title}</Text>
      </View>
      <View>
        <Text>
          {habit.completions.length}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkboxContainer: {
    marginRight: 10,
  },
  checkbox: {
    height: 10,
    width: 10,
    backgroundColor: 'red',
  }
})
