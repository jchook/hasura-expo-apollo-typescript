Habits
======

I would like to explore building an app with these technologies:

- Hasura
- Expo
- Apollo

Notably also these features:

- Offline first
- Mobile-first but web compatible with the same code
- Global loading indicator
- Optimistic updates
- Optimistic page loads with existing data

To do this I'll make a simplified "Habit Judo" app that allows you to commit
to habits, track your progress with them, and receive push notifications for
encouragement and quick wins.

Ideally from this experiment we gain:

1. A great boilerplate for a mobile app
2. Firm grasp of what is clearly the future of app development
3. Docs to quickly review the important stuff we learned
4. Fodder for a good blog post / tutorial / boilerplate / example repo


React Native Bootstrap
----------------------

```sh
expo init -t expo-template-blank-typescript
yarn add @apollo/client graphql
```


Hasura
------

Hasura is written in Haskell and is generally fast / optimized for most tasks.
[You may need to add indexes](https://github.com/hasura/graphql-engine/issues/6448).

- [Tutorial](https://hasura.io/learn/graphql/hasura/introduction/)
- [Running Hasura on Docker](https://hasura.io/docs/latest/graphql/core/deployment/deployment-guides/docker.html#deployment-docker)
- [Migrations](https://hasura.io/docs/latest/graphql/core/migrations/migrations-setup.html#migrations-setup)


Curious how I can export the GraphQL schema and re-import it into a fresh
Hasura instance.

You can install the CLI with `npm i -g hasura-cli` and configure completions
with, e.g. `hasura completions zsh > ~/.zsh/completion/_hasura`


GraphQL
-------

GraphQL cannot do a `select *` by design [but it can do
introspection](https://stackoverflow.com/a/44289026/554406), a la HATEOAS.

GraphQL requires a lot of duplicate code -- your schema explodes all over your
codebase and gets re-written 1000 times, with fields in each query. Migrations
require tons of code changes. CodeGen can help you with this task.


Normalized Caching
------------------

React-Query [does not support](https://react-query.tanstack.com/graphql)
[normalized caching](https://formidable.com/open-source/urql/docs/graphcache/normalized-caching/).

Apollo makes a strong case for why normalized caching matters
[here](https://www.apollographql.com/docs/react/why-apollo/).

> Let's go back to our GET_ALL_DOGS query from the previous example that
> displays a list of dogs. What if we want to transition to a detail page for a
> specific dog? Since we've already fetched information on each dog, we don't
> want to refetch the same information from our server. Thanks to Apollo
> Client's cache policies API, we can connect the dogs between two queries so
> we don't have to fetch information that we know is already available.

Apollo bills itself as a [state management
library](https://www.apollographql.com/docs/react/local-state/local-state-management/),
which makes it fundamentally different than React-Query.

We don't need server-side rendering (SSR), though it would be nice eventually on
the react-native-web integration.


Apollo vs React-Query
---------------------

Apollo is a very feature-filled state management library that has "normalized
caching" -- meaning it stores a proper type+id keyed database of the objects
fetched from the server, and can avoid, e.g., detail page queries if the data
already exists. The more powerful cache requires more fiddling.

Apollo has simpler [optimistic data
updates](https://www.apollographql.com/docs/react/performance/optimistic-ui/)
than React-Query's [strange and
cumbersome](https://react-query.tanstack.com/guides/optimistic-updates#_top)
solution.

Similarly the cache management of paginated queries, etc in Apollo [may seem
complex at first](https://www.apollographql.com/docs/react/pagination/core-api/#merging-paginated-results),
but it avoids the [narrow workaround you need for React-Query](https://react-query.tanstack.com/guides/paginated-queries)
and gives you much more control over how data is kept/merged (e.g. in data sets
with a large amount of pages).

React-Query is a backend-agnostic query + cache system. It is wayyy more
lightweight and has nicer defaults for most things, as long as you don't
want/need the features Apollo offers like normalized caching.

React-Query [has poor support for react-native](https://react-query.tanstack.com/react-native),
requiring some 3rd party debugging tools. Apollo has [first-class support](https://www.apollographql.com/docs/react/integrations/react-native/)
for react native.

Apollo may have more cumbersome or DIY [offline support](https://www.apollographql.com/docs/react/api/link/apollo-link-retry/)
[compared to React-Query](https://react-query.tanstack.com/guides/migrating-to-react-query-3#retryoffline-mutations).


Stack Notes
-----------

Using GraphQL may lead to needing
[CodeGen](https://www.graphql-code-generator.com/).

Folks recommend [JAMStack](https://jamstack.org/)

Apollo has optimistic updates [built-in](https://www.apollographql.com/docs/react/performance/optimistic-ui/)


See Also
--------

- [Hasura + React Native Tutorial](https://hasura.io/learn/graphql/react-native/intro-to-graphql/)
- [Codegen GraphQL](https://www.graphql-code-generator.com/docs/plugins/typescript-react-query/)
- [Tutorial Hasura + Auth0 + Apollo](https://auth0.com/blog/building-a-collaborative-todo-app-with-realtime-graphql-using-hasura/)
- [Offline First w/ RN + Apollo](https://teamairship.com/offline-first-approach-for-mobile-apps-react-native-and-apollo/)
- [Global loading indicator w/ Apollo](https://stackoverflow.com/questions/43964957/global-loading-flag-for-apollo-client)

