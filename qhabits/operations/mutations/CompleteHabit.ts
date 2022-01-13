import { gql } from "@apollo/client";

export const COMPLETE_HABIT = gql`
  mutation CompleteHabit($habit_id: bigint!) {
    insert_completions_one(
      object: {
        habit_id:$habit_id
      }
    ) {
      id
      habit_id
      created_at
    }
  }
`;

