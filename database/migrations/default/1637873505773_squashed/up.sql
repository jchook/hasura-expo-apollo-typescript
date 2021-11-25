
SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.completions (
    id bigint NOT NULL,
    habit_id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.completions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.completions_id_seq OWNED BY public.completions.id;
CREATE TABLE public.habits (
    id bigint NOT NULL,
    title text NOT NULL,
    target numeric NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id bigint NOT NULL
);
CREATE SEQUENCE public.habits_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.habits_id_seq OWNED BY public.habits.id;
CREATE TABLE public.users (
    id bigint NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
ALTER TABLE ONLY public.completions ALTER COLUMN id SET DEFAULT nextval('public.completions_id_seq'::regclass);
ALTER TABLE ONLY public.habits ALTER COLUMN id SET DEFAULT nextval('public.habits_id_seq'::regclass);
ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
ALTER TABLE ONLY public.completions
    ADD CONSTRAINT completions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.habits
    ADD CONSTRAINT habits_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
CREATE TRIGGER set_public_habits_updated_at BEFORE UPDATE ON public.habits FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_habits_updated_at ON public.habits IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_users_updated_at ON public.users IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.completions
    ADD CONSTRAINT completions_habit_id_fkey FOREIGN KEY (habit_id) REFERENCES public.habits(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.habits
    ADD CONSTRAINT habits_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

INSERT INTO "public"."users"("id", "username", "password", "created_at", "updated_at") VALUES (1, E'jchook', E'demodemo', E'2021-11-24T22:44:25.485052+00:00', E'2021-11-24T22:44:25.485052+00:00');

INSERT INTO "public"."habits"("id", "title", "target", "created_at", "updated_at", "user_id") VALUES (1, E'Make bed', 1, E'2021-11-24T22:45:12.320056+00:00', E'2021-11-24T22:45:12.320056+00:00', 1);

INSERT INTO "public"."habits"("id", "title", "target", "created_at", "updated_at", "user_id") VALUES (2, E'Stretch', 1, E'2021-11-24T22:47:43.491126+00:00', E'2021-11-24T22:47:43.491126+00:00', 1);

INSERT INTO "public"."completions"("id", "habit_id", "created_at") VALUES (1, 1, E'2021-11-24T22:51:44.669161+00:00');

alter table "public"."habits" drop constraint "habits_user_id_fkey",
  add constraint "habits_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update cascade on delete cascade;

alter table "public"."completions" drop constraint "completions_habit_id_fkey",
  add constraint "completions_habit_id_fkey"
  foreign key ("habit_id")
  references "public"."habits"
  ("id") on update cascade on delete cascade;
