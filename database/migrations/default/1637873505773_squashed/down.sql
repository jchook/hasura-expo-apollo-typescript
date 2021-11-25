
alter table "public"."completions" drop constraint "completions_habit_id_fkey",
  add constraint "completions_habit_id_fkey"
  foreign key ("habit_id")
  references "public"."habits"
  ("id") on update restrict on delete restrict;

alter table "public"."habits" drop constraint "habits_user_id_fkey",
  add constraint "habits_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;

DELETE FROM "public"."completions" WHERE "id" = 1;

DELETE FROM "public"."habits" WHERE "id" = 2;

DELETE FROM "public"."habits" WHERE "id" = 1;

DELETE FROM "public"."users" WHERE "id" = 1;
