import React from "react";
import { Text, View } from "react-native";
import { useHabitsCompletionsQuery } from "../../src/generated/graphql";
export interface HabitsIndexProps {}

export default function HabitsIndex(props: HabitsIndexProps) {
  const { loading, data, error } = useHabitsCompletionsQuery();
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error.message}</Text>;
  return (
    <View>
      {data?.habits?.map(habit => (
        <View>
          <Text>{habit.title}</Text>
        </View>
      ))}
    </View>
  );
}
