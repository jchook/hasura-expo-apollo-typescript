import { HabitsCompletionsQueryHookResult } from "./src/generated/graphql";

export type HabitsCompletionsQueryResultData =
  HabitsCompletionsQueryHookResult["data"];

export type Habits = Exclude<
  HabitsCompletionsQueryResultData,
  undefined
>["habits"];

export type Habit = Habits[0];
