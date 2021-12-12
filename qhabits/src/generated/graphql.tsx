import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  numeric: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "completions" */
export type Completions = {
  __typename?: 'completions';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  habit: Habits;
  habit_id: Scalars['bigint'];
  id: Scalars['bigint'];
};

/** aggregated selection of "completions" */
export type Completions_Aggregate = {
  __typename?: 'completions_aggregate';
  aggregate?: Maybe<Completions_Aggregate_Fields>;
  nodes: Array<Completions>;
};

/** aggregate fields of "completions" */
export type Completions_Aggregate_Fields = {
  __typename?: 'completions_aggregate_fields';
  avg?: Maybe<Completions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Completions_Max_Fields>;
  min?: Maybe<Completions_Min_Fields>;
  stddev?: Maybe<Completions_Stddev_Fields>;
  stddev_pop?: Maybe<Completions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Completions_Stddev_Samp_Fields>;
  sum?: Maybe<Completions_Sum_Fields>;
  var_pop?: Maybe<Completions_Var_Pop_Fields>;
  var_samp?: Maybe<Completions_Var_Samp_Fields>;
  variance?: Maybe<Completions_Variance_Fields>;
};


/** aggregate fields of "completions" */
export type Completions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Completions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "completions" */
export type Completions_Aggregate_Order_By = {
  avg?: InputMaybe<Completions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Completions_Max_Order_By>;
  min?: InputMaybe<Completions_Min_Order_By>;
  stddev?: InputMaybe<Completions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Completions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Completions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Completions_Sum_Order_By>;
  var_pop?: InputMaybe<Completions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Completions_Var_Samp_Order_By>;
  variance?: InputMaybe<Completions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "completions" */
export type Completions_Arr_Rel_Insert_Input = {
  data: Array<Completions_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Completions_On_Conflict>;
};

/** aggregate avg on columns */
export type Completions_Avg_Fields = {
  __typename?: 'completions_avg_fields';
  habit_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "completions" */
export type Completions_Avg_Order_By = {
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "completions". All fields are combined with a logical 'AND'. */
export type Completions_Bool_Exp = {
  _and?: InputMaybe<Array<Completions_Bool_Exp>>;
  _not?: InputMaybe<Completions_Bool_Exp>;
  _or?: InputMaybe<Array<Completions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  habit?: InputMaybe<Habits_Bool_Exp>;
  habit_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "completions" */
export enum Completions_Constraint {
  /** unique or primary key constraint */
  CompletionsPkey = 'completions_pkey'
}

/** input type for incrementing numeric columns in table "completions" */
export type Completions_Inc_Input = {
  habit_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "completions" */
export type Completions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  habit?: InputMaybe<Habits_Obj_Rel_Insert_Input>;
  habit_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Completions_Max_Fields = {
  __typename?: 'completions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  habit_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "completions" */
export type Completions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Completions_Min_Fields = {
  __typename?: 'completions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  habit_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "completions" */
export type Completions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "completions" */
export type Completions_Mutation_Response = {
  __typename?: 'completions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Completions>;
};

/** on conflict condition type for table "completions" */
export type Completions_On_Conflict = {
  constraint: Completions_Constraint;
  update_columns?: Array<Completions_Update_Column>;
  where?: InputMaybe<Completions_Bool_Exp>;
};

/** Ordering options when selecting data from "completions". */
export type Completions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  habit?: InputMaybe<Habits_Order_By>;
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: completions */
export type Completions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "completions" */
export enum Completions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HabitId = 'habit_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "completions" */
export type Completions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  habit_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Completions_Stddev_Fields = {
  __typename?: 'completions_stddev_fields';
  habit_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "completions" */
export type Completions_Stddev_Order_By = {
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Completions_Stddev_Pop_Fields = {
  __typename?: 'completions_stddev_pop_fields';
  habit_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "completions" */
export type Completions_Stddev_Pop_Order_By = {
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Completions_Stddev_Samp_Fields = {
  __typename?: 'completions_stddev_samp_fields';
  habit_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "completions" */
export type Completions_Stddev_Samp_Order_By = {
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Completions_Sum_Fields = {
  __typename?: 'completions_sum_fields';
  habit_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "completions" */
export type Completions_Sum_Order_By = {
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "completions" */
export enum Completions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HabitId = 'habit_id',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Completions_Var_Pop_Fields = {
  __typename?: 'completions_var_pop_fields';
  habit_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "completions" */
export type Completions_Var_Pop_Order_By = {
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Completions_Var_Samp_Fields = {
  __typename?: 'completions_var_samp_fields';
  habit_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "completions" */
export type Completions_Var_Samp_Order_By = {
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Completions_Variance_Fields = {
  __typename?: 'completions_variance_fields';
  habit_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "completions" */
export type Completions_Variance_Order_By = {
  habit_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "habits" */
export type Habits = {
  __typename?: 'habits';
  /** An array relationship */
  completions: Array<Completions>;
  /** An aggregate relationship */
  completions_aggregate: Completions_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  target: Scalars['numeric'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint'];
};


/** columns and relationships of "habits" */
export type HabitsCompletionsArgs = {
  distinct_on?: InputMaybe<Array<Completions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Completions_Order_By>>;
  where?: InputMaybe<Completions_Bool_Exp>;
};


/** columns and relationships of "habits" */
export type HabitsCompletions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Completions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Completions_Order_By>>;
  where?: InputMaybe<Completions_Bool_Exp>;
};

/** aggregated selection of "habits" */
export type Habits_Aggregate = {
  __typename?: 'habits_aggregate';
  aggregate?: Maybe<Habits_Aggregate_Fields>;
  nodes: Array<Habits>;
};

/** aggregate fields of "habits" */
export type Habits_Aggregate_Fields = {
  __typename?: 'habits_aggregate_fields';
  avg?: Maybe<Habits_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Habits_Max_Fields>;
  min?: Maybe<Habits_Min_Fields>;
  stddev?: Maybe<Habits_Stddev_Fields>;
  stddev_pop?: Maybe<Habits_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Habits_Stddev_Samp_Fields>;
  sum?: Maybe<Habits_Sum_Fields>;
  var_pop?: Maybe<Habits_Var_Pop_Fields>;
  var_samp?: Maybe<Habits_Var_Samp_Fields>;
  variance?: Maybe<Habits_Variance_Fields>;
};


/** aggregate fields of "habits" */
export type Habits_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Habits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "habits" */
export type Habits_Aggregate_Order_By = {
  avg?: InputMaybe<Habits_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Habits_Max_Order_By>;
  min?: InputMaybe<Habits_Min_Order_By>;
  stddev?: InputMaybe<Habits_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Habits_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Habits_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Habits_Sum_Order_By>;
  var_pop?: InputMaybe<Habits_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Habits_Var_Samp_Order_By>;
  variance?: InputMaybe<Habits_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "habits" */
export type Habits_Arr_Rel_Insert_Input = {
  data: Array<Habits_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Habits_On_Conflict>;
};

/** aggregate avg on columns */
export type Habits_Avg_Fields = {
  __typename?: 'habits_avg_fields';
  id?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "habits" */
export type Habits_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "habits". All fields are combined with a logical 'AND'. */
export type Habits_Bool_Exp = {
  _and?: InputMaybe<Array<Habits_Bool_Exp>>;
  _not?: InputMaybe<Habits_Bool_Exp>;
  _or?: InputMaybe<Array<Habits_Bool_Exp>>;
  completions?: InputMaybe<Completions_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  target?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "habits" */
export enum Habits_Constraint {
  /** unique or primary key constraint */
  HabitsPkey = 'habits_pkey'
}

/** input type for incrementing numeric columns in table "habits" */
export type Habits_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  target?: InputMaybe<Scalars['numeric']>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "habits" */
export type Habits_Insert_Input = {
  completions?: InputMaybe<Completions_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  target?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Habits_Max_Fields = {
  __typename?: 'habits_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  target?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "habits" */
export type Habits_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Habits_Min_Fields = {
  __typename?: 'habits_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  target?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "habits" */
export type Habits_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "habits" */
export type Habits_Mutation_Response = {
  __typename?: 'habits_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Habits>;
};

/** input type for inserting object relation for remote table "habits" */
export type Habits_Obj_Rel_Insert_Input = {
  data: Habits_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Habits_On_Conflict>;
};

/** on conflict condition type for table "habits" */
export type Habits_On_Conflict = {
  constraint: Habits_Constraint;
  update_columns?: Array<Habits_Update_Column>;
  where?: InputMaybe<Habits_Bool_Exp>;
};

/** Ordering options when selecting data from "habits". */
export type Habits_Order_By = {
  completions_aggregate?: InputMaybe<Completions_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: habits */
export type Habits_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "habits" */
export enum Habits_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Target = 'target',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "habits" */
export type Habits_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  target?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Habits_Stddev_Fields = {
  __typename?: 'habits_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "habits" */
export type Habits_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Habits_Stddev_Pop_Fields = {
  __typename?: 'habits_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "habits" */
export type Habits_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Habits_Stddev_Samp_Fields = {
  __typename?: 'habits_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "habits" */
export type Habits_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Habits_Sum_Fields = {
  __typename?: 'habits_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  target?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "habits" */
export type Habits_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "habits" */
export enum Habits_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Target = 'target',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Habits_Var_Pop_Fields = {
  __typename?: 'habits_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "habits" */
export type Habits_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Habits_Var_Samp_Fields = {
  __typename?: 'habits_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "habits" */
export type Habits_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Habits_Variance_Fields = {
  __typename?: 'habits_variance_fields';
  id?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "habits" */
export type Habits_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  target?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "completions" */
  delete_completions?: Maybe<Completions_Mutation_Response>;
  /** delete single row from the table: "completions" */
  delete_completions_by_pk?: Maybe<Completions>;
  /** delete data from the table: "habits" */
  delete_habits?: Maybe<Habits_Mutation_Response>;
  /** delete single row from the table: "habits" */
  delete_habits_by_pk?: Maybe<Habits>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "completions" */
  insert_completions?: Maybe<Completions_Mutation_Response>;
  /** insert a single row into the table: "completions" */
  insert_completions_one?: Maybe<Completions>;
  /** insert data into the table: "habits" */
  insert_habits?: Maybe<Habits_Mutation_Response>;
  /** insert a single row into the table: "habits" */
  insert_habits_one?: Maybe<Habits>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "completions" */
  update_completions?: Maybe<Completions_Mutation_Response>;
  /** update single row of the table: "completions" */
  update_completions_by_pk?: Maybe<Completions>;
  /** update data of the table: "habits" */
  update_habits?: Maybe<Habits_Mutation_Response>;
  /** update single row of the table: "habits" */
  update_habits_by_pk?: Maybe<Habits>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_CompletionsArgs = {
  where: Completions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Completions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_HabitsArgs = {
  where: Habits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Habits_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_CompletionsArgs = {
  objects: Array<Completions_Insert_Input>;
  on_conflict?: InputMaybe<Completions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Completions_OneArgs = {
  object: Completions_Insert_Input;
  on_conflict?: InputMaybe<Completions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HabitsArgs = {
  objects: Array<Habits_Insert_Input>;
  on_conflict?: InputMaybe<Habits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Habits_OneArgs = {
  object: Habits_Insert_Input;
  on_conflict?: InputMaybe<Habits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CompletionsArgs = {
  _inc?: InputMaybe<Completions_Inc_Input>;
  _set?: InputMaybe<Completions_Set_Input>;
  where: Completions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Completions_By_PkArgs = {
  _inc?: InputMaybe<Completions_Inc_Input>;
  _set?: InputMaybe<Completions_Set_Input>;
  pk_columns: Completions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HabitsArgs = {
  _inc?: InputMaybe<Habits_Inc_Input>;
  _set?: InputMaybe<Habits_Set_Input>;
  where: Habits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Habits_By_PkArgs = {
  _inc?: InputMaybe<Habits_Inc_Input>;
  _set?: InputMaybe<Habits_Set_Input>;
  pk_columns: Habits_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  completions: Array<Completions>;
  /** An aggregate relationship */
  completions_aggregate: Completions_Aggregate;
  /** fetch data from the table: "completions" using primary key columns */
  completions_by_pk?: Maybe<Completions>;
  /** fetch data from the table: "habits" */
  habits: Array<Habits>;
  /** An aggregate relationship */
  habits_aggregate: Habits_Aggregate;
  /** fetch data from the table: "habits" using primary key columns */
  habits_by_pk?: Maybe<Habits>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCompletionsArgs = {
  distinct_on?: InputMaybe<Array<Completions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Completions_Order_By>>;
  where?: InputMaybe<Completions_Bool_Exp>;
};


export type Query_RootCompletions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Completions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Completions_Order_By>>;
  where?: InputMaybe<Completions_Bool_Exp>;
};


export type Query_RootCompletions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootHabitsArgs = {
  distinct_on?: InputMaybe<Array<Habits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habits_Order_By>>;
  where?: InputMaybe<Habits_Bool_Exp>;
};


export type Query_RootHabits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habits_Order_By>>;
  where?: InputMaybe<Habits_Bool_Exp>;
};


export type Query_RootHabits_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['bigint'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  completions: Array<Completions>;
  /** An aggregate relationship */
  completions_aggregate: Completions_Aggregate;
  /** fetch data from the table: "completions" using primary key columns */
  completions_by_pk?: Maybe<Completions>;
  /** fetch data from the table: "habits" */
  habits: Array<Habits>;
  /** An aggregate relationship */
  habits_aggregate: Habits_Aggregate;
  /** fetch data from the table: "habits" using primary key columns */
  habits_by_pk?: Maybe<Habits>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootCompletionsArgs = {
  distinct_on?: InputMaybe<Array<Completions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Completions_Order_By>>;
  where?: InputMaybe<Completions_Bool_Exp>;
};


export type Subscription_RootCompletions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Completions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Completions_Order_By>>;
  where?: InputMaybe<Completions_Bool_Exp>;
};


export type Subscription_RootCompletions_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootHabitsArgs = {
  distinct_on?: InputMaybe<Array<Habits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habits_Order_By>>;
  where?: InputMaybe<Habits_Bool_Exp>;
};


export type Subscription_RootHabits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habits_Order_By>>;
  where?: InputMaybe<Habits_Bool_Exp>;
};


export type Subscription_RootHabits_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['bigint'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  /** fetch data from the table: "habits" */
  habits: Array<Habits>;
  /** An aggregate relationship */
  habits_aggregate: Habits_Aggregate;
  id: Scalars['bigint'];
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  username: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersHabitsArgs = {
  distinct_on?: InputMaybe<Array<Habits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habits_Order_By>>;
  where?: InputMaybe<Habits_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersHabits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habits_Order_By>>;
  where?: InputMaybe<Habits_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  habits?: InputMaybe<Habits_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersUsernameKey = 'users_username_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  habits?: InputMaybe<Habits_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']>;
  password?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  habits_aggregate?: InputMaybe<Habits_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  password?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type UserHabitsCompletionsQueryVariables = Exact<{
  since?: InputMaybe<Scalars['timestamptz']>;
}>;


export type UserHabitsCompletionsQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', habits: Array<{ __typename?: 'habits', id: any, target: any, title: string, completions: Array<{ __typename?: 'completions', id: any, created_at: any }> }> } | null | undefined };


export const UserHabitsCompletionsDocument = gql`
    query UserHabitsCompletions($since: timestamptz = "2021-11-17") {
  users_by_pk(id: "1") {
    habits(limit: 50, offset: 0) {
      id
      target
      title
      completions(limit: 20, where: {created_at: {_gte: $since}}) {
        id
        created_at
      }
    }
  }
}
    `;

/**
 * __useUserHabitsCompletionsQuery__
 *
 * To run a query within a React component, call `useUserHabitsCompletionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserHabitsCompletionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserHabitsCompletionsQuery({
 *   variables: {
 *      since: // value for 'since'
 *   },
 * });
 */
export function useUserHabitsCompletionsQuery(baseOptions?: Apollo.QueryHookOptions<UserHabitsCompletionsQuery, UserHabitsCompletionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserHabitsCompletionsQuery, UserHabitsCompletionsQueryVariables>(UserHabitsCompletionsDocument, options);
      }
export function useUserHabitsCompletionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserHabitsCompletionsQuery, UserHabitsCompletionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserHabitsCompletionsQuery, UserHabitsCompletionsQueryVariables>(UserHabitsCompletionsDocument, options);
        }
export type UserHabitsCompletionsQueryHookResult = ReturnType<typeof useUserHabitsCompletionsQuery>;
export type UserHabitsCompletionsLazyQueryHookResult = ReturnType<typeof useUserHabitsCompletionsLazyQuery>;
export type UserHabitsCompletionsQueryResult = Apollo.QueryResult<UserHabitsCompletionsQuery, UserHabitsCompletionsQueryVariables>;