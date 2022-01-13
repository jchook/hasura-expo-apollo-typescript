import React from "react";
import { GestureResponderEvent, Text, TouchableHighlight, View } from "react-native";
import { useHabitsCompletionsQuery } from "../../src/generated/graphql";
export interface HabitsIndexProps {}

export default function HabitsIndex(props: HabitsIndexProps) {
  const onComplete = (event: GestureResponderEvent) => {
    // Mutation
  }
  return (
    <View>
      {data?.habits?.map(habit => (
        <View>
          <View>
            <TouchableHighlight onPress={onComplete} />
          </View>
          <View><Text>{habit.title}</Text></View>
        </View>
      ))}
    </View>
  );
}

