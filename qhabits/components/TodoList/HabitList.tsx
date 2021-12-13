import React from 'react'
import {Text, View} from 'react-native'
import {UserHabitsCompletionsQueryHookResult, UserHabitsCompletionsQueryResult} from '../../src/generated/graphql'

interface HabitListProps {
  data: UserHabitsCompletionsQueryHookResult
}

export default function HabitList(props: HabitListProps) {

  return <View>{ props.data.data?.
  return <Text>Hello world</Text>
}

