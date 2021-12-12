import React from "react";
import { useQuery } from "@apollo/client";
import { Text } from "react-native";
import { GET_USER_HABITS_COMPLETIONS } from "../../operations/queries/habits";

export interface HabitsIndexProps {}

export default function HabitsIndex(props: HabitsIndexProps) {
  const { loading, data, error } = useQuery(GET_USER_HABITS_COMPLETIONS);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error.message}</Text>;
  return <Text>{JSON.stringify(data, null, 2)}</Text>;
}
