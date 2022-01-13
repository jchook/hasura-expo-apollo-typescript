import React from "react";
import {
  Text,
  View,
} from "react-native";
import HabitListItem from "../../component/HabitListItem";
import {
  useCompleteHabitMutation,
  useHabitsCompletionsQuery,
} from "../../src/generated/graphql";
export interface HabitsIndexProps {}

export default function HabitsIndex(props: HabitsIndexProps) {
  const { loading, data, error } = useHabitsCompletionsQuery();
  const [completeHabit, {}] = useCompleteHabitMutation({
    update(cache, result) {
      cache.modify({
        fields: {
        },
      })
    },
  });
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error.message}</Text>;
  return (
    <View>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      {data?.habits?.map((habit) => (
        <HabitListItem
          key={`habit-list-item-${habit.id}`}
          habit={habit}
          onComplete={() =>
            completeHabit({
              variables: { habit_id: habit.id },
            })
          }
        />
      ))}
    </View>
  );
}
