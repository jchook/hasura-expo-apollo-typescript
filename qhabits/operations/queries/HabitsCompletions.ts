import { gql } from "@apollo/client";

export const GET_HABITS_COMPLETIONS = gql`
  query HabitsCompletions($since: timestamptz = "2021-11-17") {
    habits(limit: 50, offset: 0) {
      id
      user_id
      target
      title
      completions(limit: 20, where: { created_at: { _gte: $since } }) {
        id
        habit_id
        created_at
      }
    }
  }
`;
