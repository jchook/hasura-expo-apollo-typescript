import { gql } from "@apollo/client";

export const GET_USER_HABITS_COMPLETIONS = gql`
  query UserHabitsCompletions($since: timestamptz = "2021-11-17") {
    users_by_pk(id: "1") {
      habits(limit: 50, offset: 0) {
        id
        target
        title
        completions(limit: 20, where: { created_at: { _gte: $since } }) {
          id
          created_at
        }
      }
    }
  }
`;
